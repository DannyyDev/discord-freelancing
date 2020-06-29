const configData = require('../../configuration/configData.json');
module.exports.run = function(client, message, args, commandName) {
    if (!message.channel.name.startsWith("ticket-")) return;
message.channel.send("<@&" + configData.DepartmentRole + ">");
};