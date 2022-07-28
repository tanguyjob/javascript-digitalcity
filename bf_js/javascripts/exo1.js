let age;

// tant que mauvaise valeur
while(!age && age !== 0) {
    //poser la question
    age = parseInt(prompt('Veuillez entrer votre age'));

    console.log(age);
}

document.write(age < 18 ? 'Vous êtes mineur' : 'Vous êtes majeur');

// if(age < 18) {
//     document.write('Vous êtes mineur');
// }
// else {
//     document.write('Vous êtes majeur');
// }
