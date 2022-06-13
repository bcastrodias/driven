let pegarfrango;
let pegarcoca;
let pegarpudim;

function selecionarfrango(elemento) {
    pegarfrago = elemento.innerHTML;
    const comidacheck = document.querySelector (".comidalinha .borda")

    const check = document.querySelector (".comidalinha .ok")


if (comidacheck !== null) {
    comidacheck.classList.remove ("borda")
}

elemento.classList.add("borda");

if (check !== null){
    check.classList.remove("ok")
}
elemento.querySelector(".certinho").classList.add("ok");

botao()
}

function selecionarcoca(elemento){
    pegarcoca = elemento.innerHTML;
    const cocacheck = document.querySelector (".cocalinha .borda")
    const check = document.querySelector(".cocalinha .ok ")

if (cocacheck !==null) {
    cocacheck.classlist.remove ("borda")
}
elemento.classList.add("borda")

if (check !== null){
    check.classList.remove ("ok")
}
elemento.querySelector (".certinho").classList.add("ok");

botao()

}

function selecionarcoca(elemento){
    pegarpudim = elemento.innerHTML;
    const pudimcheck = document.querySelector (".sobremesalinha .borda")
    const check = document.querySelector(".sobremesalinha .ok ")

if (pudimcheck !==null) {
    pudimcheck.classlist.remove ("borda")
}
elemento.classList.add("borda")

if (check !== null){
    check.classList.remove ("ok")
}
elemento.querySelector (".certinho").classList.add("ok");

botao()

}

function linkwhats(){

    let confirmafrango = document.querySelector('.comidalinha .borda');
    let confirmacoca = document.querySelector('.bebidalinha .borda');
    let confirmapudim = document.querySelector('.sobremesalinha .borda');

    if(confirmafrango && confirmacoca && confirmapudim){
  



