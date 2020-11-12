let keyCodes = {
    KeyA: "A",
    KeyS: "S",
    KeyD: "D",
    KeyF: "F",
    KeyG: "G",
    KeyH: "H",
    KeyJ: "J",
    KeyW: "W",
    KeyE: "E",
    KeyT: "T",
    KeyY: "Y",
    KeyU: "U"
};

function createAudio(fileName){
    console.log(fileName);
    let audio = new Audio(`keys_music/${fileName}`);
    audio.play();
}

function strokeOnKey(id){
    document.getElementById(id).style.textShadow = '2px 2px 5px red';
    document.getElementById(id).style.boxShadow = '0 2px 4px 0 coral, 0 3px 10px 0 coral';
}

document.addEventListener('keydown', function (e){
    if(e.code in keyCodes) {
        createAudio(`${keyCodes[e.code]}.mp3`);
        strokeOnKey(e.code);
    }
   else{
       console.log("Invalid Key pressed");
    }
});

document.addEventListener('keyup', function (e){
    if(e.code in keyCodes) {
        console.log(e.code);
        document.getElementById(e.code).style.removeProperty('text-shadow');
        document.getElementById(e.code).style.removeProperty('box-shadow');
    }
});