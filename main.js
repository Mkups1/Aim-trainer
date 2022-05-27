// Aim trainer
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 655;

let change = 1
let number3 = document.getElementById("number-3")
let number2 = document.getElementById("number-2")
let number1 = document.getElementById("number-1")
let scoreEl = document.getElementById("score")
let score = 0
let timeEl = document.getElementById("time")
let time = 60
let targetX = 600
let targetY = 300

// Draw start screen
ctx.fillStyle="black"
ctx.font = "100px Arial"
ctx.fillText("Welcome to Aim Trainer!", 90, 300)
ctx.font = "30px Arial"
ctx.fillText("To start, press the start button", 425, 600)



// When you click the start button, start the game
document.getElementById("button").addEventListener("click", () => {
    change = 1
    score = 0
    time = 60
    start()
})


function start(){
    console.log(change)
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1250, 655)
    if(change === 1){
        change++
        ctx.drawImage(number3, 375, 25)
        setTimeout(start, 1000)
    } else if(change === 2){
        change++
        ctx.drawImage(number2, 400, 25, 400, 600)
        setTimeout(start, 1000)
    } else if(change === 3){
        change++
        ctx.drawImage(number1, 375, 25)
        setTimeout(start, 1000)
    } else if (change === 4){
        // change = 0
        ctx.fillStyle = "Blue"
        ctx.fillRect(targetX, targetY, 50, 50)
        document.addEventListener("mousedown", hit)
        setInterval(timeF, 1000)
    } 

}



function hit(event){
    console.log (score)
    if(event.x - cnv.getBoundingClientRect().x  >= targetX && event.x - cnv.getBoundingClientRect().x <= targetX + 50 && event.y - cnv.getBoundingClientRect().y >= targetY && event.y - cnv.getBoundingClientRect().y <= targetY + 50){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        targetX = (Math.random() * 1200)
        targetY = (Math.random() * 605)
        score++
        scoreEl.innerHTML = score
        ctx.fillStyle = "Blue"
        ctx.fillRect(targetX, targetY, 50, 50)
    }

}

function timeF(){
    if(time <= 60 && time >=1)
    time--
    timeEl.innerHTML = time
    console.log(time)
    if (time === 0){
        targetX += 100000
        targetY += 100000
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 1250, 655)
        ctx.fillStyle="black"
        ctx.font = "150px Arial"
        ctx.fillText("Congratulations!", 90, 300)
        ctx.font = "100px Arial"
        ctx.fillText("Your score:" + score, 300, 500)
    }
}