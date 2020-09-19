module.exports = async (client, message) => {
	try {
		if (message.channel.type == 'news') {
			// Free Games Bot
			if(message.author.id == '698117737175580692') {
				// TODO: Update this to official API, once released.
				client.api.channels(message.channel.id).messages(message.id).crosspost.post();
			}
		}
		if(message.channel.type !== 'text') return;
		const prefix = process.env.PREFIX;

		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = client.commands.get(commandName) ||
			client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if (command.args && !args.length) {
			return message.channel.send(message.author.toString(), {
				embed: {
					title: 'Invalid Arguments',
					description: 'This command requires arguments, you didn\'t supply any.',
				},
			});
		}

		command.execute(message, args, client);
	}
	catch (error) {
		console.error(error);
	}
};