const ticketData = require('../../databases/ticketData.json');
module.exports.run = function(client, message, args, commandName) {
if (!message.channel.name.startsWith("ticket-")) return;
args = args.join(" ");
if (ticketData[message.channel.id].authorID != message.author.id) return message.channel.send("Only the ticket author can remove users from the ticket.");
if (!args) return message.channel.send("Format: `-removeMember <user ID>` to remove users from the ticket.");
else {
    message.channel.overwritePermissions(([
        {
           id:message.guild.members.resolve(args).id,
           deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        },
      ]));
message.channel.send("The user **" + message.guild.members.get(args).user.username + "**'s been removed from the ticket.");
};
};