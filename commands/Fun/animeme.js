const randomPuppy  = require('random-puppy')
const {MessageEmbed} = require('discord.js')
const subreddits = ['animememes', 'goodanimemes', 'anime_irl']

module.exports = {
    name: 'animeme',
    description: 'Sends random anime memes and images from various subreddits',
    run: async(bot, message, args) =>{
        const random = subreddits[Math.floor(Math.random() * subreddits.length)]
        const img = await randomPuppy(random)
        let embed = new MessageEmbed()
        .setColor('BLUE')
        .setImage(img)
        .setTitle('From /r/' + random)
        message.channel.send(embed)
    }
}