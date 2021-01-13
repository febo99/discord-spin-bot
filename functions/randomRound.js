module.exports = {
  name: 'runda',
  description: 'Kdo bo dal za rundo?',
  execute(message, args) {
    const server = message.guild;
    const members = server.members.cache;
    const selection = members.filter((el) => !el.user.bot);
    const selectedNr = Math.floor(Math.random() * Math.floor(selection.size));

    let i = 0;
    selection.forEach((member) =>{
      if (selectedNr == i++) {
        args.channels.cache.get('789210047154356254').
            send(`<@${member.user.id}> bo za rundo dal!`);
      }
    });
  },
};
