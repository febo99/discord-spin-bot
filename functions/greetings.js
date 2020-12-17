exports.greet = (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if(!channel) return;

    channel.send(`Ja pa serbus ded, ${member}`);
}