const ticketData = require('../../databases/ticketData.json');
const fs = require('fs');
module.exports.run = function(client, message, args, commandName) {
    if (!message.channel.name.startsWith("ticket-")) return;
args = args.join(" ");
if (!args) return message.channel.send("Format: `-notes <note>` to register a note for the job.");
else {
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
    ticketData[message.channel.id] = {
        ticketID: ticketData[message.channel.id].ticketID,
        budget: ticketData[message.channel.id].budget,
        deadline: ticketData[message.channel.id].deadline,
        desc: ticketData[message.channel.id].desc,
        notes: args,
        authorID: message.author.id,
        sent: false
    };
message.channel.send("The note's been registered as: **" + args + "**");
fs.writeFile('./modules/databases/ticketData.json', JSON.stringify(ticketData), function(err) {
    if(err) console.log('error', err);
  });
};
};