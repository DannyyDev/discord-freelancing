const configData = require('../../configuration/configData.json');
module.exports.run = function(client, message, args, commandName) {
message.channel.send("The service team's paypal address is " + configData.PaypalURL);
};