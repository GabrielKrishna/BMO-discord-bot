const { SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x205B61)
	.setTitle('Developer\'s GitHub - Gabriel Krishna')
	.setURL('https://github.com/GabrielKrishna/')
	.setAuthor({ name: 'Gabriel Krishna', iconURL: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', url: 'https://github.com/GabrielKrishna/' })
	.setDescription('BMO Discord bot developer GitHub')
	.setTimestamp()
	.setFooter({ text: ' ', iconURL: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' });

module.exports = {
    data : new SlashCommandBuilder()
        .setName("developer")
        .setDescription("Developer info"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}