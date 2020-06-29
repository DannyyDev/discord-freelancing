const fs = require('fs');
const ticketData = require('../../databases/ticketData.json');
const comissionData = require('../../databases/comissionData.json');
const configData = require('../../configuration/configData.json');
const Discord = require('discord.js');
module.exports.run = function(client, message, args, commandName) {
    if (!message.channel.name.startsWith("ticket-")) return;
    if (ticketData[message.channel.id].sent) return message.channel.send("This ticket's been set, create a new one by using `-new`");
    if (!ticketData[message.channel.id].budget) return message.channel.send("Budget data is missing.");
    if (!ticketData[message.channel.id].deadline) return message.channel.send("Deadline data is missing.");
    if (!ticketData[message.channel.id].desc) return message.channel.send("Description data is missing.");
    if (!ticketData[message.channel.id].notes) return message.channel.send("Notes data is missing.");
    else {
var comissionID = require('../../functions/IDgenerator.js').execute(18)
ticketData[message.channel.id] = {
    ticketID: ticketData[message.channel.id].ticketID,
    budget: ticketData[message.channel.id].budget,
    deadline: ticketData[message.channel.id].deadline,
    desc: ticketData[message.channel.id].desc,
    notes: ticketData[message.channel.id].notes,
    authorID: message.author.id,
    sent: true
};
fs.writeFile('./modules/databases/ticketData.json', JSON.stringify(ticketData), function(err) {
    if(err) console.log('error', err);
  });
};
if (!comissionData[comissionID]){
    comissionData[comissionID] = {
        budget: ticketData[message.channel.id].budget,
        deadline: ticketData[message.channel.id].deadline,
        desc: ticketData[message.channel.id].desc,
        notes: ticketData[message.channel.id].notes,
        channelID: message.channel.id,
        authorID: ticketData[message.channel.id].authorID
    };
    fs.writeFile('./modules/databases/comissionData.json', JSON.stringify(comissionData), function(err) {
        if(err) console.log('error', err);
      });
    };
    const embed = new Discord.MessageEmbed();
    embed.setDescription('Ticket\'s ID: **' + comissionID + "**");
    embed.addField('Budget:', comissionData[comissionID].budget);
    embed.addField('Deadline:', comissionData[comissionID].deadline);
    embed.addField('Description:', comissionData[comissionID].desc);
    embed.addField('Notes:', comissionData[comissionID].notes);
    embed.setFooter('Sent by: ' + comissionData[comissionID].authorID);
    message.guild.channels.resolve(configData.comissionsChannelID).send(embed);
};