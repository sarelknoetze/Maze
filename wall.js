function generateWall(){
    let i = 1;
    while(i < 100){
        
        tiles[Math.floor(Math.random()*tileColumnCount)][Math.floor(Math.random()*tileRowCount)].state = 'w';
        i++;
    }
    tiles[0][0].state = 's';
    tiles[tileColumnCount-1][tileRowCount-1].state = 'f';
    
}