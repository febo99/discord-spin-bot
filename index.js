const Discord = require('discord.js');
const secretKey = require('./secrets').secretKey;

const client = new Discord.Client();

client.on('ready', ()=>{
    console.log('I\'m ready');
});
try{
    client.login('secredtKey');
}catch(e){
    console.log(e);
}