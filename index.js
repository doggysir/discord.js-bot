const discord = require('discord.js')
const { token } = require('./config.json')
const fs = require('fs')
const Client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_MEMBERS]
})


Client.on("ready", async () => {
    console.log("Client ready")
    Client.user.setPresence({ activity: [{name: "notros.exe", type: "PLAYING"}]})    
    const data = {
        name: "say",
        description: "Says your text",
        options: [{
            name: "text",
            type: "STRING",
            description: "The text I will say", 
            required: true
        }]

    };
    const command = await Client.guilds.cache.get('927371736205381633')?.commands.create(data);
})

Client.on("interactionCreate", async interaction => {
    if(interaction.isCommand())  {
        if (interaction.commandName === "say") {
            const message = interaction.options.getString('text');
            return await interaction.reply({content: message, ephemeral: true});
        }
    }
})


Client.on("messageCreate", async msg => {
    
    if (msg.content.startsWith(">")) {
        mes = msg.content.slice(1)
        if (mes == "ayo") {

            msg.reply("hola")
        }
    }

    
})

Client.login(token)