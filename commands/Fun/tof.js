const {MessageEmbed} = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'tof',
    description: 'Anime True or False Quiz: Test your anime knowledge',
    credit:'https://opentdb.com/api_config.php',
    run: async(bot, message, args) =>{
        if(!args[0]){
            const quiz = await fetch('https://opentdb.com/api.php?amount=1&category=31&type=boolean')
            const data = await quiz.json()
            var resultsData = data.results[0]
            question = resultsData.question
            answer = resultsData.correct_answer
            let embed  = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Anime Trivia')
            .setDescription('QUESTION:' + "\n" + question + "\n\n" + 'ANSWER:' + "\n" + '...')
            .setFooter('Write -tof and then your response(true or false) to answer')
            message.channel.send(embed)
        }
        else if(args[0].toLowerCase() === answer.toLowerCase()){
            message.reply('That is correct! ✅')
        }
    }
}