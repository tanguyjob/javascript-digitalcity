// window l'objet window contient toute les infos de la fenetre
console.log(window.location.href);

// redirection vers une autre page
// window.location.href = 'http://localhost:5500/exo1.html';

// depuis window on a access à des "storages" qui permetttront 
// d'enregistrer des données
// ex : window.localStorage

// navigator.geolocation permet de récupérer votre position
// window.navigator.geolocation
    //.getCurrentPosition(({coords}) => console.log(coords))

// document l'ensemble des noeuds html

// selecteurs 

// recupérer la balise body
console.log(document.body);

// recuperer un element grace à son id // VERY BAD PRACTICE !!!!
// console.log(myId)
// recuperer un element grace à son id
console.log(document.getElementById('myId'));
//document.getElementById('myId').innerHTML = 'test';

// recuperer une collection de balise html (htmlCollection)
console.log(document.getElementsByTagName('a'));

// attention il faudra parcourir la collection pour pouvoir
// manipuler les éléments
// for(let item of document.getElementsByTagName('a')) {
//     item.innerHTML = 'test';
// }

// recupérer des elements grace à leur classe
console.log(document.getElementsByClassName('maClasse'));

// recuperer un element grace à un selecteur css
console.log(document.querySelector('ul.maListe>li:nth-child(4)'));
//document.querySelector('ul.maListe>li:nth-child(4)').innerHTML = "test"

// recuperer une collection d'elements grace à un selecteur css
console.log(document.querySelectorAll('ul.maListe>li'));

// htmlElement.value // recuperer la value d'un input

// htmlElement.addEventListener('click', fct) // ajouter un evenement click 