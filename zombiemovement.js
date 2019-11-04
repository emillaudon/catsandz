let zombieMoveTimer = 0;
let zombieYMoveTimer = 0;

//Funktion för att zombien ska röra sig
//Eftersom att den lägger till 0,5 på moveTimer så rör han sig bara på x-axeln varannan gång och 
//eftersom att det läggs till 0.25 på Ymovetimer så rör han sig var fjärde gång även på y-axeln, så att han inte ska vara för snabb
//men inte heller för långsam
zombieMove = () => {
    zombieMoveTimer += 0.5;
    zombieYMoveTimer += 0.25;
        if(zombieMoveTimer === 1) {
            zombieMoveTimer = 0;
            if (zombieX < x) {
                zombieX += 1;
            } else if(zombieX > x) {
                zombieX -= 1;
            }
            if (zombieYMoveTimer === 1) {
            zombieYMoveTimer = 0;
                if (zombieY < y) {
                    zombieY += 1;
                    console.log("zombie moved");
                } else if (zombieY > y) {
                    zombieY -= 1;
                    console.log("zombie moved");
                }
            }

        }
}


