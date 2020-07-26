/* eslint-disable no-useless-escape */
const { trollAdmins } = require('../config');
const client = require('../bot.js');

module.exports = {
    name: 'aguarde',
    description: 'Comando exclusivo para mandar os macacos da introdução aguardarem',
    guildOnly: true,
    execute(message, args) {
        if( trollAdmins.includes( message.author.id ) )
            return client.channels.get('232658139231682560')
                .send('Devido a problemas técnicos, não será possível liberar vocês neste momento, aproveitem a estadia e aguardem enquanto resolvemos problemas pendentes. Pedimos perdão por qualquer transtorno.',
                    {files: [ '/assets/standby.gif' ]
                    });
        else
            return message.channel.send('\`Você não tem permissão para esse comando\`'); 
    },
};