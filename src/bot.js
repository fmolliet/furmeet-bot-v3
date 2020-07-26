
const fs = require('fs');
const { Client, Collection } = require('discord.js');

//instancias discord e comandos
const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

///////////////////////////////
// INICIO DISCORD SCHEDULES  //
///////////////////////////////

module.exports = client;