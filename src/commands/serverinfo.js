module.exports = {
    name: 'serverinfo',
    description: 'Retorna dados do servidor',
    guildOnly: false,
    execute(message, args){
        message.channel.send(`Nome do servidor: ${message.guild.name}\nTotal membros: ${message.guild.memberCount}`);
    }
};