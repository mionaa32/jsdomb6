//dobijanje elementa preko id
let destinacija=document.getElementById("lista-destinacija");
console.log(destinacija);

//dobijanje elementa preko klase
let naslov=document.getElementsByClassName("title");
console.log(naslov);

//dobijanje elementa preko taga
let element=document.getElementsByTagName("li");
console.log(element);

//selektor moze biti klasa ili id
//vraca samo prvi na koji naidje koji ima neku klasu
let wrap=document.querySelector("#wrapper");
console.log(wrap);

//vraca sve elemente koji pripadaju nekoj klasi ili id
let nekeDestinacije=document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

let listaDestinacija=document.querySelector("#lista-destinacija");
console.log("roditelj ovog cvora je:",listaDestinacija.parentNode);

let listaDestinacija2=document.querySelector("#lista-destinacija");
console.log("deca ovog cvora su:",listaDestinacija2.children);

let listaDestinacija3=document.querySelector("#lista-destinacija");
console.log("next sibling ovog cvora je:",listaDestinacija2.nextElementSibling);

let listaDestinacija4=document.querySelector("#lista-destinacija");
console.log("previous sibling ovog cvora je:",listaDestinacija2.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log("ovaj banner je tipa:", banner.nodeName);

let destinacijaFrancuska=document.querySelector(".naziv");
destinacijaFrancuska.textContent="Beograd, Srbija";


var dugmici=document.querySelectorAll(".obrisi");
//vrati nam listu cvorova a ne listu elemenataa
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
        const li=e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
   })
})
