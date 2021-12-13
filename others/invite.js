const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

[{Click here}](https://discord.com/oauth2/authorize?client_id=919665380270673921&permissions=8&scope=bot) **to invite the bot.**
`)

  
   .setColor("RANDOM");
   message.react("<a:53EC4B02339C41BF9A83F5597463DBEB:853287599720235029>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
