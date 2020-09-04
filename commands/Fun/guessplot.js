const {MessageEmbed} = require('discord.js')
const plots = require('C:/Users/Administrator/Desktop/Spike Bot/Databases/plots.json')
var correctAnswer = false
module.exports = {
    name: 'guessplot',
    description: 'Guess badly explained anime plots',
    run: async(bot, message, args) =>{
        let q  = plots[Math.floor(Math.random() * plots.length)]
        const filter = m => m.content.includes('-ans')
        const collector = message.channel.createMessageCollector(filter, {time: 30000})
        const embed = new MessageEmbed()
        .setTitle('Guess that Badly Written Anime Plot')
        .setColor('GREEN')
        .setDescription('Plot: ' + q.plot + "\n\n" + 'Answer: ...')
        .setFooter('Reply to this with -ans followed by your guess before time runs out!')
        message.channel.send(embed)
        collector.on('collect', m => {
            var userAnswer = m.content.slice(5)
            if(userAnswer.toLowerCase() === q.answer.toLowerCase()){
                message.reply('That is correct! ✅')
                correctAnswer = true
                collector.stop()
            }
        })
        collector.on('end', collected => {
            if(correctAnswer == false){
                message.channel.send('💢Nobody got it this time!' + "\n" + '▶ The answer was...' + q.answer)
            }
        })
    }       
}