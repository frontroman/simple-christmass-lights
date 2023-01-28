var toggleFlash = true;
var toggleTitle = true;

var redLigts = document.getElementsByClassName("red");
var yellowLigts = document.getElementsByClassName("yellow");
var greenLigts = document.getElementsByClassName("green");
var blueLigts = document.getElementsByClassName("blue");
var title = document.getElementById("title");

function titleFlashing(){
    if(toggleTitle){
        title.style["textShadow"] = "0 0 15px #fff"
    }else{
        title.style["textShadow"] = "0 0 6px #fff"
    }
    toggleTitle = !toggleTitle;
}


function lightsFlashing() {
    if (toggleFlash) {
        for (i = 0; i < 2; i++) {
            redLigts[i].style["boxShadow"] = "0 0 10px 5px #F44336";
            greenLigts[i].style["boxShadow"] = "0 0 10px 5px #4CAF50";
            yellowLigts[i].style["boxShadow"] = "none";
            blueLigts[i].style["boxShadow"] = "none";
        }

    } else {
        for (i = 0; i < 2; i++) {
            redLigts[i].style["boxShadow"] = "none";
            greenLigts[i].style["boxShadow"] = "none";
            yellowLigts[i].style["boxShadow"] = "0 0 10px 5px #FFEB3B"; 
            blueLigts[i].style["boxShadow"] = "0 0 10px 5px #2196F3";
        }
    }
    toggleFlash = !toggleFlash;
}

var timerLigts = setInterval(lightsFlashing, 1000);
var timerTitle = setInterval(titleFlashing, 1000);


function turnOff(){
    for(i = 0; i < 2; i++){
        redLigts[i].style["boxShadow"] = "none";
        greenLigts[i].style["boxShadow"] = "none";
        yellowLigts[i].style["boxShadow"] = "none";
        blueLigts[i].style["boxShadow"] = "none";
        redLigts[i].style["backgroundColor"] = "#263238";
        greenLigts[i].style["backgroundColor"] = "#263238";
        yellowLigts[i].style["backgroundColor"] = "#263238";
        blueLigts[i].style["backgroundColor"] = "#263238";
    }        
    title.style["color"]  = "#263238";
    title.style["textShadow"]  = "none";
}

function turnOn(){
    for(i = 0; i < 2; i++){
        redLigts[i].style["backgroundColor"] = "#F44336";
        greenLigts[i].style["backgroundColor"] = "#4CAF50";
        yellowLigts[i].style["backgroundColor"] = "#FFEB3B";
        blueLigts[i].style["backgroundColor"] = "#2196F3";
    }        
    title.style["color"]  = "#fff";
}


document.getElementById("check").addEventListener("click", function(){
    let checkbox = document.getElementById("check");
    if(checkbox.checked == true){
        console.log("on"); 
        turnOn();   
        timerTitle = setInterval(titleFlashing, 1000);
        timerLigts = setInterval(lightsFlashing, 1000);
    }
    else{
        console.log("off");
        clearInterval(timerLigts);
        clearInterval(timerTitle);
        turnOff();
    }
});