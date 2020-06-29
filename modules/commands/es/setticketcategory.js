const ticketSettings = require('../../databases/ticketSettings.json');
const fs = require('fs');
module.exports.run = function(client, message, args, commandName) {
args = args.join(" ");
if (!args) return message.channel.send("Format: `-setTicketCategory <category ID>` to set up a category to store tickets.");
else {
    if (!ticketSettings[message.guild.id]) {
        ticketSettings[message.guild.id] = {
        categoryID: false,
        ticketNum: 0
        };
    };
    if (ticketSettings[message.guild.id].categoryID == args) return message.channel.send("That category is already settled to store tickets.")
ticketSettings[message.guild.id] = {
    categoryID: args,
    ticketNum: 0
};
message.channel.send("The category **" + message.guild.channels.resolve(args).name + "** has been settled to store tickets.");
fs.writeFile('./modules/databases/ticketSettings.json', JSON.stringify(ticketSettings), function(err) {
    if(err) console.log('error', err);
  });
};
};