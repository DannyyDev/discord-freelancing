const ticketData = require('../../databases/ticketData.json');
const fs = require('fs');
module.exports.run = function(client, message, args, commandName) {
    if (!message.channel.name.startsWith("ticket-")) return;
else {
message.channel.send("The ticket will get deleted in a few seconds.");
delete ticketData[message.channel.id];
fs.writeFile('./modules/databases/ticketData.json', JSON.stringify(ticketData), function(err) {
    if(err) console.log('error', err);
  });
};
message.channel.delete();
};