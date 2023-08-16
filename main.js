let biscoitoFechado = document.querySelector("#BiscoitoFechado");
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let fraseDia = document.querySelector(".frase");
let frase1 = document.createTextNode("Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.");
let botao = document.querySelector("#voltar");


function abrirFrase(){
    
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
    fraseDia.appendChild(frase1);
}

biscoitoFechado.addEventListener('click', function(e){
    biscoitoFechado.classList.add("treme");
    setTimeout(abrirFrase, 800)
})

voltar.addEventListener('click', function(e){
    screen1.classList.remove("hidden");
    screen2.classList.add("hidden");
    biscoitoFechado.classList.remove("treme");    
})