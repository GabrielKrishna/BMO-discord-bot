const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data : new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong response"),

    async execute(interaction) {
        await interaction.reply("Pong!")
    }
}