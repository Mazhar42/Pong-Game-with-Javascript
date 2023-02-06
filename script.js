import Ball from "./Ball.js"
import Paddle from "./Paddle.js"
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const computerScore = document.getElementById("computer-score")
const playerScore = document.getElementById("player-score")


let lastTime 
function gameloop(time){
    if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta,[playerPaddle.rect(),computerPaddle.rect()])
        computerPaddle.update(delta,ball.y)

                
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue",hue + delta * 0.005)

        if(isLose()) handleLose()
    }
    lastTime = time
    window.requestAnimationFrame(gameloop)
}

function isLose(){
    const ballRect = ball.rect()
    return ballRect.right >= window.innerWidth || ballRect.left <= 0
}

function handleLose(){
    const ballRect = ball.rect()
    if(ballRect.right >= window.innerWidth) playerScore.textContent = parseInt(playerScore.textContent) + 1
    else computerScore.textContent = parseInt(computerScore.textContent) + 1

    ball.reset()
    computerPaddle.reset()
}

document.addEventListener('mousemove',(e)=>{
    playerPaddle.position = (e.y / window.innerHeight)*100
})

window.requestAnimationFrame(gameloop)