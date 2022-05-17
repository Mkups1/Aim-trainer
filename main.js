// Aim trainer
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 655;

// Draw start screen
ctx.fillStyle="black"
ctx.font = "100px Arial"
ctx.fillText("Welcome to Aim Trainer!", 90, 300)
ctx.font = "30px Arial"
ctx.fillText("To start, press the start button", 425, 600)


// When you click the start button, start the game
document.getElementById("button").addEventListener("click", start)

function start(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1250, 655)
    ctx.drawImage()
}
