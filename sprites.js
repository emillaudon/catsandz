//Kattbild
let catOne = new Image();
catOne.src = "Art/Characters/1.png";

let catTwo = new Image();
catTwo.src = "Art/Characters/2.png";

let houseOne = new Image();
houseOne.src = "Art/Backgrounds/Houses/WoodenHouse-Pixel/House.png";

let zombie = new Image();
zombie.src = "Art/Characters/zombu1.png";

let pilar = new Image();
pilar.src = "Art/pilar.png";

let restartButton = new Image();
restartButton.src = "Art/restart.png";

let zombieToast = new Image();
zombieToast.src="Art/Characters/ZombieToast.png";






//animering av zombien som visas om man dör
makeZombie = (loseLayer) => {
    let zombieLayer;

    let posX = 70;
    let posY = 50;

    let srcX;
    let srcY;

    let sheetWidth = 1408;
    let sheetHeight = 64;

    let frameCount = 22;

    let spriteWidth = sheetWidth / frameCount;
    let spriteHeight = sheetHeight;

    let currentFrame = 0;

    let scale = 3;

    

    updateFrame = (layerLose) => {
        currentFrame = ++currentFrame % frameCount;

        srcX = currentFrame * spriteWidth;
        srcY = 0;
        layerLose.clearRect(posX, posY, spriteWidth * scale, spriteHeight * scale);
        layerLose.fillStyle= "black";    
        layerLose.fillRect(posX, posY, scale * spriteWidth, scale * spriteHeight); 
        
    }

    draw = (layerLose) => {
        updateFrame(layerLose);
        layerLose.drawImage(zombieToast, srcX, srcY, spriteWidth, spriteHeight, posX, posY, spriteWidth * scale, spriteHeight * scale);

    }


    getZombie = (loseLayer) => {
        let layerLose = loseLayer;
        let id = setInterval(frame, 100);
        function frame() {
            draw(layerLose);
            if (lostAlready === false) {
                clearInterval(id);
                loseLayer.clearRect(posX, posY, spriteWidth * scale, spriteHeight * scale);
            }
        }

    }
    getZombie(loseLayer);
}