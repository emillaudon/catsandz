let wonAlready = false;
let lostAlready = false;
let restartingOn = false;

checkWin = () => {

    if (wonAlready === false) {
        if(catsCaught === 3) {
            wonAlready = true;
            
                let canvasLose = document.createElement("canvas");
                document.body.appendChild(canvasLose);
                canvasLose.classList.add("lose");
                canvasLose.width = 414;
                canvasLose.height = 846;
                let loseLayer = canvasLose.getContext('2d');

                movement.clearRect(0, 0, canvas.width, canvas.height);

                loseLayer.fillStyle= "black";    
                loseLayer.fillRect(0, 0, 414, 846); 
               
                loseLayer.drawImage(restartButton, 91, 438);

                loseLayer.font = "30px Arial";
                loseLayer.fillStyle = "red";
                loseLayer.fillText("You Won", 100, 300);

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
            canvasLose.style.opacity = opacity;
            }
                
        }
    }
}
}


checkLoss = () => {
    if (zombieX === x && zombieY === y){
    lostAlready = true;
    }
    setTimeout(function() {
            if(zombieX === x && zombieY === y) {
                laugh.play();
                lostAlready = true;
                let canvasLose = document.createElement("canvas");
                document.body.appendChild(canvasLose);
                canvasLose.classList.add("lose");
                canvasLose.width = 414;
                canvasLose.height = 846;
                let loseLayer = canvasLose.getContext('2d');

                movement.clearRect(0, 0, canvas.width, canvas.height);

                loseLayer.fillStyle= "black";    
                loseLayer.fillRect(0, 0, 414, 846); 

               
                loseLayer.drawImage(restartButton, 91, 438);

                loseLayer.font = "30px Arial";
                loseLayer.fillStyle = "red";
                loseLayer.fillText("You died", 100, 300);
                loseLayer.fillText("All the cats are dead", 120, 340);
                loseLayer.fillText("Try again?", 100, 380);
                makeZombie(loseLayer);
                loading = true;
                console.log("true");
                let time = 0;
                let opacity = 0;
                let id = setInterval(frame, 10);
                function frame() {
                if (time == 2000) {
                    clearInterval(id);
                } else if (time < 100){
                opacity += 0.01;
                time++;
                canvasLose.style.opacity = opacity;
                
                }
                
            }
    }
    }, 2000);
}

restarting = () => {
        restartingOn = true;
        let time = 0;
        let opacity = 0;
        let id = setInterval(frame, 10);
        function frame() {
        if (time === 200) {
            restartingOn = false;
        }
        if (time === 300) {
            clearInterval(id);
        } else if (time < 300){
        time++;
        }
    }
}

restart = () => {
    clickSound();
    restarting();
    if (lostAlready === true || wonAlready === true) {
        let blackWindow = document.querySelector(".lose")
        document.body.removeChild(document.querySelector(".lose"));
    } else {
        let blackWindow = document.querySelector(".menu")
        document.body.removeChild(document.querySelector(".menu"));

    }
    lostAlready = false;
    wonAlready = false;


    makeMap();
    x = 1;
    y = 1;
    

    mapLayer2.clearRect(0, 0, canvas.width, canvas.height);
    mapLayer1.clearRect(0, 0, canvas.width, canvas.height);

    cat1X = Math.floor(Math.random() * (3 - 1) + 1);
    cat1Y = Math.floor(Math.random() * (3 - 1) + 1);
    checkCat1();

    cat2X = Math.floor(Math.random() * (6 - 3) + 3);
    cat2Y = Math.floor(Math.random() * (6 - 3) + 3);

    zombieX = Math.floor(Math.random() * (6 - 2) + 2);
    zombieY = Math.floor(Math.random() * (6 - 2) + 2);

    mapX = 251;
    mapY = backgroundY + 160;

    catsCaught = 0;
    loading = false;

    mapLayer1.clearRect(48, 18, 100, 100);
    mapLayer1.drawImage(catCount, 50, 20);
    mapLayer1.drawImage(catCountImg, 10, 10);
    mapLayer1.drawImage(mapUi, 220, backgroundY + 60);
    mapLayer1.drawImage(mapUi, 220, backgroundY + 60);

    
    changePage();
    movement.drawImage(pilar, 0, 480);
}


