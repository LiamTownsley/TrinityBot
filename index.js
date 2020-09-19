require('dotenv').config();
const { Client, Collection } = require('discord.js');

const client = new Client();
client.commands = new Collection();

const { readdirSync } = require('fs');

readdirSync('./events/').map(event => {
	client.on(
		event.split('.')[0],
		require(`./events/${event}`).bind(null, client),
	);
});

readdirSync('./commands/').forEach(dirs => {
	const commands = readdirSync(`./commands/${dirs}/`)
		.filter(files => files.endsWith('.js'));

	for (const file of commands) {
		const command = require(`./commands/${dirs}/${file}`);
		client.commands.set(command.name, command);
	}
});

client.login();