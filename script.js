// Etape 1, créer une fonction qui demande un chiffre à l'utilisateur

function demanderChiffre() {
    let chiffre = prompt("Donnez un nombre au hasard :");
    let givenNumber = Number(chiffre)
    return givenNumber
}

//demanderChiffre()


// Etape 2, créer une fonction avec condition pour deviner 22
// + étape 3 avec fonction gamePlay

function didIWin(givenNumber) {
    const keyNumber = 22

    if (givenNumber < keyNumber) {
        alert("Plus grand !")
    } else if (givenNumber > keyNumber) {
        alert("Plus petit !")
    } else {
        alert("Bravo ! Tu as deviné le chiffre !")
        return true
    }
    return false
}

function gamePlay() {
    let found = false;
    do {
        let userGuess = demanderChiffre();
        found = didIWin(userGuess);
    }
    while (!found);
}

gamePlay();

