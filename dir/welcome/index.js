let morning = require("./morning");
let afternoon = require("./afternoon");
let evening = require("./evening");
module.exports = {
    getMorningMessage : function(){ console.log(morning);},
    getEveningMessage : function(){ console.log(evening);},
    getAfternoonMessage : function(){ console.log(afternoon);}
};