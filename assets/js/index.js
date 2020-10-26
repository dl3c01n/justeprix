//On génère un nombre random compris entre 0 et 10 entier
let random_number = Math.floor(Math.random() * 10);

//On sélectionne le paragraphe du résultat
const text = document.querySelector('p#text');

//Texte si on a trouvé
const prixFound = "Vous avez trouvé le juste prix !";

//Texte si on a pas trouvé (plus ou moins)
const prixNotFound = "C'est plus + !";
const prixNotFound2 = "C'est moins - !";

//Texte si input vide
const inputSomething = "Il faut rentrer un chiffre";

//On sélectionne le h5 avec id chiffre
const prix = document.querySelector('#chiffre');

//On sélectionne le bouton
const buttonVerifier = document.querySelector("#verifier")

//On sélectionne l'input
const inputValue = document.querySelector('input');



//On cache le prix avec la classe d-none
prix.className = "d-none card-title";

//On insère le chiffre généré dans le h5
prix.innerHTML = random_number;



//Fonction rafraichissement
const refreshPage = () => {
    window.location.href = window.location.href;
}



//Fonction de vérification
const verifyPrix = () => {
    //On vérifie si la valeur de l'input est égale au chiffre généré
    if(parseInt(inputValue.value) === random_number){
        //Si oui, on montre le texte de réussite, on montre le chiffre dans le h5, on disable le button et l'input et on refresh la page 3 sec après
        text.innerHTML = prixFound;
        prix.className = "card-title";
        inputValue.setAttribute("disabled", "");
        buttonVerifier.setAttribute("disabled", "");
        setTimeout(refreshPage, 3000);
    }
    //si c'est vide
    else if(inputValue.value === ""){
        //On affiche le message adéquat
        text.innerHTML = inputSomething;
    }
    //sinon
    else if(parseInt(inputValue.value) > random_number){
        //Si c'est supérieur
        text.innerHTML = prixNotFound2;
    }
    else if(parseInt(inputValue.value) < random_number){
        //Si c'est inférieur
        text.innerHTML = prixNotFound;
    }
}


//On ajoute la fonction onclick après car il faut que l'interpréteur connaisse la fonction avant
buttonVerifier.onclick = verifyPrix;