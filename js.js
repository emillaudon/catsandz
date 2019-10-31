//array för karta
const mapArray = [
    0.0, 0.1, 0.2, 0.3,
    1.0, 1.1, 1.2, 1.3,
    2.0, 2.1, 2.2, 2.3
]
//startposition
let x = 1;
let y = 1;
let whereAreYou = 2;
//funktion för att röra sig och hämta info från array



let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.classList.add("first");

let canvas2 = document.createElement("canvas");
document.body.appendChild(canvas2);
canvas2.classList.add("second");


canvas.width = 414;
canvas.height = 846;

canvas2.width = 414;
canvas2.height = 846;


let backgroundContext = canvas.getContext("2d");
let context = canvas2.getContext('2d');

let background1 = new Image();
background1.src = "Art/Backgrounds/PixelForest/Preview/Background.png";

let background2 = new Image();
background2.src = "Art/Backgrounds/PixelForest/Preview/Background2.png";
background1.onload = function() {
    backgroundContext.drawImage(background1, 0, 0);

}
let background3 = new Image();
background3.src = "Art/Backgrounds/Free Pixel Art Hill/PREVIEWS/hills.png";

//zombien laddas in
let testImage = new Image();
testImage.src = "Art/Characters/frames/big_zombie_run_anim_f3.png";
testImage.onload = function() {
    context.drawImage(testImage, x, y);
}
//ladda katt
let catImage = new Image();
catImage.src = "Art/Characters/cat-png-pixel.jpg";

let winImage = new Image();
winImage.src = "Art/Characters/win.png";
let loseImage = new Image();
loseImage.src = "Art/Characters/lose.png";

changeBackGround = () => {
    switch (whereAreYou) {
        case 1:
            context.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.drawImage(background2, 0 , 0);
            context.drawImage(winImage, 80, 100, 250, 150);
            context.drawImage(rightArrow, 315, 700, 100, 100);
            context.drawImage(leftArrow, 0, 700, 100, 100);
            context.drawImage(catImage, 140, 485, 180, 280);
            break;
        case 2:
            context.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.drawImage(background1, 0 , 0);
            context.drawImage(rightArrow, 315, 700, 100, 100);
            context.drawImage(leftArrow, 0, 700, 100, 100);
            break;
        case 3:
            context.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.clearRect(0, 0, canvas.width, canvas.height)
            backgroundContext.drawImage(background3, 0 , 0, 500, 800);
            context.drawImage(loseImage, 80, 100, 250, 150);
            context.drawImage(testImage, 50, 485, 180, 280);
            context.drawImage(rightArrow, 315, 700, 100, 100);
            context.drawImage(leftArrow, 0, 700, 100, 100);
            break;
    }

}



//ladda in höger pil
let rightArrow = new Image();
rightArrow.src = "Art/arrow.png";
rightArrow.onload = function() {
    context.drawImage(rightArrow, 315, 700, 100, 100);
}
//ladda in vänster pil
let leftArrow = new Image();
leftArrow.src="Art/arrowleft.png";
leftArrow.onload = function() {
    context.drawImage(leftArrow, 0, 700, 100, 100);
}

//click på pilar
clicked = (e) => {
    e.preventDefault();
    let h = e.clientX;
    let v = e.clientY;
    console.log("x = " + h);
    console.log("y =" + v);
    if (h>14 && h<85 && v>726 && v<780) {
        console.log("vänster");
        
        whereAreYou -= 1;
        changeBackGround();
    } else if (h>329 && h<401 && v>726 && v<780) {
        console.log("höger");
        
        whereAreYou += 1;
        changeBackGround();
    }


}


canvas2.addEventListener("mousedown", clicked, false);
    




document.addEventListener("keypress", function(e) {
    console.log(e);
    if(e.key === "w") {
        x += 5;
        
        
        console.log("x");
    } else {
        y += 5;
        console.log("y");
    }
});



/*
window.requestAnimationFrame(function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(testImage, x, y);
    window.requestAnimationFrame(loop);
});
*/












/*
let x = 0;
window.requestAnimationFrame(function loop() {
    x += 1;
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "red";
    context.fillRect(x, 0, 100, 100);
    window.requestAnimationFrame(loop);
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
        x += 10;

    }

}); */