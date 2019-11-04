let canvasMovement = document.createElement("canvas");
document.body.appendChild(canvasMovement);
canvasMovement.classList.add("movement");

canvasMovement.width = 414;
canvasMovement.height = 846;

let movement = canvasMovement.getContext('2d');

//ladda in höger pil
/*
let rightArrow = new Image();
rightArrow.src = "Art/pilE.png";
rightArrow.onload = function() {
    movement.drawImage(rightArrow, 365, 630);
}
//ladda in vänster pil
let leftArrow = new Image();
leftArrow.src="Art/pilW.png";
leftArrow.onload = function() {
    movement.drawImage(leftArrow, 0, 630);
}
let upArrow = new Image();
upArrow.src="Art/pilN.png";
upArrow.onload = function() {
    movement.drawImage(upArrow, 182, 415);
}
let downArrow = new Image();
downArrow.src="Art/pilS.png";
downArrow.onload = function() {
    movement.drawImage(downArrow, 182, 780);
}
*/

pilar.onload = function() {
    movement.drawImage(pilar, 0, 480);
}

let loading = false;
fadeScreenMove = () => {
    if (wonAlready === false || lostAlready === false && loading === false) {
        loading = true;
        console.log("true");
        let time = 0;
        let opacity = 0;
        let id = setInterval(frame, 10);
        function frame() {
        if (time == 200) {
            clearInterval(id);
        } else if (time < 100){
        opacity += 0.01;
        time++;
        canvas17.style.opacity = opacity;
        } else if (time === 100) { 
            moveCat1();
            moveCat2();
            zombieMove();
            changePage();
            loadHouses();
            opacity -= 0.01;
            time++;
            canvas17.style.opacity = opacity;
        } else {
            opacity -= 0.01;
            time++;
            canvas17.style.opacity = opacity;
        }
        if (time === 200) {
            loading = false;
            if (zombieX === x && zombieY === y) {
                loading = true;
            }
            console.log("false");
        }
        }
    
        }
    setTimeout(checkLoss(), 2000);
    if (lostAlready === true) {
        loading = true;
    }
}

let catMovement = 0.25;
let cat2Movement = 0.25;
moveCat1 = () => {
    catMovement += 0.25;
    if (catMovement === 1) {
        catMovement = 0;
        if (cat1X < 6 && cat1X > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat1X +=1;

            } else {
                cat1X -=1;
            }

        }
        if (cat1Y < 6 && cat1Y > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat1Y +=1;
                console.log("cat1 moved");

            } else {
                cat1Y -=1;
                console.log("cat1 moved");
            }

        }

        if (cat1X === 6)  {
            cat1X -=1;
            }
        if (cat1X === 0)  {
            cat1X +=1;
        }
        if (cat1Y === 6)  {
            cat1Y -=1;
        }
        if (cat1Y === 0)  {
            cat1Y +=1;
        }    
    }
}
moveCat2 = () => {
    cat2Movement += 0.25;
    if (cat2Movement === 1) {
        cat2Movement = 0;
        if (cat2X < 6 && cat2X > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat2X +=1;
                console.log("cat2 moved");

            } else {
                cat2X -=1;
                console.log("cat2 moved");
            }

        }
        if (cat2Y < 6 && cat2Y > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat2Y +=1;
                console.log("cat2 moved");

            } else {
                cat2Y -=1;
                console.log("cat2 moved");
            }

        }

        if (cat2X === 6)  {
            cat2X -=1;
            }
        if (cat2X === 0)  {
            cat2X +=1;
        }
        if (cat2Y === 6)  {
            cat2Y -=1;
        }
        if (cat2Y === 0)  {
            cat2Y +=1;
        }    
    }
}

//click på pilar
clicked = (e) => {
    e.preventDefault();
    let h = e.clientX;
    let v = e.clientY;
    console.log("x = " + h);
    console.log("y =" + v);
    if (h>5 && h<49 && v>623 && v<664 && loading === false) {
        console.log("vänster");
        if (x > 0) {
        x -= 1;
        mapX -= 25
        
        fadeScreenMove();
        }
    } else if (h>369 && h<408 && v>623 && v<664 && loading === false) {
        console.log("höger");
        if (x < 6) {
        x += 1;
        mapX += 25;
        
        fadeScreenMove();
        }
    }
    if (h>184 && h<226 && v>791 && v<836 && loading === false) {
        console.log("ner");
        if (y > 0) {
        y -= 1;
        mapY += 20
        
        fadeScreenMove();
        }
    } else if (h>183 && h<228 && v>487 && v<533 && loading === false) {
        console.log("upp");
        if (y < 6) {
        y += 1;
        mapY -= 20
        
        
        fadeScreenMove();
        }
        //Klick på katt2
    } else if (h>276 && h<368 && v>708 && v<798 && cat2X === x && cat2Y === y) {
        catsCaught +=1;
        layer14.clearRect(0, 0, canvas.width, canvas.height);
        mapLayer1.clearRect(48, 18, 100, 100);
        cat2Y = 500;
        cat2X = 500;
            if(catsCaught === 1) {
        mapLayer1.drawImage(catCount2, 50, 20);
        mapLayer1.drawImage(catCountImg, 10, 10);
        console.log("funkar");
        //klicka på katt1
            } else {
            mapLayer1.drawImage(catCount3, 50, 20);
            mapLayer1.drawImage(catCountImg, 10, 10);
            console.log("funkar");
            }
    } else if (h>99 && h<170 && v>679 && v<777 && cat1X === x && cat1Y === y) {
        catsCaught +=1;
        layer14.clearRect(0, 0, canvas.width, canvas.height);
        mapLayer1.clearRect(48, 18, 100, 100);
        cat1Y = 500;
        cat1X = 500;
        if(catsCaught === 1) {
            mapLayer1.drawImage(catCount2, 50, 20);
            mapLayer1.drawImage(catCountImg, 10, 10);
            console.log("funkar");
            //klicka på katt1
                } else {
                mapLayer1.drawImage(catCount3, 50, 20);
                mapLayer1.drawImage(catCountImg, 10, 10);
                console.log("funkar");
                }
            }
    checkWin();
    if(lostAlready === true && h>92 && h<321 && v>441 && v<480 || wonAlready === true && h>92 && h<321 && v>441 && v<480) {
        console.log("restart");
        restart();
    }
}
//Lyssnar efter klick
canvasMovement.addEventListener("mousedown", clicked, false);

