
"Hello!".toUpperCase(); //'HELLO!'
function shout(string) {return string.toUpperCase();
}
"Hello!".toLowerCase(); //'HELLO!'
function whisper(string){return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    // if(string.toLowerCase()){return string."I can't hear you!"};
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }
    if(string ===string.toUpperCase()){
        return "YES INDEED!"
    }
    if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
