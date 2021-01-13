module.exports = {
  name: 'teams',
  description: 'Razporedi igralce',
  execute(message, args) {
    const textChannel = '776858049444315150'; // where msgs are sent
    const voiceChat = message.guild.channels.cache.get(textChannel);
    const members = voiceChat.guild.voiceStates.cache;

    members.sort(() => Math.round(Math.random()) - 0.5); // random sort array

    let i = 0;
    let team1 = '';
    let team2 = '';

    members.forEach((member) =>{
      if (i++ < members.size / 2) {
        team1 += `<@${member.id}>`;
      } else {
        team2 += `<@${member.id}>`;
      }
    });
    args.channels.cache.get('789210047154356254').
        send(`**EKIPE SO PERAJT:**\nAttack: ${team1} \nDefence: ${team2}`);
  },
};

