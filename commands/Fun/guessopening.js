const openings = require('../../Databases/openings.json')
var amountOfOpenings = openings.length

module.exports = {
    name: 'guessopening',
    description: 'Guess that opening: Plays 15 seconds of an anime opening and users have to guess where its from',
    run: async(bot, message, args) =>{
        const voiceChannel = message.member.voice.channel
        var chosenOpening = Math.floor(Math.random() * (amountOfOpenings) + 1)
        console.log(chosenOpening)
        if(!voiceChannel){
            return message.reply('You must be in a voice channel to play the bot') 
        }
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.play('C:/Users/Administrator/Desktop/Spike Bot/Databases/Openings/'+ chosenOpening +'.mp3');
            dispatcher.on('finish', finish => {
                voiceChannel.leave();
                message.channel.send('🎙️ Answer: ' + '||' + openings[chosenOpening - 1].anime + '||')
            });
        })
    }       
}
