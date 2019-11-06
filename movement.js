let canvasMovement = document.createElement("canvas");
document.body.appendChild(canvasMovement);
canvasMovement.classList.add("movement");

canvasMovement.width = 414;
canvasMovement.height = 846;

let movement = canvasMovement.getContext('2d');

let gameHeight = 846;
let gameWidth = 414;

let vh = /*window.innerHeight*/ 846 * 0.01;
let vw = /*window.innerWidth*/ 414 * 0.01;

openMenu = () => {
        clickSound();
        let canvasMenu = document.createElement("canvas");
        document.body.appendChild(canvasMenu);
        canvasMenu.classList.add("menu");

        canvasMenu.height = 846;
        canvasMenu.width = 414;

        let menuLayer= canvasMenu.getContext('2d');

        menuLayer.imageSmoothingEnabled = false;
        
            if (difficulty === 2) {
                menuLayer.drawImage(normalSelection, 0, 0);
            } else if (difficulty === 3){
                menuLayer.drawImage(hardSelection, 0, 0);
            } else {
                menuLayer.drawImage(easySelection, 0, 0);
            }
        

        canvasMenu.addEventListener("mousedown", clickedMenu, false);

            let time = 0;
            let opacity = 0;
            let id = setInterval(frame, 10);
            function frame() {
            if (time == 200) {
                clearInterval(id);
            } else if (time < 100){
            opacity += 0.02;
            time++;
            canvasMenu.style.opacity = opacity;
        }
    }
}

clickedMenu = (e) => {
    e.preventDefault();
    let h = e.clientX;
    let v = e.clientY;
    canvasMenu = document.querySelector(".menu")
    let menuLayer= canvasMenu.getContext('2d');
    console.log("x = " + h + " vw =" + h / gameWidth);
    console.log("y =" + v + " vh = " + v / gameHeight);

    if(h>vw * 21 && h<vw * 79 && v>vh * 49 && v<vh * 57) {
        console.log("restart");
        difficulty = chosenDiff;
        restart();
    }
    if (h>vw * 87 && h<vw * 98 && v>vh * 0.7 && v<vh * 6 && loading === false && lostAlready === false && wonAlready === false) {
        document.body.removeChild(document.querySelector(".menu"));
        clickSound();
    }
    //easy
    if(h>vw * 20 && h<vw * 37.5 && v>vh * 30 && v<vh * 37){
        chosenDiff = 1;
        menuLayer.clearRect(0, 0, canvas.width, canvas.height);
        menuLayer.drawImage(easySelection, 0, 0);
        menuLayer.drawImage(textSelect, vw * 23, vh * 45);
        clickSound();
    } 
    if (h>vw * 37.5 && h<vw * 54.5 && v>vh * 32 && v<vh * 37) {
        menuLayer.clearRect(0, 0, canvas.width, canvas.height);
        menuLayer.drawImage(normalSelection, 0, 0);
        menuLayer.drawImage(textSelect, vw * 23, vh * 45);
        chosenDiff = 2;
        clickSound();
    }
    if (h>vw * 55 && h<vw * 71 && v>vh * 32 && v<vh * 37) {
        menuLayer.clearRect(0, 0, canvas.width, canvas.height);
        menuLayer.drawImage(hardSelection, 0, 0);
        menuLayer.drawImage(textSelect, vw * 23, vh * 45);
        chosenDiff = 3;
        clickSound();
    }

    
    
}



pilar.onload = function() {
    movement.drawImage(pilar, 0, 427 + backgroundY, 414, 359 );
}

let loading = false;
fadeScreenMove = () => {
    if (wonAlready === false || lostAlready === false && loading === false) {
        loading = true;
        walkingSound();
        console.log("true");
        let time = 0;
        let opacity = 0;
        let id = setInterval(frame, 10);
        function frame() {
        if (time == 200) {
            clearInterval(id);
        } else if (time < 100){
            walkingSound();
        opacity += 0.01;
        time++;
        canvas17.style.opacity = opacity;
        } else if (time === 100) { 
            moveCat1();
            moveCat2();
            moveCat3();
            zombieMove();
            changePage();
            loadHouses();
            backGround.play();
            walkingSound();
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
let cat3Movement = 0.25;
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

moveCat3 = () => {
    cat3Movement += 0.25;
    if (cat3Movement === 1) {
        cat3Movement = 0;
        if (cat3X < 6 && cat3X > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat3X +=1;

            } else {
                cat3X -=1;
            }

        }
        if (cat3Y < 6 && cat3Y > 0) {
            if (Math.floor(Math.random()*2) +1 === 1) {
                cat1Y +=1;
                console.log("cat1 moved");

            } else {
                cat1Y -=1;
                console.log("cat1 moved");
            }

        }

        if (cat3X === 6)  {
            cat3X -=1;
            }
        if (cat3X === 0)  {
            cat3X +=1;
        }
        if (cat3Y === 6)  {
            cat3Y -=1;
        }
        if (cat3Y === 0)  {
            cat3Y +=1;
        }    
    }
}

//click på pilar
clicked = (e) => {
    e.preventDefault();
    let h = e.clientX;
    let v = e.clientY;
    console.log("x = " + h + " vw =" + h / gameWidth);
    console.log("y =" + v + " vh = " + v / gameHeight);
    if (h>vw * 87 && h<vw * 98 && v>vh * 0.7 && v<vh * 6 && loading === false && lostAlready === false && wonAlready === false) {
        openMenu();
        console.log("ja");
    }
    
    if (h>vw * 1 && h<vw * 12 && v>vh * 72 && v<vh * 81 && loading === false) {
        console.log("vänster");
        if (x > 0) {
        x -= 1;
        mapX -= 25
        
        fadeScreenMove();
        }
    } else if (h>vw * 87 && h<vw * 99 && v>vh * 72 && v<vh * 81 && loading === false) {
        console.log("höger");
        if (x < 6) {
        x += 1;
        mapX += 25;
        
        fadeScreenMove();
        }
    }
    if (h>vw * 43 && h<vw * 56 && v>vh * 92 && v<vh * 99 && loading === false) {
        console.log("ner");
        if (y > 0) {
        y -= 1;
        mapY += 20
        
        fadeScreenMove();
        }
    } else if (h>vw * 43 && h<vw * 56 && v>vh * 55 && v<vh * 64 && loading === false) {
        console.log("upp");
        if (y < 6) {
        y += 1;
        mapY -= 20
        
        
        fadeScreenMove();
        }
        //Klick på katt2
    } else if (h>vw * 59 && h<vw * 93 && v>vh * 80 && v<vh * 95 && cat2X === x && cat2Y === y) {
        catsCaught +=1;
        layer14.clearRect(0, 0, canvas.width, canvas.height);
        mapLayer1.clearRect(48, 18, 100, 100);
        cat2Y = 500;
        cat2X = 500;
        pickupSound.play();
            if(catsCaught === 1) {
        mapLayer1.drawImage(catCount2, 50, 20);
        mapLayer1.drawImage(catCountImg, 10, 10);
        console.log("funkar");
            } else if (catsCaught === 2) {
            mapLayer1.drawImage(catCount3, 50, 20);
            mapLayer1.drawImage(catCountImg, 10, 10);
            console.log("funkar");
            } else {
            mapLayer1.drawImage(catCount4, 50, 20);
            mapLayer1.drawImage(catCountImg, 10, 10);
            }
    } else if (h>vw * 19 && h<vw * 47 && v>vh * 78 && v<vh * 94  && cat1X === x && cat1Y === y) {
        catsCaught +=1;
        layer14.clearRect(0, 0, canvas.width, canvas.height);
        mapLayer1.clearRect(48, 18, 100, 100);
        cat1Y = 500;
        cat1X = 500;
        pickupSound.play();
        if(catsCaught === 1) {
            mapLayer1.drawImage(catCount2, 50, 20);
            mapLayer1.drawImage(catCountImg, 10, 10);
            console.log("funkar");
            //klicka på katt1
                } else if (catsCaught === 2) {
                mapLayer1.drawImage(catCount3, 50, 20);
                mapLayer1.drawImage(catCountImg, 10, 10);
                console.log("funkar");
                } else {
                mapLayer1.drawImage(catCount4, 50, 20);
                mapLayer1.drawImage(catCountImg, 10, 10);
                }
            } else if (h>vw * 19 && h<vw * 47 && v>vh * 78 && v<vh * 94  && cat3X === x && cat3Y === y) {
                pickupSound.play();
                catsCaught +=1;
                layer14.clearRect(0, 0, canvas.width, canvas.height);
                mapLayer1.clearRect(48, 18, 100, 100);
                cat3Y = 500;
                cat3X = 500;
                if(catsCaught === 1) {
                    mapLayer1.drawImage(catCount2, 50, 20);
                    mapLayer1.drawImage(catCountImg, 10, 10);
                    console.log("funkar");
                    //klicka på katt1
                        } else if (catsCaught === 2) {
                        mapLayer1.drawImage(catCount3, 50, 20);
                        mapLayer1.drawImage(catCountImg, 10, 10);
                        console.log("funkar");
                        } else {
                        mapLayer1.drawImage(catCount4, 50, 20);
                        mapLayer1.drawImage(catCountImg, 10, 10);
                        }
                    }
    checkWin();
    if(lostAlready === true && h>vw * 21 && h<vw * 79 && v>vh * 49 && v<vh * 57 || wonAlready === true && h>vw * 21 && h<vw * 79 && v>vh * 49 && v<vh * 57) {
        console.log("restart");
        restart();
    }
}
//Lyssnar efter klick
canvasMovement.addEventListener("mousedown", clicked, false);

