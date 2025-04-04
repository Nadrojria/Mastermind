/*******COLORS*******
********************/
let validColors = ["blue", "red", "yellow", "green", "purple", "orange", "white", "black"];

/*******SECONDARY********
********FONCTIONS*******/
function colorDifferent(codePlayer) {
    for (let i = 0; i < codePlayer.length; i++) { //compare colorOne avec les suivantes, puis ColorTwo etc.
        for (let j = i + 1; j < codePlayer.length; j++) {
            if (codePlayer[i] === codePlayer[j]) {
                alert("All colors must be different");
                return false;
            }
        }
    }
    return true;
}

function colorRestrict(codePlayer, allColors) {
    for (const color of codePlayer) {
        if (!allColors.includes(color)) {
            alert("Give me a colorOne between : blue, red, yellow, green, purple, orange, white or black");
            return false;
        } 
    }
    return true;
}

function colorTrue(codePlayer, resultPlayer) {
    for (let i = 0; i < codePlayer.length; i++) {
        if (codePlayer[i] === secretCode[i]) {
            resultPlayer[0] ++;
        }
        for (let j = 0; j < codePlayer.length; j++) {
            if (codePlayer[i] === secretCode[j] && codePlayer[i] !== secretCode[i]){
                resultPlayer[1] ++;
            }
        }        
    }
    alert(`${resultPlayer}`);
}

function winGame(codePlayer) {
    for (let i = 0; i < 4; i++) {
        if (codePlayer[i] !== secretCode[i]) {
            return false;
        }
    }
    return true;
}


/*******PRINCIPAL********
********FUNCTION*******/
function playGame() {
    while (attempts > 0) {
        let result = [0, 0];

        alert(`You have ${attempts} attempts`);

        let colorOne = prompt("Give me first color (blue, red, yellow, green, purple, orange, white or black)");
        let colorTwo = prompt("Give me first color (blue, red, yellow, green, purple, orange, white or black)");
        let colorThree = prompt("Give me first color (blue, red, yellow, green, purple, orange, white or black)");
        let colorFour = prompt("Give me first color (blue, red, yellow, green, purple, orange, white or black)");
        let codeBreaker = [colorOne, colorTwo, colorThree, colorFour];

        if(!colorDifferent(codeBreaker) || !colorRestrict(codeBreaker, validColors)) {
            alert("Color Invalid");
            continue;
        }

        colorTrue(codeBreaker, result);

        let winning = winGame(codeBreaker);
        if (winning) {
            alert("You win");
            return;
        } else {
            attempts--;
            alert("Try again");
        }
    }
    alert("Too many attemps");
}


/********START********
**********************/
let attempts = 12;
let secretCode = ["black", "purple", "red", "orange"];

playGame();