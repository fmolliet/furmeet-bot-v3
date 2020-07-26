const { ownerId } = require('../config');

module.exports = {
    name: 'hello',
    aliases: ['olar', 'ola', 'hellor', 'hellow', 'oi'],
    descriptio: 'Manda uns olar pra quem mandar o comando',
    execute(message, args){
        if(message.author.id === ownerId)
            message.channel.send(':wave: Oi pai! >w<');
        else 
            message.channel.send(':smiley: :wave: Olár Furro! <a:owo:474420880617897996>');
    }
};