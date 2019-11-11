//Canvaslagret som lyssnar efter klick och har navigationspilarna laddas in här
let canvasMovement = document.createElement("canvas");
document.body.appendChild(canvasMovement);
canvasMovement.classList.add("movement");

canvasMovement.width = 414;
canvasMovement.height = 846;

let movement = canvasMovement.getContext('2d');

let gameHeight = 846;
let gameWidth = 414;

//Här räknas viewheight och width ut för att göra spelet mer responsivt.
let vh = /*window.innerHeight*/ 846 * 0.01;
let vw = /*window.innerWidth*/ 414 * 0.01;

//Funktion för att se till att katterna inte befinner sig på samma plats. Om de råkar vara det flyttas de. 
//Körs varje gång man laddar en ny plats.
checkCats = () => {
    if (cat1X === cat2X && cat1X < 6 || cat1X === cat3X && cat1X < 6) {
        cat1X += 1
    } else if (cat1X === cat2X && cat1X > 1 || cat1X === cat3X && cat1X > 1){
        cat1X -= 1
    }

    if (cat3X === cat2X && cat3X < 6 || cat2Y === cat3Y && cat3X < 6) {
        cat3X += 1
    } else if (cat3X === cat2X && cat3X > 6 || cat2Y === cat3Y && cat3X > 6) {
        cat3X -= 1
    }
}
//Funktion för att öppna menyn
//Skapar ett nytt lager över alla andra och lägger till en listener för man inte ska råka röra spelet
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
//När man klickar i menyn körs denna funktionen, den kollar om man klickar på någon av knapparna. 
//Om man stänger menyn tas canvasen bort från DOMen.
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


//Ritar ut pilarna direkt första gången
pilar.onload = function() {
    movement.drawImage(pilar, 0, 427 + backgroundY, 414, 359 );
}


//Funktion för att byta plats genom en fadande skärm.
//Det som händer är att det finns en canvas med 0 opacity som under en tid går till 1 opacity och sedan till 0 igen. Under tiden den är på
// 1 opacity kör spelet alla funktiuoner som krävs för att ladda en ny sida. 
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
//Funktioner för att flytta katterna
//När catmovement når 1 flyttar katten sig i en random riktning baserat på en math.random som ger 1 eller 2.
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

//Den här funktionen körs när man klickar på navigationslagret, om man klickar på en av navigationspilarna kollar den om man förlorat eller vunnit redan och 
//ändrar sedan ens koordinater beroende på var man klickat och kör sen funktionen för att byta plats.

//Den kollar även om man klickar på katterna och lägger isåfall till 1 till score och tar bort katten från kartan och kollar om man har tagit alla.
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
    //klick västerut
    if (h>vw * 1 && h<vw * 12 && v>vh * 72 && v<vh * 81 && loading === false) {
        if (x > 0) {
        x -= 1;
        mapX -= 25
        
        fadeScreenMove();
        }

        //klick österut
    } else if (h>vw * 87 && h<vw * 99 && v>vh * 72 && v<vh * 81 && loading === false) {
        if (x < 6) {
        x += 1;
        mapX += 25;
        
        fadeScreenMove();
        }
    }

    //klick söderut
    if (h>vw * 43 && h<vw * 56 && v>vh * 92 && v<vh * 99 && loading === false) {
        if (y > 0) {
        y -= 1;
        mapY += 20
        
        fadeScreenMove();
        }
        //klick norrut
    } else if (h>vw * 43 && h<vw * 56 && v>vh * 55 && v<vh * 64 && loading === false) {
        if (y < 6) {
        y += 1;
        mapY -= 20
        
        
        fadeScreenMove();
        }

        //klick på katterna när de är på skärmen
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
    //Om man har förlorat kollar den här if:en om man klickar på restartknappen.
    if(lostAlready === true && h>vw * 21 && h<vw * 79 && v>vh * 49 && v<vh * 57 || wonAlready === true && h>vw * 21 && h<vw * 79 && v>vh * 49 && v<vh * 57) {
        console.log("restart");
        restart();
    }
}
//Lyssnar efter klick
canvasMovement.addEventListener("mousedown", clicked, false);

