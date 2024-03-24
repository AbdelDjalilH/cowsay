const {user} = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `je suis ${user.namee} et je suis du campus ${user.campus}`,
    e : "oO",
    T : "U "
}));
