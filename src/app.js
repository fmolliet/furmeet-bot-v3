/* eslint-disable no-useless-escape */
require('dotenv').config();
const { Collection } = require('discord.js');
const cooldowns = new Collection();

const client = require('./bot');
const { prefix, token, ownerId } = require('./config');


client.once('ready', () => {
    console.log(`Logado como ${client.user.tag}! | conectado á ` );
    console.log(`https://discordapp.com/oauth2/authorize?${client.user.id}&scope=bot&permissions=8`);
    console.log('You are running Waka-Bot v1.0\nCreated by winter#1130\nBot Pronto e rodando!');
    client.user.setStatus('available'); // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'Furry Brasil 2.0 [v1 - 24/7] !help',
            type: 0
        }
    });
});
  
client.on('error', error => {
    console.log(error);
});


client.on('message', message => {
    // verifica se tem o prefixo ou se é do autor
    if (!message.content.startsWith(prefix) || message.author.bot) return;  
    // cancela comandos em alguns canais: introducao
    if (message.channel.id ===  '232658139231682560') return; 
    
    // arruma as variaveis de comando e de args
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    // Dynamics Commands
    const command = client.commands.get(commandName)
          || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
    if (!command) return;
    // Verifica se é obrigatorio parametros
    if (command.args && !args.length) {
        let reply = `Você não deu nenhum parâmetro, ${message.author}!`;
  
        if(command.usage) 
            reply += `\nA forma certa é: \`${prefix}${command.name} ${command.usage}\``;
        return message.channel.send(reply);
    }
    // verifica se são comandos de servidor somente
    if(command.guildOnly && message.channel.type !== 'text') 
        return message.reply('Você não executar esse comando dentro do PV!');
    
    // verifica se são comandos exclusivos
    if( message.guild ){
        if(command.exclusiveGuild && command.exclusiveGuild !== message.guild.id)
            return message.reply('Esse comando é exclusivo do grupo!');
        if(command.exclusiveChannel && command.exclusiveChannel !== message.channel.id)
            return message.reply('Esse comando só pode ser executado em um canal específico!');
    }

    
    if(command.adminOnly &&  message.author.id !== ownerId )
        return message.reply('Você não tem permissão para esse comando, somente o Dono!');
    
        
    //INICIO COOLDOWN
    if(!cooldowns.has(command.name)) 
        cooldowns.set(command.name, new Collection());
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
  
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`por favor espere ${timeLeft.toFixed(1)} segundo(s) antes de usar o comando: \`${command.name}\``);
        }
    }
  
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    // FIM COOLDOWN
  
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        return message.reply(' ocorreu um erro na execução do comando, entre em contato com o desenvolvedor!');
    }
});
  
client.login(process.env.TOKEN);