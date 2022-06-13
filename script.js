

function selecionarItem(elemento, classe) {
    const itemcheck = document.querySelector (`.${classe} .borda`)
    const check = document.querySelector(`.${classe} .ok`)

if (itemcheck !==null) {
    itemcheck.classList.remove ("borda")
}
elemento.classList.add("borda")

if (check !== null){
    check.classList.remove ("ok")
}
elemento.querySelector (".verificado").classList.add("ok");

let confirmafrango = document.querySelector('.comidalinha .borda');
let confirmacoca = document.querySelector('.bebidalinha .borda');
let confirmapudim = document.querySelector('.sobremesalinha .borda');

if (confirmafrango !== null && confirmacoca !== null && confirmapudim !== null){
 const habilitado = document.getElementsByTagName("button")[0] .classList.add("habilitado")
}  
 

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
         const pudimpreco = parseFloat(pudimprecotxt)

         const total = frangopreco + cocapreco + pudimpreco

console.log(frangoprecotxt, cocaprecotxt, pudimprecotxt)

         let textodecompra = `
         Olá, gostaria de fazer o pedido:
         - Prato: ${frango}-${frangoprecotxt}
          - Bebida: ${coca}-${cocaprecotxt}
         - Sobremesa: ${pudim}-${pudimprecotxt}
         Total: R$ ${total.toFixed(2)}`

          const link = textodecompra;
         const encodedlink = encodeURIComponent(link, "_blank");
         const allLink = "https://wa.me/5511991484522?text=" + `${encodedlink}`
console.log(allLink)
         openLink(allLink) }
        }

    
function openLink (element) {window.open(element);
}

