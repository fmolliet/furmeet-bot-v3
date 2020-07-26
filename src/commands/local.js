/* eslint-disable no-useless-escape */
const { fbGroupId, channelFurmeet } = require('../config');

module.exports = {
    name: 'local',
    description: 'Cadastra ou atualiza seu local de Meetings!',
    exclusiveGuild: fbGroupId,
    exclusiveChannel: channelFurmeet,
    usage: '<UF>',
    args: true,
    async execute(message, args){
        /*
        try {
            if(args[0]){
                var rs = registerUser(message.author.id,args[0]);
                if(rs === 'ERROR-UF')
                    message.channel.send('Estado Inválido: \`' + args[0] + '\` tente outro!');
                
                else
                    message.channel.send(rs);
            }
        } catch (err){
            console.log(err);
        }*/
            
    }
};


