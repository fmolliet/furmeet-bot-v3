/* eslint-disable no-useless-escape */
const { fbGroupId, channelFurmeet } = require('../config');

module.exports = {
    name: 'fur',
    description: 'Lista todos furries de um estado!',
    exclusiveGuild: fbGroupId,
    exclusiveChannel: channelFurmeet,
    usage: '<UF>',
    args: true,
    execute(message, args){
        try{
            if(args[0]) {
                let local = args[0].toUpperCase();
                var estado = getStateName(local);
                var lista ='\`\`\`Furries no Estado: '+ local + '\n';
                if(validateState(local)){
                    var furros = listByLocation(local);
                    for(furro in furros)
                        lista += `${fur.username}\n`;
                    
                    
                    //let fur = client.users.get(furros[furro]);
                    //if( fur )
                    lista +='\`\`\`';
                    message.channel.send(lista);
                } 
            }
        }catch (error) {
            console.error(error);
            message.reply(' Ocorreu um erro na execução do comando, entre em contato com o dev!');
        }
    }
};
