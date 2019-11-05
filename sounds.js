
let backGround;
let walking;
let zombieClose;
let pickupSound;
let laugh;

  //ambient
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
        this.play = function() {
            this.sound.play();
        }
        this.stop = function() {
            this.sound.pause();
        }
    }

backGround = new sound("Sounds/background.mp3");
walking = new sound("Sounds/walk grass.wav");
zombieClose = new sound("Sounds/zombie.wav");
pickupSound = new sound("Sounds/map.wav");
laugh = new sound("Sounds/laugh.wav");

walkingSound = () => {
    walking.play();
    walking.play();
    walking.play();
}







  