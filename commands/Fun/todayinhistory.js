const {MessageEmbed} = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'todayinhistory',
    description: 'Gives a fun history fact that happened on every single day of the year',
    credit: 'http://history.muffinlabs.com/',
    run: async(bot, message, args) =>{
        const event = await fetch('http://history.muffinlabs.com/date')
        const eventData = await event.json()
        var random = Math.floor(Math.random() * eventData.data.Events.length)
        var year = eventData.data.Events[random].year
        var description = eventData.data.Events[random].text
        let embed = new MessageEmbed()
        .setTitle(' 📜 Today In History...')
        .setColor('#F8C300')
        .setDescription(description + "\n" + 'Year: ' + year )
        message.channel.send(embed)
    }
}