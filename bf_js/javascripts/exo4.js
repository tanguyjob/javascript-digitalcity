let yoda = document.getElementById('yoda');
let yoda2 = document.getElementById('yoda2');
let yoda3 = document.getElementById('yoda3');
let imageprincipale = document.getElementById('imageprincipale');

yoda.onclick= () => {
    console.log('yoda a été cliquer');
    sourceimage = yoda.getAttribute('src');
    console.log(yoda);
    //yoda.style.border =  5px solid red;
    yoda.classList.add('rouge');
    yoda2.classList.remove('rouge');
    yoda3.classList.remove('rouge');
    imageprincipale.src=sourceimage;
} 



yoda2.onclick= () => {
    console.log('yoda 2 a été cliquer');
    sourceimage = yoda2.getAttribute('src');

    yoda.classList.remove('rouge');
    yoda2.classList.add('rouge');
    yoda3.classList.remove('rouge');
    imageprincipale.src=sourceimage;
} 

yoda3.onclick= () => {
    console.log('yoda 3 a été cliquer');
    sourceimage = yoda3.getAttribute('src');
    yoda.classList.remove('rouge');
    yoda2.classList.remove('rouge');
    yoda3.classList.add('rouge');
    imageprincipale.src=sourceimage;
} 