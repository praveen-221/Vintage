let userscore = 0;
let computerscore = 0;
let ref, news;
const res = document.querySelector("#result");
const score = document.querySelector("#score");

function game (move) {
    let userchoice = move;
    let computermoves = ["rock", "paper", "scissors"];
    console.log(Math.random());
    let computerchoice = computermoves[Math.floor(Math.random() * 3)];
    console.log(computerchoice);

    compare(userchoice, computerchoice);
    let winner = ref;

    if (winner == "User") {
        res.innerHTML = winner + " wins :)";
        res.className = "win";
        setTimeout(function () {
            res.innerHTML = "Choose your move";
            res.className = "";
        },800);
    }
    else if (winner == "Computer") {
        res.innerHTML = winner + " wins :(";
        res.className = "lose";
        setTimeout(function () {
            res.innerHTML = "Choose your move";
            res.className = "";
        },800);
    }
    else {
        res.innerHTML = winner + " @_@";
        res.className = "tie";
        setTimeout(function () {
            res.innerHTML = "Choose your move";
            res.className = "";
        },800);
    }

    score.innerHTML = `<span class = "wins">User Score: ${userscore}</span><span class="wins">Computer Score: ${computerscore}</span>`;

    if (userscore > computerscore) {
        news = "You";
    }
    else if (computerscore > userscore) {
        news = "Computer";
    }
    else {
        news = "tie";
    }
}

function finish () {
    if (news == "You") {
        alert(news + " win :) \nWe need Practice to beat you...");
        location.reload();
    }
    else if (news == "Computer") {
        alert(news + " wins.. \nBetter Luck Next Time...");
        location.reload();
    }
    else if (news == "tie") {
        alert("It's a " + news + "\nLike to give another try ?");
        location.reload();
    }
}

function compare (choice1, choice2) {
    if (choice1 == choice2) {
        ref = "It's a Tie...";
    }
    else if (choice1 == "rock") {
        if (choice2 == "scissors") {
            ref = "User";
            ++userscore;
        }
        else if (choice2 == "paper") {
            ref = "Computer";
            ++computerscore;
        }
    }
    else if (choice1 == "paper") {
        if (choice2 == "rock") {
            ref = "User";
            ++userscore;
        }
        else if (choice2 == "scissors") {
            ref = "Computer";
            ++computerscore;
        }
    }
    else if (choice1 == "scissors") {
        if (choice2 == "paper") {
            ref = "User";
            ++userscore;
        }
        else if (choice2 == "rock") {
            ref = "Computer";
            ++computerscore;
        }
    }
}