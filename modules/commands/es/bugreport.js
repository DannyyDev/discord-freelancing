const reportSettings = require('../../databases/reportSettings.json');
const Discord = require('discord.js');
module.exports.run = function(client, message, args, commandName) {
args = args.join(" ");
if (!reportSettings[message.guild.id]) return message.channel.send("The server doesn't have a settled bug report channel.");
else if (!args) return message.channel.send("Format: `-bugReport <report content>` to send a bug report.");
else {
    const embed = new Discord.MessageEmbed();
    embed.setDescription('Bug report.');
    embed.addField('Content:', args);
    embed.setFooter('Reported by: ' + message.author.tag);
client.channels.fetch(reportSettings[message.guild.id].channel).then(c => c.send(embed));
};
};