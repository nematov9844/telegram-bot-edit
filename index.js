const { Telegraf } = require('telegraf');

// Bu yerga tokeningizni joylang
const bot = new Telegraf('6694456419:AAEInKwiPAYl9TolP6LRFHg5E5QABEr0Yv8');

// Start komandasi
bot.start((ctx) => ctx.reply('Salom! Bu mening birinchi botim.'));

// Har qanday matnga javob
bot.on('text', (ctx) => {
    ctx.reply(`Siz: ${ctx.message.text} yozdingiz`);
});

// Botni ishga tushirish
bot.launch();

console.log('Bot ishga tushdi!');
