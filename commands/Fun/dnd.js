const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'dnd',
    description: 'Rolls a dnd dice for you',
    run: async(bot, message, args) =>{
        if(!args[0]) return message.reply('You need to specify a dice')
        let responses = [
            '1','2','3','4','5',
            '6','7','8','9','10',
            '11','12','13','14','15',
            '16','17','18','19','20'
         ]
         var response = 0
         if(args[0].toLowerCase() === 'd20'){
            response = responses[Math.floor(Math.random()*(responses.length) - 1)]
         }
         if(args[0].toLowerCase() === 'd12'){
            response = responses[Math.floor(Math.random()*(12))]
         }
         if(args[0].toLowerCase() === 'd10'){
            response = responses[Math.floor(Math.random()*(10))]
         }
         if(args[0].toLowerCase() === 'd8'){
            response = responses[Math.floor(Math.random()*(8))]
         }
         if(args[0].toLowerCase() === 'd6'){
            response = responses[Math.floor(Math.random()*(6))]
         }
         if(args[0].toLowerCase() === 'd4'){
            response = responses[Math.floor(Math.random()*(4))]
         }
         let embed = new MessageEmbed()
            .setColor('F93A2F')
            .setTitle('DND Roll')
            .setDescription('🎲 ' + message.author.username  + ' your role value was...' + "\n" + response)
         message.reply(embed)
    }
}