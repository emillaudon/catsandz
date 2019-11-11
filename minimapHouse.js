

//funktionen kollar om det finns ett hus på arrayen som genererats genom att kolla på värde 13 i varje del av arrayen. Om värdet är mindre än
// 360 ritas ett hus ut på rätt ruta på minimapen.
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

                
                mapLayer2.drawImage(houseOne, (indexOfMapX * 25) + 233, 230 - (indexOfMapY * 18), 10, 12);
                

            }
            
        }
        
    }

}

changePage();
