//Deklarerar variablerna som kommer att användas för att navigera. 
//När arrayen som innehåller bakgrunderna navigeras kommer de att
//användas
let backgroundY = 53;

let x = 1;
let y = 1;

let cat1X = Math.floor(Math.random() * (3 - 1) + 1);
let cat1Y = Math.floor(Math.random() * (3 - 1) + 1);

let cat2X = Math.floor(Math.random() * (6 - 3) + 3);
let cat2Y = Math.floor(Math.random() * (6 - 3) + 3);

let zombieX = Math.floor(Math.random() * (6 - 2) + 2);
let zombieY = Math.floor(Math.random() * (6 - 2) + 2);

let mapX = 251;
let mapY = backgroundY + 160;

let catsCaught = 0;

//Funktion för att generera x-axeln för bakgrunderna för att göra
//varje sida unik.
function getNonZeroRandomNumber(){
    var random = Math.floor(Math.random()*99) * -4;
    if(random==0) return getNonZeroRandomNumber();
    return random;
}

//array för kartan, här finns alla nummer som genereras 
let map = [];

//Den här funktionen autogenerarar kartan varje gång spelet startas

makeMap = () => {
    for (k = 0; k < 7; k += 1) {
        let tempArrayX = [];

        for (j = 0; j < 7; j += 1) {
            let tempArray13 = [];
            for (i = 0; i < 14; i += 1) {
                let tempNumber = getNonZeroRandomNumber();
                tempArray13.push(tempNumber);
                
            }
            
            tempArrayX.push(tempArray13);
            
        }
        map.push(tempArrayX);
    }
}
makeMap();



//Sätter upp alla canvaslager och laddar sedan första bakgrunden på 0,0 i arrayen

let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.classList.add("first");

let canvas2 = document.createElement("canvas");
document.body.appendChild(canvas2);
canvas2.classList.add("second");

let canvas3 = document.createElement("canvas");
document.body.appendChild(canvas3);
canvas3.classList.add("third");

let canvas4 = document.createElement("canvas");
document.body.appendChild(canvas4);
canvas4.classList.add("fourth");

let canvas5 = document.createElement("canvas");
document.body.appendChild(canvas5);
canvas5.classList.add("fifth");

let canvas6 = document.createElement("canvas");
document.body.appendChild(canvas6);
canvas6.classList.add("sixth");

let canvas7 = document.createElement("canvas");
document.body.appendChild(canvas7);
canvas7.classList.add("seventh");

let canvas8 = document.createElement("canvas");
document.body.appendChild(canvas8);
canvas8.classList.add("eight");

let canvas9 = document.createElement("canvas");
document.body.appendChild(canvas9);
canvas9.classList.add("ninth");

let canvas10 = document.createElement("canvas");
document.body.appendChild(canvas10);
canvas10.classList.add("tenth");

let canvas11 = document.createElement("canvas");
document.body.appendChild(canvas11);
canvas11.classList.add("eleventh");

let canvas12 = document.createElement("canvas");
document.body.appendChild(canvas12);
canvas12.classList.add("twelth");

let canvas13 = document.createElement("canvas");
document.body.appendChild(canvas13);
canvas13.classList.add("thirteenth");

let canvas14 = document.createElement("canvas");
document.body.appendChild(canvas14);
canvas14.classList.add("fourteenth");

let canvas15 = document.createElement("canvas");
document.body.appendChild(canvas15);
canvas15.classList.add("fifteenth");

let canvas16 = document.createElement("canvas");
document.body.appendChild(canvas16);
canvas16.classList.add("sixteenth");



canvas.width = 414;
canvas.height = 846;

canvas2.width = 414;
canvas2.height = 846;

canvas3.width = 414;
canvas3.height = 846;

canvas4.width = 414;
canvas4.height = 846;

canvas5.width = 414;
canvas5.height = 846;

canvas6.width = 414;
canvas6.height = 846;

canvas7.width = 414;
canvas7.height = 846;

canvas8.width = 414;
canvas8.height = 846;

canvas9.width = 414;
canvas9.height = 846;

canvas10.width = 414;
canvas10.height = 846;

canvas11.width = 414;
canvas11.height = 846;

canvas12.width = 414;
canvas12.height = 846;

canvas13.width = 414;
canvas13.height = 846;

canvas14.width = 414;
canvas14.height = 846;

canvas15.width = 414;
canvas15.height = 846;

canvas16.width = 414;
canvas16.height = 846;


let layer1 = canvas.getContext('2d');
let layer2 = canvas2.getContext('2d');
let layer3 = canvas3.getContext('2d');
let layer4 = canvas4.getContext('2d');
let layer5 = canvas5.getContext('2d');
let layer6 = canvas6.getContext('2d');
let layer7 = canvas7.getContext('2d');
let layer8 = canvas8.getContext('2d');
let layer9 = canvas9.getContext('2d');
let layer10 = canvas10.getContext('2d');
let layer11 = canvas11.getContext('2d');
let layer12 = canvas12.getContext('2d');
let layer13 = canvas13.getContext('2d');
let layer14 = canvas14.getContext('2d');
let mapLayer1 = canvas15.getContext('2d');
let mapLayer2 = canvas16.getContext('2d');


let first = new Image();
first.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0010_1.png";
first.onload = function() {
    layer1.drawImage(first, map[x][y][0], 0);
}
let second = new Image();
second.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0009_2.png";
second.onload = function() {
    layer2.drawImage(second, map[x][y][1], backgroundY);
}

let third = new Image();
third.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0008_3.png";
third.onload = function() {
    layer3.drawImage(third, map[x][y][2], backgroundY);
}

let fourth = new Image();
fourth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0007_Lights.png";
fourth.onload = function() {
    layer4.drawImage(fourth, map[x][y][3], backgroundY);
}

let fifth = new Image();
fifth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0007_Lights.png";
fifth.onload = function() {
    layer5.drawImage(fifth, map[x][y][4], backgroundY);
}

let sixth = new Image();
sixth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0006_4.png";
sixth.onload = function() {
    layer6.drawImage(sixth, map[x][y][5], backgroundY);
}

let seventh = new Image();
seventh.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0006_4.png";
seventh.onload = function() {
    layer7.drawImage(seventh, map[x][y][6], backgroundY);
}

let eigth = new Image();
eigth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0005_5.png";
eigth.onload = function() {
    layer8.drawImage(eigth, map[x][y][7], backgroundY);
}

let ninth = new Image();
ninth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0004_Lights.png";
ninth.onload = function() {
    layer9.drawImage(ninth, map[x][y][8], backgroundY);
}

let tenth = new Image();
tenth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0003_6.png";
tenth.onload = function() {
    layer10.drawImage(tenth, map[x][y][9], backgroundY);
}

let eleventh = new Image();
eleventh.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0002_7.png";
eleventh.onload = function() {
    layer11.drawImage(eleventh, map[x][y][10], backgroundY);
}

let twelth = new Image();
twelth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0001_8.png";
twelth.onload = function() {
    layer12.drawImage(twelth, map[x][y][11], backgroundY);
}

let thirteenth = new Image();
thirteenth.src = "Art/Backgrounds/PixelForest/PNG/Background layers/Layer_0000_9.png";
thirteenth.onload = function() {
    layer13.drawImage(thirteenth, map[x][y][12], backgroundY);
   // layer13.fillStyle = "dark";
    //layer13.fillRect(0,770, 414, 100)
}
//laddar in minimap och counter för hur många katter som hittats
let mapUi = new Image();
let mapPointer = new Image();
let catCount = new Image();
let catCountImg = new Image();
let catCount2 = new Image();
let catCount3 = new Image();
mapUi.src = "Art/karta.png";
mapPointer.src = "Art/pointer.png";
catCount.src = "Art/x0.png";
catCount2.src = "Art/x1.png";
catCount3.src = "Art/x2.png";

catCountImg.src = "Art/Mask Group 2.png";
mapUi.onload = function() {
    mapLayer1.drawImage(mapUi, 220, backgroundY + 60);
    mapLayer1.drawImage(mapUi, 220, backgroundY + 60);
    mapLayer1.drawImage(catCountImg, 10, 10);
    mapLayer1.drawImage(catCount, 50, 20);
}

mapPointer.onload = function() {
    mapLayer2.drawImage(mapPointer, mapX, mapY);
}


//Funktion för att gå till annan plats, raderar först all och ritar sen upp baserat på map arrayen
changePage = () => {
        layer1.clearRect(0, 0, canvas.width, canvas.height);

        layer2.clearRect(0, 0, canvas.width, canvas.height);

        layer3.clearRect(0, 0, canvas.width, canvas.height);
        
        layer4.clearRect(0, 0, canvas.width, canvas.height);
        
        layer5.clearRect(0, 0, canvas.width, canvas.height);
        
        layer6.clearRect(0, 0, canvas.width, canvas.height); 

        layer7.clearRect(0, 0, canvas.width, canvas.height);
        
        layer8.clearRect(0, 0, canvas.width, canvas.height);
        
        layer9.clearRect(0, 0, canvas.width, canvas.height);
    
        layer10.clearRect(0, 0, canvas.width, canvas.height);

        layer11.clearRect(0, 0, canvas.width, canvas.height);

        layer12.clearRect(0, 0, canvas.width, canvas.height);

        layer13.clearRect(0, 0, canvas.width, canvas.height);

        layer14.clearRect(0, 0, canvas.width, canvas.height);

        mapLayer2.clearRect(0, 0, canvas.width, canvas.height);

        layer1.drawImage(first, map[x][y][0], 0);
        layer2.drawImage(second, map[x][y][1], backgroundY);
        layer3.drawImage(third, map[x][y][2], backgroundY);
        layer4.drawImage(fourth, map[x][y][3], backgroundY);
        layer5.drawImage(fifth, map[x][y][4], backgroundY);
        layer6.drawImage(sixth, map[x][y][5], backgroundY);
        layer7.drawImage(seventh, map[x][y][6], backgroundY);
        layer8.drawImage(eigth, map[x][y][7], backgroundY);
        layer9.drawImage(ninth, map[x][y][8], backgroundY);
        layer10.drawImage(tenth, map[x][y][9], backgroundY);
        layer11.drawImage(eleventh, map[x][y][10], backgroundY);
        layer12.drawImage(twelth, map[x][y][11], backgroundY);
        
        loadHouses();
        mapLayer2.drawImage(mapPointer, mapX, mapY);

        if (-360 > map[x][y][13]) {
            layer12.drawImage(houseOne, 230, backgroundY + 590);
        }

        layer13.drawImage(thirteenth, map[x][y][12], backgroundY);
        //layer13.fillStyle = "dark";
        //layer13.fillRect(0,770, 414, 100)
        
        if (x === cat1X && y === cat1Y) {
            layer14.drawImage(catOne, 88 , backgroundY + 627, 100, 100);
        }
        if (x === cat2X && y === cat2Y) {
            layer14.drawImage(catTwo,  270, backgroundY + 650, 100, 100);
        }

    }



/*

context.drawImage(rightArrow, 315, 700, 100, 100);
context.drawImage(leftArrow, 0, 700, 100, 100);
*/