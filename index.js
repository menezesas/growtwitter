"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./classes/user");
const Tweet_1 = require("./classes/tweet");
const Like_1 = require("./classes/like");
const User1 = new User_1.User('Laura', '98765', 'laura123@email.com', '56372');
const User2 = new User_1.User('Joao', 'jota123', 'jota@email.com', '123456');
const User3 = new User_1.User('Arthur', 'arthurzinhogamer', 'arthurzinhogamer@gmail.com', '72639');
const Tweet1 = new Tweet_1.Tweet('O neymar fez um golaço', 'normal', 'Fran8354');
User1.sendTweet(Tweet1);
const Tweet2 = new Tweet_1.Tweet('KKKKKKKKKKKKK.', 'reply', 'arthurzinhogamer');
User3.sendTweet(Tweet2);
const Tweet3 = new Tweet_1.Tweet('Que cara burro', 'normal', 'jota123');
User2.sendTweet(Tweet3);
Tweet1.reply(Tweet2);
console.log(Tweet1.show());
const replies = Tweet1.showReplies();
console.log(replies);
const like1 = new Like_1.Like(User3);
const tweet4 = new Tweet_1.Tweet('Que raiva!', 'normal', 'arthurzinhogamer');
User3.sendTweet(tweet4);
const tweet5 = new Tweet_1.Tweet('Que dia lindo.', 'normal', 'arthurzinhogamer');
User3.sendTweet(tweet5);
User3.showFeed();