const FULLNAME_AUTO_ERROR = "Wrong format: An example would be `!swedish spanish-text-here`, where the `spanish-text` is converted to swedish";
const ABBR_AUTO_ERROR =
  "Wrong format: An example would be `!de french-text-here`, where the `french-text-here` is converted to german";
const TRANS_SPECIFIC_ERROR =
  "Wrong format: An example would be `!translate swedish korean swedish-text-here` where after `!translate` would translate the `swedish-text-here` into korean";
const TRANSLATION_ERROR = "There was an error: ";
const COMMANDS_HELP =
  "Here are available commands:\n\
```!translate from to text```\
=>`!translate english italian english-text-here` turns english to italian\n\
```!language auto-translate-text```\
=>`!french english-text-here` turns english to french\n\
```!abrv auto-translate-text```\
=>`!de english-text-here` turns english to german";

module.exports = {
  FULLNAME_AUTO_ERROR,
  ABBR_AUTO_ERROR,
  TRANS_SPECIFIC_ERROR,
  TRANSLATION_ERROR,
  COMMANDS_HELP,
};
