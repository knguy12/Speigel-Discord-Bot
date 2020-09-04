const {MessageEmbed} = require('discord.js')
module.exports = {
    name: '8ball',
    description: 'Gives you advice',
    run: async(bot, message, args) =>{
        if(!args[2]) return message.reply('You did not ask me a question')
        let responses = [
            "As I see it, yes", 
            "Ask again later",
            "Better not tell you now",
            "Cannont predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "It is certain",
            "It is decidely so",
            "Most likely",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Outlook good",
            "Reply hazy, try again",
            "Signs point to yes",
            "Very doubtful",
            "Without a doubt",
            "Yes",
            "Yes - definetly",
            "You may rely on it"
         ]
         let response = responses[Math.floor(Math.random()*(responses.length))]
         let Embed = new MessageEmbed()
         .setTitle('8Ball')
         .setColor('RANDOM')
         .setDescription(response)
         message.channel.send(Embed)
    }
}