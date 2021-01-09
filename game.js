class Game{
 constructor(){
}
readGameState(){
    db.ref('gameState').on("value",function(data){
        gs=data.val()
    })
}
writeGameState(state){
    db.ref('/').update({gameState:state})
}
startGame(){
    if (gs===0){
     //   player= new Player();
       // player.getCount();
        form= new Form();
        form.display();
    }
}
}