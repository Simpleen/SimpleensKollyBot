const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone:  true});

bot.on("ready", () => {
	console.log(`Bot is ready! ${bot.user.username}`);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let mention = message.mentions.users.first();

	if(cmd === '::help'){
		let botembed = new Discord.RichEmbed()
		.setDescription('Here are the list of commands!')
		.setColor('#FDAD02')
		.addField('::toxic', 'Sends a toxic message.')
		.addField('::compliment', 'Compliments the mentioned user.')
		.addField('::randomperson', 'Mentions a random user.')
		.addField('::picture', 'Sends a random picture')
		.addField('::howto', 'Shows instructions on how to do a chosen topic.')
		.addField('::suckme', 'Sucks the user.')
		.addField('::nudes', 'Sends fake nudes.')
		.addField('::marry', 'Marries the user to the mentioned user.')
		.addField('::gaycalc', 'Calculates how gay a user is.')
		.addField('::peniscalc', 'Calculates how long a users penis is.')
		.addField('::lovecalc', 'Calculates love')
		
		return message.channel.send(botembed)
	}


if(cmd === '::t'){
		if (message.author.id == "402508216899993600"){
		 return message.channel.send('Responded')
		}
	}




	if(cmd === '::marry'){
		 if (mention == null) { return; }
		 return message.reply('You are now married to ' + mention)
	}



	if(cmd === '::compliment'){
		if (mention == null) { return; }
		let number = 5;
		var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
		switch (random) {
			case 1: message.channel.send(mention + ' is fucking hot.'); break;
			case 2: message.channel.send(mention + ' has nice shoes.'); break;
			case 3: message.channel.send(mention + 's eyes are lovely.'); break;
			case 4: message.channel.send(mention + ' looks nice even without a instagram filter.'); break;
			case 5: message.channel.send(mention + ' catches all the ehoes.'); break;
		}
}


















});

bot.login(botSettings.token);
