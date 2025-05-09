require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual Telegram bot token from BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! I am your friendly Telegram bot.');
});

// Listen for any text message and echo it back
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Avoid echoing the '/start' command
  if (messageText !== '/start') {
    bot.sendMessage(chatId, `You said: ${messageText}`);
  }
});
