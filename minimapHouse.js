loadHouses = () => {
let tempX = 0;
let tempY = 0;

    for (let i = 0; i < 7; i += 1) {
        for (let j = 0; j < 7; j += 1) {
            if(map[i][j][13] < -360) {

                
                tempX = map[i];
                tempY = map[i][j];
                let indexOfMapX = map.indexOf(tempX);
                let indexOfMapY = map[i].indexOf(tempY);

                console.log(tempX);
                console.log(tempY);
                
                console.log(indexOfMapX);
                console.log(indexOfMapY)
                
                mapLayer2.drawImage(houseOne, (indexOfMapX * 25) + 233, 230 - (indexOfMapY * 18), 10, 12);
                

            }
            
        }
        
    }

}

loadHouses();
