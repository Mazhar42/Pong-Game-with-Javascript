const INITIAL_VELOCITY = 0.045
const VELOCITY_INCREASE = 0.000001

export default class Ball{
    constructor(ballEl){
        this.ballEl = ballEl
        this.reset()
    }

    rect(){
        return this.ballEl.getBoundingClientRect()
    }
    get x(){
       return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--x"))
    }

    set x(val){
        this.ballEl.style.setProperty("--x",val)
    }

    get y(){
       return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--y"))
    }

    set y(val){
        this.ballEl.style.setProperty("--y",val)
    }
    reset(){
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }
        while (
            Math.abs(this.direction.x) <= 0.2 || 
            Math.abs(this.direction.x) >= 0.9
        ) {
            const heading = Math.random() * 2 * Math.PI
            this.direction = {x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta,paddleRects){
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()
        if(rect.bottom >= window.innerHeight || rect.top <= 0) this.direction.y *= -1
        if(paddleRects.some(r => isCollision(r,rect))) this.direction.x *= -1
    }

}

function isCollision(paddle,ball){
    return (
        paddle.left <= ball.right &&
        paddle.right >= ball.left &&
        paddle.top <= ball.bottom &&
        paddle.bottom >= ball.top
    )
}