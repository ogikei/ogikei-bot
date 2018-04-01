if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const Botkit = require('./lib/Botkit.js');
const os = require('os');

const controller = Botkit.slackbot({
    debug: true,
});

const bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears('', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'hahaha');
});
