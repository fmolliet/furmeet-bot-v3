module.exports = {
    name: 'info',
    description: 'Mostra dados do criador e informações sobre',
    aliases: ['sobre'],
    execute(message, args){
        //https://anidiots.guide/first-bot/using-embeds-in-messages
        message.channel.send({embed: {
            color: 0xbd00ff,
            title: ':gay_pride_flag: Furmeet Bot:gay_pride_flag: ',
            description: 'Bot para furmeets!',
            fields: [
                {
                    name: 'Coded by',
                    value: 'winter#2304'
                },
                {
                    name: 'Language',
                    value: 'Node JS'
                },
                {
                    name: 'Version',
                    value: 'v 1.0'
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Furry Brasil 2.0'
            }
        }
        });
    }
};