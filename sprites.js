//Kattbild
let catOne = new Image();
catOne.src = "Art/Characters/1.png";

let catTwo = new Image();
catTwo.src = "Art/Characters/2.png";

let catThree = new Image();
catThree.src = "Art/Characters/3.png";

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

let hardSelection = new Image();
hardSelection.src ="Art/hard.png";

let easySelection = new Image();
easySelection.src ="Art/easy.png";

let normalSelection = new Image();
normalSelection.src ="Art/normal.png";

let textSelect = new Image();
textSelect.src = "Art/restartText.png";






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


makeCatOne = () => {
    let posX = 88;
    let posY = backgroundY + 627;

    let srcX;
    let srcY;

    let sheetWidth = 100;
    let sheetHeight = 100;

    let frameCount = 5;

    let spriteWidth = sheetWidth;
    let spriteHeight = sheetHeight;

    let currentFrame = 0;

    let scale = 1;

    

    updateFrame = () => {
        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
        currentFrame = ++currentFrame % frameCount;
        

        
    }

    draw = () => {
        if(restartingOn === false) {
        updateFrame();
        layer14.drawImage(catOne, posX, posY + (currentFrame * 3), 100, 100);
        }
    }


    getCat = () => {
        let id = setInterval(frame, 120);
        function frame() {
            draw();
            if (cat1X > 10 || lostAlready === true || wonAlready === true ||cat1X !== x || cat1Y !== y || restartingOn === true) {
                if (restartingOn === true){
                    clearInterval(id);
                    layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                } else if (cat1X !== x && restartingOn === false || cat1Y !== y && restartingOn === false) {
                    let time = 0;
                    let catId = setInterval(frame, 10);
                    function frame() {
                    if (time === 101) {
                        clearInterval(catId);
                        clearInterval(id);
                        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);

                    } else if (time < 101){
                    time++;
                    console.log(time);
                    }
                    }
                }
                if (cat1X > 10 || lostAlready === true || wonAlready === true){
                clearInterval(id);
                layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                if (lostAlready === true) {
                    clearInterval(id);
                    layer14.drawImage(catOne, posX, posY + (currentFrame * 3), 100, 100);
                }
                }
            }
        }
    }

    getCat();
}

makeCatTwo = () => {
    let posX = 270;
    let posY = backgroundY + 650;

    let srcX;
    let srcY;

    let sheetWidth = 100;
    let sheetHeight = 100;

    let frameCount = 5;

    let spriteWidth = sheetWidth;
    let spriteHeight = sheetHeight;

    let currentFrame = 0;

    let scale = 1;

    updateFrame = () => {
        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
        currentFrame = ++currentFrame % frameCount;
        

        
    }

    draw = () => {
        if(restartingOn === false) {
        updateFrame();
        layer14.drawImage(catTwo, posX, posY + (currentFrame * 3), 100, 100);
        }
    }


    getCat = () => {
        let id = setInterval(frame, 120);
        function frame() {
            draw();
            if (cat2X > 10 || lostAlready === true || wonAlready === true ||cat2X !== x || cat2Y !== y || restartingOn === true) {
                if (restartingOn === true){
                    clearInterval(id);
                    layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                } else if (cat2X !== x && restartingOn === false || cat2Y !== y && restartingOn === false) {
                    let time = 0;
                    let catId = setInterval(frame, 10);
                    function frame() {
                    if (time === 101) {
                        clearInterval(catId);
                        clearInterval(id);
                        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);

                    } else if (time < 101){
                    time++;
                    console.log(time);
                    }
                    }
                }
                if (cat2X > 10 || lostAlready === true || wonAlready === true){
                clearInterval(id);
                layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                if (lostAlready === true) {
                    clearInterval(id);
                    layer14.drawImage(catOne, posX, posY + (currentFrame * 3), 100, 100);
                }
                }
            }
        }
    }

    getCat();
}

makeCatThree = () => {
    let posX = 88;
    let posY = backgroundY + 627;

    let srcX;
    let srcY;

    let sheetWidth = 100;
    let sheetHeight = 100;

    let frameCount = 5;

    let spriteWidth = sheetWidth;
    let spriteHeight = sheetHeight;

    let currentFrame = 0;

    let scale = 1;

    updateFrame = () => {
        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
        currentFrame = ++currentFrame % frameCount;
        

        
    }

    draw = () => {
        if(restartingOn === false) {
        updateFrame();
        layer14.drawImage(catThree, posX, posY + (currentFrame * 3), 100, 100);
        }
    }


    getCat = () => {
        let id = setInterval(frame, 120);
        function frame() {
            draw();
            if (cat3X > 10 || lostAlready === true || wonAlready === true ||cat3X !== x || cat3Y !== y || restartingOn === true) {
                if (restartingOn === true){
                    clearInterval(id);
                    layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                } else if (cat3X !== x && restartingOn === false || cat3Y !== y && restartingOn === false) {
                    let time = 0;
                    let catId = setInterval(frame, 10);
                    function frame() {
                    if (time === 101) {
                        clearInterval(catId);
                        clearInterval(id);
                        layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);

                    } else if (time < 101){
                    time++;
                    console.log(time);
                    }
                    }
                }
                if (cat3X > 10 || lostAlready === true || wonAlready === true){
                clearInterval(id);
                layer14.clearRect(posX, posY + (currentFrame *3), spriteWidth * scale, spriteHeight * scale);
                if (lostAlready === true) {
                    clearInterval(id);
                    layer14.drawImage(catOne, posX, posY + (currentFrame * 3), 100, 100);
                }
                }
            }
        }
    }

    getCat();
}