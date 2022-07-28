const produits = [
    {id:1, nom: 'Coca-Cola', prix:1, promo:0},
    {id:2, nom: 'Ice-tea', prix:1.1, promo:0},
    {id:3, nom: 'Orangina', prix:1.3, promo:20},
    {id:4, nom: 'Nalu', prix:1.3, promo:10},
    {id:5, nom: 'Pepsi', prix:1.25, promo:0},
]

// text-decoration:line-through;

let tr0=document.createElement('tr');
let tr1=document.createElement('tr');
let tr2=document.createElement('tr');
let tr3=document.createElement('tr');

let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');

let td4=document.createElement('td');
let td5=document.createElement('td');
let td6=document.createElement('td');

let td7=document.createElement('td');
let td8=document.createElement('td');
let td9=document.createElement('td');


// let newtr = document.querySelector('tbody').appendChild(tr1);

// document.querySelector('tbody').appendChild(tr0).appendChild(td1).innerHTML=produits[0].id;
// document.querySelector('tbody').appendChild(tr0).appendChild(td2).innerHTML=produits[0].nom;
// document.querySelector('tbody').appendChild(tr0).appendChild(td3).innerHTML=(produits[0].promo ==0 ) ? produits[0].prix : produits[0].prix*(produits[0].promo)/100;


// document.querySelector('tbody').appendChild(tr1).appendChild(td4).innerHTML=produits[1].id;
// document.querySelector('tbody').appendChild(tr1).appendChild(td5).innerHTML=produits[1].nom;
// document.querySelector('tbody').appendChild(tr1).appendChild(td6).innerHTML=(produits[1].promo ==0 ) ? produits[1].prix : produits[1].prix*(produits[1].promo)/100;



// document.querySelector('tbody').appendChild(tr2).appendChild(td7).innerHTML=produits[2].id;
// document.querySelector('tbody').appendChild(tr2).appendChild(td8).innerHTML=produits[2].nom;
// document.querySelector('tbody').appendChild(tr2).appendChild(td9).innerHTML=(produits[2].promo ==0 ) ? produits[2].prix : produits[2].prix*(produits[2].promo)/100;



//--------------------------------------------------------------------------------

// document.body.innerHTML+= `
// <div class="modal" tabindex="-1" role="dialog">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-primary">Save changes</button>
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
// `
let tbody=document.querySelector('tbody');
let monbouton=document.getElementById('monbouton');
let fnom=document.getElementById('fnom');
let fprix=document.getElementById('fprix');
let fpromotion=document.getElementById('fpromotion');


monbouton.onclick=(e)=> {
    e.preventDefault();
console.log(fnom.value);
produits[produits.length]={id:produits.length+1,}
let tr=document.createElement('tr');
let td=document.createElement('td');
let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');
let btn=document.createElement('button');
tbody.appendChild(tr).appendChild(td).innerHTML=produits.length+1;
tbody.appendChild(tr).appendChild(td1).innerHTML=fnom.value;
tbody.appendChild(tr).appendChild(td2).innerHTML=fprix.value;
tbody.appendChild(tr).appendChild(td3).appendChild(btn).innerHTML="Effacer";

}
//console.log("monbouton");


for(let i = 0; i<5;i++ )
{
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let btn=document.createElement('button');
    
    


    tr.appendChild(td1).innerHTML=produits[i].id;
    tr.appendChild(td2).innerHTML=produits[i].nom;
    tr.appendChild(td3).innerHTML=(produits[i].promo ==0 ) ? produits[i].prix : produits[i].prix*(produits[i].promo)/100;
    tr.appendChild(td4).appendChild(btn).innerText="Effacer";
    
    //<button id="monboutton"></button>

    document.querySelector('tbody').appendChild(tr);

}




let btns = document.querySelectorAll('td button');
btns.forEach((btn)=> {
    btn.onclick=function({target}) {
      console.log(target.parentNode.parentNode);
      let conf=confirm('voullez-vous vraiment supprimer cette colonne');
      if(conf)
      target.parentNode.parentNode.remove();
    }
})


// newtr.appendChild(td1).innerHTML='coucou';
// newtr.appendChild(td2).innerHTML='coucou';
// newtr.appendChild(td3).innerHTML='coucou';


//--------------------
//--exercice


// const deleteItem = ({target})=>URL.removeChild(target)

// let p =['prod1', ]