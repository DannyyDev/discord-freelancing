const reportSettings = require('../../databases/reportSettings.json');
const fs = require('fs');
module.exports.run = function(client, message, args, commandName) {
var channel = message.mentions.channels.first();
if (!channel) return message.channel.send("Format: `-setBugReport #channel` to set up a channel for bug reports.");
else {
    if (!reportSettings[message.guild.id]) {
        reportSettings[message.guild.id] = {
        channel: false
        };
    };
    if (reportSettings[message.guild.id].channel == channel) return message.channel.send("This channel is already setted for bug reports.")
reportSettings[message.guild.id] = {
    channel: channel.id
};
message.channel.send("The channel for bug reports is been settled as <#" + channel + ">");
fs.writeFile('./modules/databases/reportSettings.json', JSON.stringify(reportSettings), function(err) {
    if(err) console.log('error', err);
  });
};
};