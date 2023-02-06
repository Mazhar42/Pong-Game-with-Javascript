import Ball from "./Ball.js"
import Paddle from "./Paddle.js"
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
// COMMIT MESSAGES

// initial javascript setup with gameloop
// working with ball section of the game
// working with paddle section of the game
// finishing the game working with game logic

let lastTime 
function gameloop(time){
    if(lastTime != null){
        const delta = time - lastTime
        // ball.update(delta)
        computerPaddle.update(delta,ball.y)
    }
    lastTime = time
    window.requestAnimationFrame(gameloop)
}

document.addEventListener('mousemove',(e)=>{
    playerPaddle.position = (e.y / window.innerHeight)*100
})

window.requestAnimationFrame(gameloop)