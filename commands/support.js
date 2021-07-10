const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "Support",
    description: "To Send the support server",
    usage: "[Support]",
    aliases: ["sup"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37088832;
    
    let invite = new MessageEmbed()
    .setTitle(`Support`)
    .setDescription(`Support Server! \n\n [Invite Link](https://discord.gg/T2aD3b7f)`)
    .setURL(`https://discord.gg/T2aD3b7f`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};