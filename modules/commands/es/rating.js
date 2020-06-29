const userData = require('../../databases/userData.json');
module.exports.run = function(client, message, args, commandName) {
    var user = message.mentions.users.first();
    if (!user || user.id == message.author.id) {
        if (!userData[message.author.id]){
            userData[message.author.id] = {
                rating: 0
            };
            fs.writeFile('./modules/databases/userData.json', JSON.stringify(userData), function(err) {
                if(err) console.log('error', err);
              });
            };
message.channel.send("You have **" + userData[message.author.id].rating + "** raing points.");
    } else {
        if (!userData[user.id]){
            userData[user.id] = {
                rating: 0
            };
            fs.writeFile('./modules/databases/userData.json', JSON.stringify(userData), function(err) {
                if(err) console.log('error', err);
              });
            };
        };
message.channel.send(user + " has **" + userData[user.id].rating + "** rating points.");
    };