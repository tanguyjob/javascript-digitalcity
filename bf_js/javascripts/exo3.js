
const articles = [];

// declaration d'une fonction solution 1 Attention la fonction peut etre ecrasée
// function afficherUneCollection(elementName, liste) {
//     // récupérer un element grace à son id
//     const ul = document.getElementById(elementName);

//     // modifier le contenu de la balise html selectionnée
//     // main.innerHTML = "Coucou !!";
//     for(let a of liste) {
//         ul.innerHTML += `<li>${a}</li>`;
//     }
// }

// solution 2
const afficherUneCollection = (elementName, liste) => {
    // récupérer un element grace à son id
    const ul = document.getElementById(elementName);
    ul.innerHTML="";
    // modifier le contenu de la balise html selectionnée
    // main.innerHTML = "Coucou !!";
    for(let a of liste) {
        ul.innerHTML += `<li>${a}</li>`;
    }
}

let nouvelArticle;



function clique()
{
    nouvelArticle = document.getElementById("article").value;
    if(nouvelArticle) {
        const index = articles.indexOf(nouvelArticle);
        if(index === -1) { // article non trouvé
            articles.push(nouvelArticle);
        }
        else {
            articles.splice(index, 1);
        }

    }
    span_char = document.getElementById('span_char');

span_char.innerHTML 
= articles.reduce((prev, item) => prev + item.length ,0);


afficherUneCollection('ul_articles', articles);
}

// if(nouvelArticle) {
//     const index = articles.indexOf(nouvelArticle);
//     if(index === -1) { // article non trouvé
//         articles.push(nouvelArticle);
//     }
//     else {
//         articles.splice(index, 1);
//     }
// }

