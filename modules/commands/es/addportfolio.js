const userPortfolio = require('../../databases/userPortfolio.json');
module.exports.run = function(client, message, args, commandName) {
args = args.join("");
if (!args) return message.channel.send("Format: `-addPortfolio <portfolio URL>` to add a new resource to your portfolio.");
else {
    if (!userPortfolio[message.channel.id]){
        userPortfolio[message.channel.id] = {
            resources: []
        };
    };
    userPortfolio[message.channel.id].resources.push(args);
    fs.writeFile('./modules/databases/userPortfolio.json', JSON.stringify(userPortfolio), function(err) {
        if(err) console.log('error', err);
      });
    };
message.channel.send("The resource **" + args + "**'s been added to your portfolio.");
};