import Ball from "./Ball.js"
const ball = new Ball(document.getElementById("ball"))
// COMMIT MESSAGES

// initial javascript setup with gameloop
// working with ball section of the game
// working with paddle section of the game
// finishing the game working with game logic

let lastTime 
function gameloop(time){
    if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta)
    }
    lastTime = time
    window.requestAnimationFrame(gameloop)
}

window.requestAnimationFrame(gameloop)