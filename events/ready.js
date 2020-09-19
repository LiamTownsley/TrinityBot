module.exports = (client) => {
	client.user.setPresence({
		activity: {
			name: `over ${client.users.cache.array().length} members.`,
			type: 'WATCHING',
		},
		status: 'online',
	});

	console.log('The bot is now ready.');
};