const letters = 'abcdefghijklmnopqrstuvwxyz';

let letterArray = Array.from(letters);

let letterContainer = document.querySelector(".letters");

letterArray.forEach(letter => {

    let span = document.createElement("span");

    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.className = "letter-box";

    letterContainer.appendChild(span);


});

const words = {
    programming: ["javascript", "python", "r", "ruby", "php", "kotlyn", "c++"],
    moveis: ["cartoon", "romantic", "faiter", "action", "coco", "up"],
    people: ["mahmoud ahmed", "ahmed samy", "samir gamal", "amany", "moaz", "lobna"],
    countries: ["egypt", "sorya", "sudia", "libnan", "qutar", "emarats", "oman", "palastien"]
}

let allKeys = Object.keys(words); //array

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let letterSpaceContainer = document.querySelector(".letters-gusess");

let lettersAndSpce = Array.from(randomValueName);

lettersAndSpce.forEach(letter => {

    let empatySpan = document.createElement("span");

    if (letter === ' ') {

        empatySpan.className = 'with-space';
    }
    letterSpaceContainer.appendChild(empatySpan);

});

let spanGusess = document.querySelectorAll(".letters-gusess span");

let wrongAttemps = 0;

let theDraw = document.querySelector(".hangman-draw");


document.addEventListener("click", (e) => {

    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        let theClicked = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueName.toLowerCase());

        theChosenWord.forEach((wordLetter, wordindex) => {

            if (theClicked == wordLetter) {

                theStatus = true;
                spanGusess.forEach((span, spanIndex) => {

                    if (wordindex === spanIndex) {

                        span.innerHTML = theClicked;
                    }
                });

            }

        });

        if (theStatus !== true) {

            wrongAttemps++;

            theDraw.classList.add(`wrong-${wrongAttemps}`);

            document.getElementById("fail").play();

            if (wrongAttemps === 8) {
                endGame()

                letterContainer.classList.add("fenish")
            }
        } else {
            document.getElementById("sucsess").play();
        }
    }

});

function endGame() {

    let div = document.createElement("div");

    let divText = document.createTextNode(`Game Over And The Word Is ${randomValueName}`);

    div.appendChild(divText);

    div.className = 'popup';

    document.body.appendChild(div);
}