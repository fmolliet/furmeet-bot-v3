/* eslint-disable no-useless-escape */
/** 
 * //TODO:
 * 
 * Update All fuctions
 */
const { fbGroupId, channelFurmeet, usersAdmins } = require('../config');

module.exports = {
    name: 'meeting',
    description: 'Faz um meeting e marca todos da UF!',
    exclusiveGuild: fbGroupId,
    exclusiveChannel: channelFurmeet,
    usage: '<UF> <STAFF> <INFO>',
    args: true,
    execute(message, args){
        /*
        if( ! usersAdmins.includes(message.author.id)  ) 
            return message.channel.send('Você não tem permissão para esse comando, entre em contato com a Staff!');
        
        try{
            const local = args[0];
            const organizer = args[1];
            args.splice(0, 2);
            if(!args[0]) {
                message.channel.send('Nenhuma informação dada sobre o meet :/');
                return;
            }
            const estado = getStateName(local);
            let lista ='';
            if(validateState(local)){
                const furros = listByLocation(local);
                for(furro in furros)//client.channels.get(introducao)
                    lista += `<@${furros[furro]}> `;
                
      
                // mensagem como furros de <estado>
                let mensagem = `FurMeet em **${local} - ${estado.join()}**\n`;
                mensagem += lista;
                mensagem += `\nOrganizado por: **${organizer}**`;
                mensagem += '\nSobre o evento: '+ args.join(' ');
                
                message.channel.send(mensagem);
            } else
                message.channel.send('Estado Inválido: \`' + args[0] + '\` tente outro!');
        }catch (error) {
            console.error(error);
            message.reply(' Ocorreu um erro na execução do comando, entre em contato com o dev!');
        }*/
        
        
    }
};
