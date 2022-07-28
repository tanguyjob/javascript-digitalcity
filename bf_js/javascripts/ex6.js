// //ajax
// //css loader avec isloading
// console.log('545445');
 const spanTemp = document.getElementById('span_temp');
 const imagCon = document.getElementById('img_icon');


// let xhr = new XMLHttpRequest();
// //request url en post
// //rest api
// //https://openweathermap.org/
// //github free api

// //d52e50e34214ff0b92247f788638eeb9
// //https://openweathermap.org/current

// const baseUrl= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apikey}&units={unit}';

 const baseImgSrc='http://openweathermap.org/img/wn/{icon}@2x.png';
// //open(verbHttp,url)

// xhr.open('GET',
//             baseUrl.replace('{lon}',4.3)
//                     .replace('{lat}',50.8)
//                     .replace('{apikey}','d52e50e34214ff0b92247f788638eeb9')
//                     .replace('{unit}','metric')
//                     );
// //envoyer la requête
// xhr.send();

// xhr.onreadystatechange = e => {
//     if(xhr.readyState === 4)
//     {
//         console.log(e.currentTarget.responseText);

//         let result=JSON.parse(e.currentTarget.responseText);
//         console.log(result.main.temp);
//         ImageBitmapRenderingContext.src = baseImgSrc
//                                             .replace('{icon}', result.weather[0].icon);
// }

// }



let baseUrl='https://api.openweathermap.org/data/2.5/weather';

let params = {
    lat: 50.8,
    lon:4.3,
    appid:'d52e50e34214ff0b92247f788638eeb9',
    units:'metric'
}

// axios.get(baseUrl, {params}).then(({ data }) => console.log(data));
 axios.get(baseUrl, {params}).then(({ data }) => {
     spanTemp.innerText = data.main.temp;
     imagCon.src = baseImgSrc.replace('{icon}', data.weather[0].icon);
 });

//---------------------------------------------------------------------------------------

baseUrl='https://api.agify.io';
baseUrl2='https://restcountries.com/v3.1/all';

const spanPrenom = document.getElementById('age');
const prenom=document.getElementById('mon_prenom');
const pays=document.getElementById('pays');
const selectPays = document.getElementById('selectPays');




// axios.get(baseUrl2).then(({data})=> {
//     console.log(data[0].name.common);
//     console.log(data.length);
//  });

axios.get(baseUrl2).then(({data})=> {
    for(let i = 0; 250>i; i++)
    {
        let option=document.createElement('option');
        //console.log(data[i].name.common);
        option.innerHTML= data[i].translations.fra.common;
        selectPays.appendChild(option).setAttribute("id",data[i].name.common);
    }

});


// let option=document.createElement('option');
// axios.get(baseUrl2).then(({data})=> {

// let option=document.createElement('option');
// let option1=document.createElement('option');
// let option2=document.createElement('option');
// let option3=document.createElement('option');
// let option4=document.createElement('option');

// selectPays.appendChild(option).setAttribute("id","congo");
// selectPays.appendChild(option1).setAttribute("id","Ukraine");
// selectPays.appendChild(option2).setAttribute("id","Russie");
// selectPays.appendChild(option3).setAttribute("id","Belgique");







 function cliquer(e) {
        e.preventDefault();
        console.log(prenom.value);
         params={
             name: prenom.value,
             country_id: pays.value
         }


         axios.get(baseUrl, {params}).then(({data})=> {
            console.log(data.age);
           spanPrenom.innerHTML = data.age + ' ans';
         });
}



 document.getElementById("monbtn").addEventListener("click", cliquer);





 //axios.get(baseUrl, {params}).then(({data})=> console.log(data.age));
//         spanPrenom.innerHTML = data.
//  });