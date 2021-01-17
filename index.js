const Discord = require("discord.js");
const config = require("./config/config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "commands") {
    message.reply(
      `You can sum=add numbers, sub=subtract number, mul=multiplie numbers, div=division number, rem=remainder of number`
    );
  } else if (command === "sum") {
    const numArgs = args.map((x) => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => (counter += x));
    message.reply(`The Addition of all the arguments you provided is ${sum}!`);
  } else if (command === "sub") {
    const numArgs = args.map((x) => parseFloat(x));
    const sub = numArgs.reduce((counter, x) => (counter -= x));
    message.reply(
      `The subtraction of all the arguments you provided is ${sub}!`
    );
  } else if (command === "mul") {
    const numArgs = args.map((x) => parseFloat(x));
    const mul = numArgs.reduce((counter, x) => (counter *= x));
    message.reply(
      `The tiplication of all the arguments you provided is ${mul}!`
    );
  } else if (command === "div") {
    const numArgs = args.map((x) => parseFloat(x));
    const duv = numArgs.reduce((counter, x) => (counter /= x));
    message.reply(`The division of all the arguments you provided is ${duv}!`);
  } else if (command === "rem") {
    const numArgs = args.map((x) => parseFloat(x));
    const rem = numArgs.reduce((counter, x) => (counter %= x));
    message.reply(`The remainder of all the arguments you provided is ${rem}!`);
  }
});

client.login(config.BOT_TOKEN);
