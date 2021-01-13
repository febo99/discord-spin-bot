const Discord = require('discord.js');
const greet = require('./functions/greetings').greet;
const secretKey = require('./secrets').secretKey;

// Import for commands
const ping = require('./functions/getInterventionsData');
const round = require('./functions/randomRound');
const teams = require('./functions/generateTeams');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', ()=>{
  console.log('I\'m ready');
});

client.on('guildMemberAdd', (member) => greet(member));

// set commands
client.commands.set(ping.name, ping);
client.commands.set(round.name, round);
client.commands.set(teams.name, teams);

client.on('message', (msg) =>{
  if (!msg.content.startsWith('.') || msg.author.bot) return;

  let args = msg.content.slice('.'.length).trim().split(/ +/); // get arguments
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    if (command == 'runda' || command == 'teams') {
      args = client;
    } else if (command == 'intervencije') {
      args.push(client);
    }
    client.commands.get(command).execute(msg, args);
    msg.delete();
  } catch (error) {
    console.log(error);
    msg.reply('alo alo, tu neke nea stima!');
  }
});


client.login(secretKey);
