document.querySelector(".btn").addEventListener("click",actualGame);
function actualGame() {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    var diceImage1 = document.querySelector(".img1");
    var diceImage2 = document.querySelector(".img2");
    switch (randomNumber1) {
        case 0:
            diceImage1.setAttribute("src", "images/dice1.png");
            break;
        case 1:
            diceImage1.setAttribute("src", "images/dice2.png");
            break;
        case 2:
            diceImage1.setAttribute("src", "images/dice3.png");
            break;
        case 3:
            diceImage1.setAttribute("src", "images/dice4.png");
            break;
        case 4:
            diceImage1.setAttribute("src", "images/dice5.png");
            break;
        case 5:
            diceImage1.setAttribute("src", "images/dice6.png");
            break;
    }
    switch (randomNumber2) {
        case 0:
            diceImage2.setAttribute("src", "images/dice1.png");
            break;
        case 1:
            diceImage2.setAttribute("src", "images/dice2.png");
            break;
        case 2:
            diceImage2.setAttribute("src", "images/dice3.png");
            break;
        case 3:
            diceImage2.setAttribute("src", "images/dice4.png");
            break;
        case 4:
            diceImage2.setAttribute("src", "images/dice5.png");
            break;
        case 5:
            diceImage2.setAttribute("src", "images/dice6.png");
            break;
    }
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player one wins";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player two wins";
    } else {
        document.querySelector("h1").textContent = "Draw";
    };
    document.querySelector(".btn").textContent="PLAY AGAIN";

}