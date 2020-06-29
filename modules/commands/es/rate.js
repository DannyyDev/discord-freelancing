const userData = require('../../databases/userData.json');
module.exports.run = function(client, message, args, commandName) {
    var user = message.mentions.users.first();
    if (!user || user.id == message.author.id) return message.channel.send("Format: `-rate @usuario`")
    else {
        if (!userData[user.id]){
            userData[user.id] = {
                rating: 0
            };
        };
        userData[user.id].rating = parseInt(userData[user.id].rating + 1);
        message.channel.send('You have rated to ' + user);
        fs.writeFile('./modules/databases/userData.json', JSON.stringify(userData), function(err) {
            if(err) console.log('error', err);
          });
        };
    };