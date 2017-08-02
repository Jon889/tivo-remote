var events = require('events');
var messageSocket = require('message-socket').default;
const debug = require('debug')('tivo-remote:conn');

const EventEmitter = events.EventEmitter;

function parseTXTRecord(txt) {
    var txtRecords = {};
    for (var record of txt) {
        var [key, value] = record.split("=");
        txtRecords[key] = value;
    }
    return txtRecords;
}

class TiVoRemote extends EventEmitter {
    constructor(service) {
        super();
        debug(service);
        this.friendlyName = service.fullname.split(".")[0];
        this.tsn = parseTXTRecord(service.txt).TSN;
        this.ip = service.addresses[0];

        this.socket = new messageSocket(this.ip, service.port, /.*\r/);

        this.socket.asObservable().subscribe((...args) => {
            this._handleIncoming(...args);
        });
    }
    /**
     * Send an IR code to the DVR. The list of supported codes
     * is very long; For details, see [Ircode](KEYS.md#ircode)
     */
    sendIRCode(code) {
        this._sendTiVoCommand('IRCODE', code);
    }

    /**
     * Send a key code to the DVR. The list of supported codes
     * is very long; For details, see [KeyboardCode](KEYS.md#keyboardcode)
     */
    sendKeyboardCode(code) {
        this._sendTiVoCommand('KEYBOARD', code);
    }

    /**
     * "Teleport" to a given location in the DVR UI.
     */
    teleport(destination) {
        this._sendTiVoCommand('TELEPORT', destination);
    }

    /**
     * Tune the DVR to the given channel.  If the forced flag is set,
     * the DVR will be tuned even if a recording is in progress
     * (canceling the recording).
     */
    setChannel(channel, forced = false) {
        this._sendTiVoCommand(forced ? 'FORCECH' : 'SETCH', channel);
    }

    /**
     * Once you're finished with the device object, call deinit() to close
     * the underlying network connection.
     */
    deinit() {
        this.socket.close();
    }

    /**
     * The name of this device.
     */
    get name() {
        return this.friendlyName;
    }

    /**
     * The unique ID of this device.
     */
    get ID() {
        return this.tsn;
    }

    /**
     * The IP address of this device.
     */
    get IPAddress() {
        return this.ip;
    }

    _sendTiVoCommand(cmd, args) {
        this.socket.send(`${cmd} ${args}\r`);
    }

    _handleIncoming(resp) {
        debug(`Incoming: ${resp}`);
        if (typeof resp === 'undefined') return;

        const response = resp.replace(/\r$/, '');

        // possible response messages:
        /*
            * INVALID_COMMAND : couldn't parse the last command you sent. TODO: where to publish this?
            * MISSING_TELEPORT_NAME : you tried to teleport, but left out the name
            * LIVETV_READY : you teleported to LIVETV, and it's now ready for further commands
            * CH_STATUS num num reason : channel status
            * CH_FAILED reason : channel change failed
            *
            * per v1.1 protocol doc, no other responses are sent.
            */

        let match;
        if (response === 'MISSING_TELEPORT_NAME') {
            this.emit('error', { reason: response });
        } else if (match = response.match(/^CH_FAILED ([a-zA-Z_-]+)$/)) {
            const reason = match[1];
            this.emit('error', { reason });
        } else if (response === 'LIVETV_READY') {
            this.emit('livetvready', { isReady: true });
        } else if (match = response.match(/^CH_STATUS (\d{1,4}) (?:(\d{1,4}) )?([a-zA-Z_-]+)$/)) {
            const channel = match[1],
                  subchannel = match[2],
                  reason = match[3];
            this.emit('channelchange', { success: true, channel, subchannel, reason });
        }
    }
}

module.exports = TiVoRemote;
