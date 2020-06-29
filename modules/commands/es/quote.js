const comissionData = require('../../databases/comissionData.json');
const Discord = require('discord.js');
module.exports.run = function(client, message, args, commandName) {
id = args[0];
quote = args.slice(0).join(" ");
if (!comissionData[id]) return message.channel.send("We couldn't find a ticket with the ID you entered.");
else if (!id || !quote) return message.channel.send("Format: `-quote <ticket ID> <text quote>` to send your data to the ticket.");
else {
    const embed = new Discord.MessageEmbed();
    embed.setDescription('Freelancer\'s portfolio.');
    embed.addField('Freelancer\'s name:', message.author.username);
    embed.addField('Text quote:', quote);
    embed.addField('Freelancer\'s portfolio:', "-portfolio " + message.author);
message.guild.channels.get(comissionData[id].channelID).send(embed);
};
};