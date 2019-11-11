let inDiffMenu = 0;

let fixvolume = 0;

//Laddar in två canvaser, en som är bilderna på menyn och en som ska agera klicklyssnare
//Clicker lagret göra svart, men har opacity 0, så det syns inte. Detta för att göra den fade in när man startar.

let canvasStartMenu = document.createElement("canvas");
document.body.appendChild(canvasStartMenu);
canvasStartMenu.classList.add("startmenu");

let canvasStartMenuClicker = document.createElement("canvas");
document.body.appendChild(canvasStartMenuClicker);
canvasStartMenuClicker.classList.add("startmenuClicker");

canvasStartMenu.width = 414;
canvasStartMenu.height = 846;

canvasStartMenuClicker.width = 414;
canvasStartMenuClicker.height = 846;

let startLayer= canvasStartMenu.getContext('2d');
let startLayerClicker= canvasStartMenuClicker.getContext('2d');


startLayerClicker.fillStyle= "black";    
startLayerClicker.fillRect(0, 0, 414, 846); 

//startLayer.imageSmoothingEnabled = false;
//startLayerClicker.imageSmoothingEnabled = false;

//Laddar in bilder till menyn
let startScreenDiffNormal = new Image();
startScreenDiffNormal.src = "Art/normalDiff.png";
let startScreenDiffHard = new Image();
startScreenDiffHard.src = "Art/hardDiff.png";
let startScreenDiffEasy = new Image();
startScreenDiffEasy.src = "Art/easyDiff.png";

let startScreen = new Image();
startScreen.src = "Art/Startskärm.png";
startScreen.onload = function() {
    startLayer.drawImage(startScreen, 0, 0, 414, 846);
}
//kollar när man klickar på menyn
clicked = (e) => {
    e.preventDefault();
    let h = e.clientX;
    let v = e.clientY;
    
    console.log("x = " + h + " vw =" + h / gameWidth);
    console.log("y =" + v + " vh = " + v / gameHeight);
    //klick på difficulty, ritar upp att Normal är ifyllt från början.
    if (h>vw * 20 && h<vw * 78 && v>vh * 50 && v<vh * 71 && inDiffMenu === 0 || h>vw * 41 && h<vw * 58 && v>vh * 50 && v<vh * 54 && inDiffMenu === 1) {
        console.log("Difficulty");
        startLayer.clearRect(0, 0, startLayer.width, startLayer.height);
        startLayer.drawImage(startScreenDiffNormal, 0, 0, 414, 846);
        inDiffMenu = 1;
        difficulty = 2;
        clickSound();
    }
    //klick på easy, highlightar easy
    if (h>vw * 25 && h<vw * 41 && v>vh * 50 && v<vh * 54 && inDiffMenu === 1) {
        console.log("easy");
        startLayer.clearRect(0, 0, startLayer.width, startLayer.height);
        startLayer.drawImage(startScreenDiffEasy, 0, 0, 414, 846);
        inDiffMenu = 1;
        difficulty = 1;
        clickSound();
    }
    //klick på hard, highlightar hard
    if (h>vw * 58 && h<vw * 74 && v>vh * 50 && v<vh * 54 && inDiffMenu === 1) {
        console.log("hard");
        startLayer.clearRect(0, 0, startLayer.width, startLayer.height);
        startLayer.drawImage(startScreenDiffHard, 0, 0, 414, 846);
        inDiffMenu = 1;
        difficulty = 3;
        clickSound();
    }
    //klick på start game, ändrar opacityn på clickerlagret och tar sedan bort den för att sedan köra igång spelet
    if (h>vw * 20 && h<vw * 78 && v>vh * 77 && v<vh * 87) {
        console.log("Start game");
        clickSound();
        changePage();
        fixvolume = 1;
        backGround.play();
        let time = 0;
        let opacity = 0;
        let id = setInterval(frame, 10);
            function frame() {
            if (time == 300) {
                clearInterval(id);
                document.body.removeChild(canvasStartMenuClicker);
            } else if (time < 150){
            opacity += 0.01;
            time++;
            canvasStartMenuClicker.style.opacity = opacity;
            } else if (time === 150){
            opacity -= 0.01;
            time++;
            document.body.removeChild(canvasStartMenu);
            } else if (time => 150){
            opacity -= 0.01;
            time++;
            canvasStartMenuClicker.style.opacity = opacity;
            }
        }
    }
}




//kollar efter klick
canvasStartMenuClicker.addEventListener("mousedown", clicked, false);