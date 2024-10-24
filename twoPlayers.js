// Fonction qui demande au joueur 1 d'entrer un chiffre entre 0 et 50 sinon boucle

function askPlayerOne () {
    let monChiffre;
    do {
        monChiffre = parseInt(prompt("Joueur 1, entrez un nombre à deviner compris entre 0 et 50 :"), 10);
    } while (isNaN(monChiffre) || monChiffre < 0 || monChiffre > 50);
        return monChiffre;
    }

let monChiffre = askPlayerOne();



// Fonctions qui demande au joueur 2 de deviner le chiffre de joueur 1

function playerTwo() {
    let givenNumber;
    do {
        givenNumber = Number(prompt("Joueur 2, devinez le nombre du joueur 1 compris entre 0 et 50 :"));
    } while (isNaN(givenNumber));
    return givenNumber;
}

function didIWin(givenNumber, monChiffre) {
    return givenNumber === monChiffre;
}

function gamePlay() {
    let loose = false;
    while (!loose) {
        let givenNumber = playerTwo();
        loose = didIWin(givenNumber, monChiffre);
        if (loose) {
            alert("Bravo Joueur 2 ! Vous avez deviné le nombre.");
        } else {
            if (givenNumber < monChiffre) {
                alert("Plus grand !");
            } else {
                alert("Plus petit !");
            }
        }
    }
}

gamePlay();