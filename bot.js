const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = "NTI4NTQxNzc4NDA0NTczMTg1.DwjzcA.Q8Y_jV8Qso0JR5u-y87O-6C_gJU"

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
if(message.content == 'Hi')
{
    message.channel.sendMessage('Hello ' + message.author + ', how are you?');
}
});
bot.on('message', function(message){
    if(message.content == "?whitelist-key")
    {
        message.channel.sendMessage("Here's Your Key " + message.author + ', ' + Math.floor(Math.random() *100 )+ Math.floor(Math.random() *100 )+ Math.floor(Math.random() *100 )+ Math.floor(Math.random() *100 )+ Math.floor(Math.random() *100 )+ Math.floor(Math.random() *100 ))
    }
})
bot.on('ready', function(){
  console.log("Ready");
});
bot.login(TOKEN);
