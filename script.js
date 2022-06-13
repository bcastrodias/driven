
function selecionarfrango(elemento) {
   
    const comidacheck = document.querySelector (".comidalinha .borda")

    const check = document.querySelector (".comidalinha .ok")


if (comidacheck !== null) {
    comidacheck.classList.remove ("borda")
}

elemento.classList.add("borda");

if (check !== null){
    check.classList.remove("ok")
}
elemento.querySelector(".verificado").classList.add("ok");


console.log(elemento)
}

function selecionarcoca(elemento){
    
    const cocacheck = document.querySelector (".bebidalinha .borda")
    const check = document.querySelector(".bebidalinha .ok ")
console.log(elemento)

if (cocacheck !==null) {
    cocacheck.classList.remove ("borda")
}
elemento.classList.add("borda")

if (check !== null){
    check.classList.remove ("ok")
}
elemento.querySelector (".verificado").classList.add("ok");



}

function selecionarpudim(elemento){
    pegarpudim = elemento.innerHTML;
    const pudimcheck = document.querySelector (".sobremesalinha .borda")
    const check = document.querySelector(".sobremesalinha .ok ")

if (pudimcheck !==null) {
    pudimcheck.classList.remove ("borda")
}
elemento.classList.add("borda")

if (check !== null){
    check.classList.remove ("ok")
}
elemento.querySelector (".verificado").classList.add("ok");

}

function linkwhats(){

    let confirmafrango = document.querySelector('.comidalinha .borda');
    let confirmacoca = document.querySelector('.bebidalinha .borda');
    let confirmapudim = document.querySelector('.sobremesalinha .borda');

    if(confirmafrango && confirmacoca && confirmapudim){

        const frangobox = confirmafrango.querySelector('.item')
        const cocabox = confirmacoca.querySelector('.item')
        const pudimbox  = confirmapudim.querySelector('.item')

        const frangoprecobox = confirmafrango.querySelector('.preco')
        const cocaprecobox = confirmacoca.querySelector ('.preco')
        const pudimprecobox = confirmapudim.querySelector ('.preco')
  
        const frango = frangobox.innerText
        const coca = cocabox.innerText
        const pudim = pudimbox.innerText

        const frangoprecotxt = frangoprecobox.innerText
        const cocaprecotxt = cocaprecobox.innerText
        const pudimprecotxt = pudimprecobox.innerText

        const frangopreco = parseFloat(frangoprecotxt)
         const cocapreco = parseFloat(cocaprecotxt)
         const pudimpreco = parseFloat(pudimpreco)

         const total = frangopreco + cocapreco + pudimpreco



         let textodecompra = `
         Olá, gostaria de fazer o pedido:
         - Prato: ${frango}
          - Bebida: ${coca}
         - Sobremesa: ${pudim}
         Total: R$ ${total.toFixed(2)}`

          const link = textodecompra;
         const encodedlink = encodeURIComponent(link, "_blank");
         const allLink = "https://wa.me/5547997084660?text=" + `${encodedlink}`

         openLink(allLink) }
        }

function openLink (element) {window.open(element);
}

