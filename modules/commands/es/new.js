const ticketSettings = require('../../databases/ticketSettings.json');
const ticketData = require('../../databases/ticketData.json');
const fs = require('fs');
module.exports.run = function(client, message, args, commandName) {
    if (!ticketSettings[message.guild.id]) return message.channel.send("The server doesn't have a settled ticket category.");
    else {
        message.delete();
ticketSettings[message.guild.id].ticketNum = parseInt(ticketSettings[message.guild.id].ticketNum+1);
fs.writeFile('./modules/databases/ticketSettings.json', JSON.stringify(ticketSettings), function(err) {
    if(err) console.log('error', err);
  });
};
message.guild.channels.create('ticket-'+message.author.username, 'text').then(channel => {
message.guild.channels.resolve(channel.id).setParent(ticketSettings[message.guild.id].categoryID);
message.guild.channels.resolve(channel.id).overwritePermissions(([
    {
       id: message.author.id,
       deny: ['VIEW_CHANNEL'],
       allow: ["SEND_MESSAGES",  "READ_MESSAGE_HISTORY"]
    },
  ]));
message.guild.channels.resolve(channel.id).overwritePermissions(([
    {
       id:message.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
    },
  ]));
message.guild.channels.resolve(channel.id).send("<@" + message.author + "> your ticket's been created successfully, here is a list of commands you may use while setting up your ticket.\n>>> -dept (@pingdepartment)\n-budget (budget)\n-deadline (deadline)\n-desc (description of task)\n-notes (any notes)\n-send (sends the ticket to Commissions channel)")
if (!ticketData[message.channel.id]){
    ticketData[message.channel.id] = {
        ticketID: require('../../functions/IDgenerator.js').execute(18),
        budget: "",
        deadline: "",
        desc: "",
        notes: "",
        authorID: message.author.id,
        sent: false
    };
    };
    fs.writeFile('./modules/databases/ticketData.json', JSON.stringify(ticketData), function(err) {
      if(err) console.log('error', err);
    });
});
}