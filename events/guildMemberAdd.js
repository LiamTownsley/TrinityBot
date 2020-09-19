module.exports = async (client, member) => {
	if(!member) return;

	const counter = await client.channels.fetch('756916863140757644');
	await counter.setName(`Guild Members: ${member.guild.memberCount}`);

	const goal = await client.channels.fetch('756916893507518604');
	await goal.setName(`Goal: ${Math.ceil(member.guild.memberCount / 100) * 100}`);

	member.roles.add('756864400836526100', 'Autorole');
};