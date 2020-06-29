const userPortfolio = require('../../databases/userPortfolio.json');
module.exports.run = function(client, message, args, commandName) {
var user = message.mentions.users.first();
if (!user || user.id == message.author.id) {
    if (!userPortfolio[message.author.id]) return message.channel.send("You don't have a portfolio.");
    const embed = new Discord.MessageEmbed();
    embed.setDescription('Freelancer\'s portfolio.');
    embed.addField('Freelancer\'s name:', message.author.username);
    embed.addField('Freelancer\'s portfolio:', userPortfolio[message.author.id].resources.join("\n"));
message.channel.send(embed);
} else {
    if (!userPortfolio[user.id]) return message.channel.send("That user doesn't have a portfolio.");
    const embed = new Discord.MessageEmbed();
    embed.setDescription('Freelancer\'s portfolio.');
    embed.addField('Freelancer\'s name:', user.username);
    embed.addField('Freelancer\'s portfolio:', userPortfolio[user.id].resources.join("\n"));
    message.channel.send(embed);
};
};