
console.log("welcome to tic toc toe")

let bgmusic = new Audio("music.mp3")
let nextturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"

let isgameover = false

let start = false

let isdraw = true

let empty = true

let a, b, c

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('button-1');

    playButton.addEventListener('click', function () {
        bgmusic.play();
        playButton.style.display = "none"
        document.getElementById("btn3").style.display = "none"
    });
});

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(ele => {
        if (boxtext[ele[0]].innerText === boxtext[ele[1]].innerText && boxtext[ele[1]].innerText === boxtext[ele[2]].innerText && boxtext[ele[0]].innerText !== "") {
            document.querySelector(".info").innerText = boxtext[ele[0]].innerText + " Won the game 🏆, Congratulations..."
            document.getElementsByClassName("info")[0].style.color = "yellow"
            isgameover = true
            turn = "X"
            console.log("a : ", a)
            a = boxtext[ele[0]]
            b = boxtext[ele[1]]
            c = boxtext[ele[2]]
            a.style.color="red"
            b.style.color="red"
            c.style.color="red"
            console.log("a : ", a)
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "24vw"
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.height = "auto"
            gameover.play()
            bgmusic.currentTime = 0
            bgmusic.play()
            isdraw = false
            console.log("in the won loop")
        }
    })

    if (boxtext[0].innerText !== "" && boxtext[1].innerText !== "" && boxtext[2].innerText !== "" && boxtext[3].innerText !== "" && boxtext[4].innerText !== "" && boxtext[5].innerText !== "" && boxtext[6].innerText !== "" && boxtext[7].innerText !== "" && boxtext[8].innerText !== "") {
        empty = false
    }
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")

    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isgameover && start) {
            boxtext.innerText = turn
            turn = changeTurn()
            nextturn.play()
            checkWin(element)
            if (isdraw && !empty) {
                document.querySelector(".info").innerText = " It,s Draw 😛, Try Again..."
                isgameover = true
                turn = "X"
                console.log("game draw ..")
                gameover.play()
            }
            if (!isgameover && start) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
            console.log("isdraw : ", isdraw, " empty : ", empty)
        }
    })
})

document.getElementById("start").addEventListener("click", () => {
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector(".boxtext")
        boxtext.innerText = ""
    })
    turn = "X"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.getElementById("start").innerText = "Restart"
    if (isgameover && !isdraw) {
        console.log("a : ", a)
        a.style.color = "black"
        b.style.color = "black"
        c.style.color = "black"
    }
    isgameover = false
    isdraw = true
    empty = true
    start = true
    console.log("Restarting again ..")
    document.getElementsByClassName("info")[0].style.color = "black"
    bgmusic.pause()
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.height = "auto"
})

