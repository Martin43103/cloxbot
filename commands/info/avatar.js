  const Discord = require("discord.js");
module.exports = {
  name: "avatar",
  aliases: [""],
  category: "info",
  description: " this command Returns your avatar or someone avatar",
  usage: "[command | alias]",
  run: async (client, message, args) => {

    var user = message.guild.member (message.mentions.members.first() || message.author);
    var embed = new Discord.RichEmbed()
    .setColor ("#51B322")
    .setImage (user.user.avatarURL)
    .setTitle(`avatar link`)
    .setURL (user.user.avatarURL)
    message.channel.send(embed);
  
}};