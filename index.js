const Discord = require('discord.js');
const greet = require('./functions/greetings').greet;
const ping = require('./functions/getInterventionsData');
const round = require('./functions/randomRound');
const secretKey = require('./secrets').secretKey;

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', ()=>{
    console.log('I\'m ready');
});

client.commands.set(ping.name, ping);
client.commands.set(round.name, round);

client.on('guildMemberAdd', member => greet(member))

client.on('message', msg =>{
    if (!msg.content.startsWith('.') || msg.author.bot) return;

    let args = msg.content.slice('.'.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        if(command == 'runda'){
            args = client;
        }
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
    
})


client.login(secretKey);
