// Aim trainer
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 655;

let change = 0
let number3 = document.getElementById("number-3")
let number2 = document.getElementById("number-2")
let number1 = document.getElementById("number-1")
let scoreEl = document.getElementById("score")
let score = 0
let targetX = 600
let targetY = 300

// Draw start screen
ctx.fillStyle="black"
ctx.font = "100px Arial"
ctx.fillText("Welcome to Aim Trainer!", 90, 300)
ctx.font = "30px Arial"
ctx.fillText("To start, press the start button", 425, 600)



// When you click the start button, start the game
document.getElementById("button").addEventListener("click", start)


function start(){
    // if (change <= 4) {
        setTimeout(start, 1000)
        change++
        console.log("change")
    // } else {
    //     change = 0
    // }
    if(change === 1){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.drawImage(number3, 375, 25)
    } 
    if(change === 2){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.drawImage(number2, 400, 25, 400, 600)
    } 
    if(change === 3){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.drawImage(number1, 375, 25)

    } 
    if(change === 4){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.fillStyle = "Blue"
        ctx.fillRect(targetX, targetY, 50, 50)
        document.addEventListener("mousedown", hit)
    }


}


function hit(event){
    console.log (score)
    if(event.x - cnv.getBoundingClientRect().x  >= targetX && event.x - cnv.getBoundingClientRect().x <= targetX + 50 && event.y - cnv.getBoundingClientRect().y >= targetY && event.y - cnv.getBoundingClientRect().y <= targetY + 50){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        targetX = (Math.random() * 1250)
        targetY = (Math.random() * 655)
        score++
        scoreEl.innerHTML = score
        ctx.fillStyle = "Blue"
        ctx.fillRect(targetX, targetY, 50, 50)
    }

}