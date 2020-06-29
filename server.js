const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
const configData = require('./modules/configuration/configData.json');

function readyEvent(clientData) {
    console.log('Logged in as ' + clientData.user.username);
};

function commandHandler(clientData, message, args, commandName) {
    try {
var commandFile = require('./modules/commands/es/' + commandName + '.js');
commandFile.run(clientData, message, args, commandName);
    } catch (e) {
console.log(e.stack);
    }
};

function messageEvent(clientData, messageData) {
    if (!messageData.guild) return;
    if (messageData.member.bot) return;
    if (!messageData.content.startsWith(prefix)) return;
    var args = messageData.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    commandHandler(clientData, messageData, args, command);
};

client.on('ready', () => readyEvent(client));

client.on('message', msg => messageEvent(client, msg));

client.login(configData.TOKEN);