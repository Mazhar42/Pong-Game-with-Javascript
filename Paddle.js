const SPEED = 0.03
export default class Paddle{
    constructor(paddleEl){
        this.paddleEl = paddleEl
        this.reset()
    }
    
    get position(){
       return parseFloat(getComputedStyle(this.paddleEl).getPropertyValue("--position"))
    }

    set position(val){
        this.paddleEl.style.setProperty("--position",val)
    }

    rect(){
        return this.paddleEl.getBoundingClientRect()
    }

    reset(){
        this.position = 50
    }
    
    update(delta,ballHeight){
        this.position = this.position + SPEED * delta * ballHeight - SPEED * delta * this.position
    }

}