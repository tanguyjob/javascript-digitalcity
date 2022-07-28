// // outputs
// document.write('Hello World !!');

// // inputs
// let entree = prompt('Veuillez entrer un nombre');

// let entree = prompt('Veuillez entrer un nombre');

// document.write(entree * entree);

// declaration globale d'une variable A EVITER !!!!
// maVariable = 42;
// declaration globale A EVITER !!
// var maVariable = 42;

// déclaration d'une variable locale ♥♥♥ 
let maVariable = 42;

// déclaration de constante ♥♥♥♥
const MA_CONSTANTE = 43;
// impossible de modifier une constante
//MA_CONSTANTE = 44;

//document.write(maVariable);

// type undefined
let und;

// type null
let n = null;

// Type string
let chaine1 = 'Chaine 1' // ♥;

let chaine2 = "Chaine 2";

// ♥
let chaine3 = `<div>
    <p>${maVariable}</p>
</div>`;

// number
let nombre = 42; // int => number
let bombre2 = 42.5 // float => number

// bool
let flag = true;

// tableau
let tableau = [1,2,3];

// dico || object anonyme
let objet = { id: 2, nom: 'Ly', prenom: 'Khun' };
//document.write(objet['id']);
//document.write(objet.id);

// operateurs

// arithmetique
// addition
let val1 = 1 + 2;
// sous
let val2 = 2 - 1;
// multiplication
let val3 = 1 * 42;
// division
let val4 = 1/2; //c# => 0 // js => 0.5 // pas de division entiere
// exposant
let val5 = 42**2;

// operateur concatenation
let val6 = 'Hello ' + 'World !!';
let val7 = 'Hello ' + 42;

// comparaison
let val8 = 42 < 5; // false
let val9 = 42 == '42'; //=> true 
let val10 = 42 === '42'; // false
let val11 = 0 == false; // true
let val12 = 0 === false; // false

// inverse
let val13 = !false; // true
// est condéré comme faux (falsy) cad ! est true
// 0, '', null, undefined, NaN, document.all
// tout le reste est condéré comme vrai (truthy)

// Demander (prompt) a un utilsateur d'entrer son age
// si rien n'a été entré redemander l'age à l'utilisateur
// sinon afficher vous etre majeur ou vous mineur

// tableau
let liste = [];

// ajout dans un tableau en gardant la reference
liste.push(42); // a la fin

// ajout dans un tableau en gardant la reference
liste.unshift(42); // au debut

// ajout dans un tableau avec une nouvelle reference
let liste2 = [...liste, 43];

let liste3 = [4,5,6];
// decomposition des tableaux
let [a,b,c] = liste3;
// a = 4; b = 5; c = 6;

// retirer un element dans un tableau
liste3.pop(); // le dernier element

liste3.shift(); // le premier element

liste3.splice(2, 3); // a partir de l'indice2 retirer 3 elements

// longueur d'1 liste
liste3.length;

let liste4 = [1,2,3,4,5,6];
let liste5 = liste4.slice(2,4); // [3,4]

let index = liste4.indexOf(6); // 5 ou -1 si on ne trouve pas l'element


// demander à l'utilisateur d'ajouter des articles
// on arretera d'ajouter des articles si le dernier article est vide
// à la fin on affiche les articles à l'ecran dans une liste HTML(ul, li,...)

let liste6 = [1,2,3,4];

// filtrer les elements d'une liste pour ne récupére 
// que ceux qui respectent une condition
let resultat = liste6.filter(item => item % 2 === 0);
console.log(resultat);

// chercher le premier élément d'une collection qui respecte
// une condition
let resultat2 = liste6.find(item => item % 2 === 0);
console.log(resultat2);

// transforme chacun des éléments d'une liste et leur applique
// une transformation
let resultat3 = liste6.map(item => item * item);

let chiffres = [42,55,66,1]; // 41

console.log(chiffres.reduce((prev, item) => {
    return prev + item/chiffres.length;
}, 0));

