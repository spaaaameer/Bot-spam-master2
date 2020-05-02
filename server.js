const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const prefix = "#";
const channelid = "706168295010861056";
const id = "331044493140688896";
const id2 = "687300796479832065";
const Sniper = [
"Medo hey bro how are u?",
"bro what do u mean i didn't expect that",
"But i don't have money or credits to buy this",
"mmm but iam noob at minecraft so u need to play with noob",
"how old are u man and where are u from",
"where are u living bro?",
"I DID THAT",
"IAM PLAYING LOL ANYONE WANNA PLAY OIT WITH ME",
"No i'm tired and i will go to sleep",
"hey guys wassup",
"I'm here guys",
"lol what is this skillz bro omg u are so good",
"anyone know Godzu",
"No guys i don't wanna play i will go to watch youtube",
"Medo are u here bro",
"hey guys that is me Godzu",
"hey Godzu how are u",
"anyone play Fortnite",
"Godzu how old are u man",
"reeeeeeeeeeeeeeeeeeeeeeeetarded",
"Doc, I cant stop singing The Green, Green Grass of Home. That sounds like Tom Jones Syndrome.Is it common? Well, Its Not Unusual.",
"Two cannibals are eating a clown. One says to the other: Does this taste funny to you?",
"A man walks into a bar with a slab of asphalt under his arm and says: A beer please and one for the road.",
"420",
"that is my number 0939-32389-34",
"and that is my number 0833-988-302",
"Hey guys that is me saif",
"Hey saif wassup man",
"Saif how are u man?",
"guys wait i need to ask saif a thing",
"Saif how old are u man?",
"i'm 16 and i'm living in egypt",
  "boomer",
  "sniper",
  "niceoooo",
  "mhmmmmmmm",
  "reeeeeeeeeeeeeeeeeeeeeeeetarded",
  "There was once a guy",
  "420",
  "69",
  "69420",
  "UOU",
  "uWu",
  "0w0",
  "owo",
  "sniper is gay",
  "sniper is lesbian",
  "there was once a gay",
  "snooper",
  "Sniperboomer",
  "join the godliest hentai clan High School Dxd Hero",
  "ok boomer",
  "Doc, I cant stop singing The Green, Green Grass of Home. That sounds like Tom Jones Syndrome.Is it common? Well, Its Not Unusual.",
  "Two cannibals are eating a clown. One says to the other: Does this taste funny to you?",
  "A man walks into a bar with a slab of asphalt under his arm and says: A beer please and one for the road.",
  "A dyslexic man walks into a bra.",
  "A woman has twins and gives them up for adoption. One of them goes to a family in Egypt and is named Ahmal. The other goes to a family in Spain; they name him Juan. Years later, Juan sends a picture of himself to his birth mother. Upon receiving the picture, she tells her husband that she wishes she also had a picture of Ahmal. Her husband responds, Theyre twins If youve seen Juan, youve seen Ahmal.",
  "A jumper cable walks into a bar. The bartender says, Ill serve you, but dont start anything.",
  "Two antennas met on a roof, fell in love and got married. The Ceremony wasnt much, but the reception was excellent.",
  "channel or panel",
  "s7s7sa",
  "ProBot Sucks",
  "ProBot is godlike",
  "subscribe to Ahmed or i will fuck your mama",
  "Sniper more like ggayber"
];

client.on("ready", () => {
  setTimeout(() => {
    console.log(`${client.user.username} 1`);
  }, 1000);
  setInterval(() => {
    client.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client2.on("ready", () => {
  setTimeout(() => {
    console.log(`${client2.user.username} 2`);
  }, 2000);
  setInterval(() => {
    client2.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client3.on("ready", () => {
  setTimeout(() => {
    console.log(`${client3.user.username} 3`);
  }, 3000);
  setInterval(() => {
    client3.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});

client4.on("ready", () => {
  setTimeout(() => {
    console.log(`${client4.user.username} 4`);
  }, 4000);
  setInterval(() => {
    client4.channels
      .get(channelid)
      .send(Sniper[Math.floor(Math.random() * Sniper.length)]);
  }, 3600000 / 2);
});



client.on("ready", () => {
  setTimeout(() => {
    client.channels.get(channelid).send("#daily");
    setTimeout(() => {
      client2.channels.get(channelid).send("#daily");
    }, 3600 + 1600);
    setTimeout(() => {
      client3.channels.get(channelid).send("#daily");
    }, 3600 + 2600);
    setTimeout(() => {
      client4.channels.get(channelid).send("#daily");
    }, 3600 + 3600);


client.on("message", msg => {
  if (msg.content.startsWith("1give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("1say")) {
      msg.channel.send(args);
    }
  }
});

client2.on("message", msg => {
  if (msg.content.startsWith("2give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("2say")) {
      msg.channel.send(args);
    }
  }
});

client3.on("message", msg => {
  if (msg.content.startsWith("3give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("3say")) {
      msg.channel.send(args);
    }
  }
});

client4.on("message", msg => {
  if (msg.content.startsWith("4give")) {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    msg.channel.send(`#credits <@${id}> ${args}`);
  } else {
    var args = msg.content
      .trim()
      .split(/ +/g)
      .slice(1);
    if (msg.content.startsWith("4say")) {
      msg.channel.send(args);
    }
  }
});




client.login(process.env.SECRET1);

client2.login(process.env.SECRET2);

client3.login(process.env.SECRET3);

client4.login(process.env.SECRET4);
