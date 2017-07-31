var events = require('events');
var mdns = require('mdns-js');
var TiVoRemote = require('./TiVoRemote');

class TiVoDiscovery extends events.EventEmitter {
    constructor() {
        super();
        this.DVRs = [];
        const browser = mdns.createBrowser(mdns.tcp('tivo-remote'));

        browser.on('ready', () => {
            browser.discover();
        });
        browser.on('update', service => {
            if (service.query.length == 0 || !service.query[0].startsWith("_tivo-remote")) {
                return;
            }
            const device = new TiVoRemote(service);
            this.DVRs[device.id] = device;
            this.emit('founddevice', device);
        })
        // .on('serviceDown', service => {
        //     const dvr = $DVRs.get(this)[service.txtRecord.TSN];
        //     dvr.deinit();
        //     delete $DVRs.get(this)[service.txtRecord.TSN];
        //
        //     this.emit('lostdevice', dvr);
        // });
    }
}

module.exports = TiVoDiscovery;
