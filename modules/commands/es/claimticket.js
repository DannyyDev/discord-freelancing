const comissionData = require('../../databases/comissionData.json');
const Discord = require('discord.js');
module.exports.run = function(client, message, args, commandName) {
args = args.join(" ");
if (!comissionData[args]) return message.channel.send("We couldn't find a ticket with the ID you entered.");
else if (!args) return message.channel.send("Format: `-claimTicket <ticket ID>` to access the ticket.");
else {
    message.guilds.channels.resolve(comissionData[args].channelID).overwritePermissions(([
        {
           id:message.author.id,
           allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        },
      ]));
message.guild.channels.resolve(comissionData[id].channelID).send("<@" + message.author + "> claimed and joined the ticket.");
};
};