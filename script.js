// COMMIT MESSAGES

// initial javascript setup with gameloop
// working with ball section of the game
// working with paddle section of the game
// finishing the game working with game logic

let lastTime 
function gameloop(time){
    if(lastTime != null){
        const delta = time - lastTime
        //necessary code here
    }
    lastTime = time
    window.requestAnimationFrame(gameloop)
}

window.requestAnimationFrame(gameloop)