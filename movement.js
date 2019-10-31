let canvasMovement = document.createElement("canvas");
document.body.appendChild(canvasMovement);
canvasMovement.classList.add("movement");

canvasMovement.width = 414;
canvasMovement.height = 846;

let movement = canvasMovement.getContext('2d');

//ladda in höger pil
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
    if (h>5 && h<46 && v>633 && v<674) {
        console.log("vänster");
        if (x > 0) {
        x -= 1;
        mapX -= 25
        changePage();
        moveCat1();
        moveCat2();
        loadHouses();
        }
    } else if (h>365 && h<405 && v>633 && v<674) {
        console.log("höger");
        if (x < 6) {
        x += 1;
        mapX += 25;
        changePage();
        moveCat1();
        moveCat2();
        loadHouses();
        }
    }
    if (h>184 && h<226 && v>785 && v<824) {
        console.log("ner");
        if (y > 0) {
        y -= 1;
        mapY += 20
        changePage();
        moveCat1();
        moveCat2();
        loadHouses();
        }
    } else if (h>183 && h<228 && v>420 && v<469) {
        console.log("upp");
        if (y < 6) {
        y += 1;
        mapY -= 20
        changePage();
        moveCat1();
        moveCat2();
        loadHouses();
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
}
//Lyssnar efter klick
canvasMovement.addEventListener("mousedown", clicked, false);