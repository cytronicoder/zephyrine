// Imports
const { readdirSync } = require('fs');
require('dotenv').config();

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const token = process.env.BOT_TOKEN;

// Discord client and its intents
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
	],
});

// Commands collection
client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter((file) =>
	file.endsWith('.js'),
);

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// On ready
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!\n`);

	// Status and activities
	client.user.setStatus('online');
	client.user.setActivity('the community', { type: 'WATCHING' });
});

// Interactions
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});

// Client login
client.login(token);
