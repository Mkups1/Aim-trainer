// Aim trainer
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 655;

let change = 0
let number3 = document.getElementById("number-3")
let number2 = document.getElementById("number-2")
let number1 = document.getElementById("number-1")

// Draw start screen
ctx.fillStyle="black"
ctx.font = "100px Arial"
ctx.fillText("Welcome to Aim Trainer!", 90, 300)
ctx.font = "30px Arial"
ctx.fillText("To start, press the start button", 425, 600)


// When you click the start button, start the game
document.getElementById("button").addEventListener("click", () => {
    start()
    
}) 



function start(){
    setInterval(start, 1000)
        change++
    
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
    if(change === 5){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.fillStyle = "Blue"
        ctx.fillRect(600, 300, 50, 50)
    }

}

document.addEventListener("mousedown", hit)
