/*******COLORS*******
*********************/
let colorBlue = "blue";
let colorRed = "red";
let colorYellow = "yellow";
let colorGreen = "green";

/*******SECONDARY********
********FONCTIONS*******/
function colorDifferent(codePlayer) {
    if (codePlayer[0] == codePlayer[1]) {
        alert("Colors have to be different");
        return false;
    }
    return true;
}

function colorRestrict(codePlayer) {
    if (codePlayer[0] !== colorBlue && codePlayer[0] !== colorRed && codePlayer[0] !== colorYellow && codePlayer[0] !== colorGreen) {
        alert("Give me a colorOne between : blue, red, yellow or green");
        return false;
    }
    if (codePlayer[1] !== colorBlue && codePlayer[1] !== colorRed && codePlayer[1] !== colorYellow && codePlayer[1] !== colorGreen) {
        alert("Give me a colorTwo between : blue, red, yellow or green");
        return false;
    }
    return true;
}

function colorTrue(codePlayer, resultPlayer) {
    for (let i = 0; i < 2; i++) {
        if (codePlayer[i] === secretCode[i]) {
            resultPlayer[0] ++;
        }
        if (secretCode.includes(codePlayer[i])) {
            resultPlayer[1] ++;
        }
    }
    alert(`${resultPlayer}`);
}

function winGame(codePlayer) {
    if (codePlayer[0] == secretCode[0] && codePlayer[1] == secretCode[1]) {
        return true;
    } else {
        return false;
    }
}


/*******PRINCIPAL********
********FUNCTION*******/
function playGame() {
    while (attempts > 0) {
        let result = [0, 0];

        alert(`You have ${attempts} attempts`);

        let colorOne = prompt("Give me first color (blue, red, yellow, green)");
        let colorTwo = prompt("Give me first color (blue, red, yellow, green)");
        let codeBreaker = [colorOne, colorTwo];

        if(!colorDifferent(codeBreaker) || !colorRestrict(codeBreaker)) {
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
let secretCode = ["blue", "red"];

playGame();


// function colorTrue() {
//     if (codeBreaker[0] == secretCode[0] && codeBreaker[1] == secretCode[1]) {
//         result[0] = result.length;
//         for (const colorPlayer of codeBreaker) {
//             for (const colorMaker of secretCode) {
//                 if (colorPlayer == colorMaker) {
//                     result[1] ++;
//                 } 
//             }
//         }

//     } else if (codeBreaker[0] == secretCode[0] || codeBreaker[1] == secretCode[1]) {
//         result[0] ++;
//         for (const colorPlayer of codeBreaker) {
//             for (const colorMaker of secretCode) {
//                 if (colorPlayer == colorMaker) {
//                     result[1] ++;
//                 } 
//             }
//         }

//     } else {
//         for (const colorPlayer of codeBreaker) {
//             for (const colorMaker of secretCode) {
//                 if (colorPlayer == colorMaker) {
//                     result[1] ++;
//                 } 
//             }
//         }

//     }
//     console.log(result);
// }


// function playGame() {
//     colorDifferent(codeBreaker)
//     colorRestrict(codeBreaker);
//     colorTrue(codeBreaker);
//     let winning = winGame(codeBreaker);
//     if (winning) {
//         console.log("You win");
//     } else {
//         console.log("Try again");
//     }
// }