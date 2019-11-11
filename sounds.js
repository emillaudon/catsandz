//variabler för ljuden
let backGround;
let walking;
let zombieClose;
let pickupSound;
let laugh;
let click;
let click2;
let click3;
let click4;
let click5;
let click6;

let clickedClick = 0;



//funktionen för att skapa ett nytt ljud, kollar om ljudet är bakgrundsljudet med hjälp av "fixvolume" som sätts till 1 när man trycker på startknappen
// och sänker ljudet till 10%. 
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
        this.play = function() {
            this.sound.play();
            if (fixvolume === 1) {
                this.sound.volume = 0.1;
                fixvolume = 0;
            }
        }
        this.stop = function() {
            this.sound.pause();
        }
    }
//laddar in ljudfilerna
backGround = new sound("Sounds/background.mp3");
walking = new sound("Sounds/walk grass.wav");
zombieClose = new sound("Sounds/zombie.wav");
pickupSound = new sound("Sounds/map.wav");
laugh = new sound("Sounds/laugh.wav");
click = new sound("Sounds/click.wav");
click2 = new sound("Sounds/click2.wav");
click3 = new sound("Sounds/click2.wav");
click4 = new sound("Sounds/click2.wav");
click5 = new sound("Sounds/click2.wav");
click6 = new sound("Sounds/click2.wav");
catClose = new sound("Sounds/meow.mp3");

//ljudet när man rör sig till en ny plats.
walkingSound = () => {
    walking.play();
    walking.play();
    walking.play();
}
//klickljud när man klickar på knappar
//Fick använda clickedClick och flera "klickljud" för att göra så att man kan klicka på flera saker samtidigt, annars väntar den tills att ljudet spelats upp innan det kan köras igen
clickSound = () => {
    click.play();
    console.log("1");

    if (clickedClick === 1) {
        click2.play();
        console.log("2");
    }
    if (clickedClick === 2) {
        click3.play();
        console.log("3");
    }
    if (clickedClick === 3) {
        click4.play();
        console.log("4");
    }
    if (clickedClick === 4) {
        click5.play();
        console.log("5");
    }
    if (clickedClick === 5) {
        click6.play();
        console.log("6");
    }
    
    
    clickedClick  +=1;
    if (clickedClick === 6) {
        clickedClick = 0;
    }
}






  