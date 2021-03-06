# Supported Keys

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Direction

Keys used for directional movement within the TiVo menus.
The LEFT and RIGHT keys can also navigate forward and
backward between screens.

Type: (`"UP"` \| `"DOWN"` \| `"LEFT"` \| `"RIGHT"`)

## Navigation

These keys are used for navigating through the TiVo menus

| Key    | Description                      |
| ------ | -------------------------------- |
| SELECT | Selects the highlighted option.  |
| TIVO   | Navigate to TiVo Central.        |
| LIVETV | Navigate to Live TV mode.        |
| GUIDE  | Show the Live TV Guide.          |
| INFO   | Show any additional information. |
| EXIT   | Exit the current menu.           |

Type: ([Direction](#direction) \| `"SELECT"` \| `"TIVO"` \| `"LIVETV"` \| `"GUIDE"` \| `"INFO"` \| `"EXIT"`)

## Control

These keys control various aspects of the audio or video display.

| Key                                                                                                                                                                                              | Description                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| THUMBSUP<br>THUMBSDOWN                                                                                                                                                                           | Rate the program or other on-screen item.              |
| CHANNELUP<br>CHANNELDOWN                                                                                                                                                                         | Change the channel                                     |
| MUTE<br>VOLUMEDOWN<br>VOLUMEUP                                                                                                                                                                   | Change the volume                                      |
| TVINPUT                                                                                                                                                                                          | Change the TV's input source                           |
| VIDEO_MODE_FIXED_480i<br>VIDEO_MODE_FIXED_480p<br>VIDEO_MODE_FIXED_720p<br>VIDEO_MODE_FIXED_1080i<br>VIDEO_MODE_HYBRID<br>VIDEO_MODE_HYBRID_720p<br>VIDEO_MODE_HYBRID_1080i<br>VIDEO_MODE_NATIVE | Set the current video output mode                      |
| CC_ON<br>CC_OFF                                                                                                                                                                                  | Turn captions on or off                                |
| OPTIONS                                                                                                                                                                                          | Change options for the current screen, where available |
| ASPECT_CORRECTION_FULL<br>ASPECT_CORRECTION_PANEL<br>ASPECT_CORRECTION_ZOOM<br>ASPECT_CORRECTION_WIDE_ZOOM                                                                                       | Change the aspect ratio                                |

Type: (`"THUMBSUP"` \| `"THUMBSDOWN"` \| `"CHANNELUP"` \| `"CHANNELDOWN"` \| `"MUTE"` \| `"VOLUMEDOWN"` \| `"VOLUMEUP"` \| `"TVINPUT"` \| `"VIDEO_MODE_FIXED_480i"` \| `"VIDEO_MODE_FIXED_480p"` \| `"VIDEO_MODE_FIXED_720p"` \| `"VIDEO_MODE_FIXED_1080i"` \| `"VIDEO_MODE_HYBRID"` \| `"VIDEO_MODE_HYBRID_720p"` \| `"VIDEO_MODE_HYBRID_1080i"` \| `"VIDEO_MODE_NATIVE"` \| `"CC_ON"` \| `"CC_OFF"` \| `"OPTIONS"` \| `"ASPECT_CORRECTION_FULL"` \| `"ASPECT_CORRECTION_PANEL"` \| `"ASPECT_CORRECTION_ZOOM"` \| `"ASPECT_CORRECTION_WIDE_ZOOM"`)

## Trickplay

These keys control video playback

| Key                | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| PLAY               | Play the video, or switch to normal speed                                                |
| FORWARD<br>REVERSE | Rewind or fast-forward.                                                                  |
| PAUSE              | Pause the video                                                                          |
| SLOW               | Play in slow motion                                                                      |
| REPLAY             | Skip backwards a few seconds                                                             |
| ADVANCE            | Jump to the end or beginning, or between tick marks while in rewind or fast-forward mode |
| RECORD             | Record the selected video                                                                |

Type: (`"PLAY"` \| `"FORWARD"` \| `"REVERSE"` \| `"PAUSE"` \| `"SLOW"` \| `"REPLAY"` \| `"ADVANCE"` \| `"RECORD"`)

## Numbers

| Key                                                                          | Description                |
| ---------------------------------------------------------------------------- | -------------------------- |
| NUM0<br>NUM1<br>NUM2<br>NUM3<br>NUM4<br>NUM5<br>NUM6<br>NUM7<br>NUM8<br>NUM9 | The numbers 0 - 9          |
| ENTER                                                                        | Confirm the entered number |
| CLEAR                                                                        | Clear the entered number   |

Type: (`"NUM0"` \| `"NUM1"` \| `"NUM2"` \| `"NUM3"` \| `"NUM4"` \| `"NUM5"` \| `"NUM6"` \| `"NUM7"` \| `"NUM8"` \| `"NUM9"` \| `"ENTER"` \| `"CLEAR"`)

## Shortcuts

These keys are used for various shortcuts throught the interface
| Key                 | Description                               |
\|---------------------\|-------------------------------------------\|
| ACTION_A<br>ACTION_B<br>ACTION_C<br>ACTION_D | The four colored shortcut buttons

Type: (`"ACTION_A"` \| `"ACTION_B"` \| `"ACTION_C"` \| `"ACTION_D"`)

## Ircode

Type: ([Navigation](#navigation) \| [Control](#control) \| [Trickplay](#trickplay) \| [Numbers](#numbers) \| [Shortcuts](#shortcuts))

## Alphabet

The keys A - Z can be used to type in text entry fields.

Type: (`"A"` \| `"B"` \| `"C"` \| `"D"` \| `"E"` \| `"F"` \| `"G"` \| `"H"` \| `"I"` \| `"J"` \| `"K"` \| `"L"` \| `"M"` \| `"N"` \| `"O"` \| `"P"` \| `"Q"` \| `"R"` \| `"S"` \| `"T"` \| `"U"` \| `"V"` \| `"W"` \| `"X"` \| `"Y"` \| `"Z"`)

## SpecialCharacter

| Key       | Character |
| --------- | --------- |
| MINUS     | -         |
| EQUALS    | =         |
| LBRACKET  | \[        |
| RBRACKET  | ]         |
| BACKSLASH | \\        |
| SEMICOLON | ;         |
| QUOTE     | '         |
| COMMA     | ,         |
| PERIOD    | .         |
| SLASH     | /         |
| BACKQUOTE | \`        |
| SPACE     |           |

Type: (`"MINUS"` \| `"EQUALS"` \| `"LBRACKET"` \| `"RBRACKET"` \| `"BACKSLASH"` \| `"SEMICOLON"` \| `"QUOTE"` \| `"COMMA"` \| `"PERIOD"` \| `"SLASH"` \| `"BACKQUOTE"` \| `"SPACE"`)

## KeyboardNavigation

| Key                                     | Description                                         |
| --------------------------------------- | --------------------------------------------------- |
| KBDUP<br>KBDDOWN<br>KBDLEFT<br>KBDRIGHT | Move the cursor in the given direction              |
| PAGEUP<br>PAGEDOWN                      | Move the cursor a whole page in the given direction |
| HOME                                    | Move the cursor to the beginning                    |
| END                                     | Move the cursor to the end                          |

Type: (`"KBDUP"` \| `"KBDDOWN"` \| `"KBDLEFT"` \| `"KBDRIGHT"` \| `"PAGEUP"` \| `"PAGEDOWN"` \| `"HOME"` \| `"END"`)

## Edit

| Key              | Description                            |
| ---------------- | -------------------------------------- |
| CAPS             | Caps lock                              |
| LSHIFT<br>RSHIFT | Shift                                  |
| INSERT           | Set insert mode                        |
| BACKSPACE        | Delete the character before the cursor |
| DELETE           | Delete the character after the cursor  |
| KBDENTER         | Enter key                              |

Type: (`"CAPS"` \| `"LSHIFT"` \| `"RSHIFT"` \| `"INSERT"` \| `"BACKSPACE"` \| `"DELETE"` \| `"KBDENTER"`)

## KeyboardControl

| Key             | Description          |
| --------------- | -------------------- |
| STOP            | Stop playback        |
| VIDEO_ON_DEMAND | Jump to the VOD menu |

Type: (`"STOP"` \| `"VIDEO_ON_DEMAND"`)

## KeyboardCode

Type: ([Ircode](#ircode) \| [Alphabet](#alphabet) \| [SpecialCharacter](#specialcharacter) \| [KeyboardNavigation](#keyboardnavigation) \| [Edit](#edit) \| [KeyboardControl](#keyboardcontrol))
