//Nome dos Itens
const confirmItem = document.querySelectorAll(`.main-left > .item-select-name`)
//Preço dos Itens
const confirmPrice = document.querySelectorAll(`.main-right > .item-select-price`)
const total = document.querySelector(`.subtotal`)
//Saber se está selecionado
let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
//Dados do botão (Footer)
const button = document.querySelector(".order-button");
const buttonText = document.querySelector(".button-text");
//Dados da Confirmação do Pedido
const confirmscreen = document.querySelector(`.pedidofinalizado`)
//Selecionar elementos
function select(element){
    const itemtype = element.classList[0]
    const allitems = document.querySelectorAll(`.${itemtype}`)
    const price = element.querySelector(".preço").innerHTML.replace("R$ ", "").replace(",", ".")
    const itemName = element.querySelector(".nome-produto").innerHTML
    for(let i = 0; i < allitems.length; i++){ 
        if(allitems[i].classList.contains("selected")){
            allitems[i].classList.remove("selected")
            allitems[i].querySelector(`.icone-selecionado`).classList.remove("selected-icon")
        }
    }
    element.querySelector(".icone-selecionado").classList.add("selected-icon")
    element.classList.add("selected")
    if(itemtype == "prato"){
        confirmItem[0].innerHTML = itemName 
        confirmPrice[0].innerHTML = Number(price).toFixed(2)
        pratoSelecionado = true
        orderDone()
    } else if (itemtype == "bebida"){
        confirmItem[1].innerHTML = itemName
        confirmPrice[1].innerHTML = Number(price).toFixed(2)
        bebidaSelecionada = true
        orderDone()
    } else {
        confirmItem[2].innerHTML = itemName
        confirmPrice[2].innerHTML = Number(price).toFixed(2)
        sobremesaSelecionada = true
        orderDone()
    }
}
//Função para mudar a cor do botão e texto!
function orderDone(){
    if(pratoSelecionado && bebidaSelecionada && sobremesaSelecionada){
        button.style.backgroundColor = "green";
        buttonText.innerHTML = "Finalizar Pedido"
        total.innerHTML = `R$ ${(Number(confirmPrice[0].innerHTML) + Number(confirmPrice[1].innerHTML) + Number(confirmPrice[2].innerHTML)).toFixed(2)}`
    }
}
//Função para aparecer a tela de confirmação do pedido!(bônus do Projeto)
function finalizarPedido(){
    if(button.style.backgroundColor == "green"){
        confirmscreen.style.display = "flex";
    }
}
//Função para ir para o ZAPZAP e terminar o Pedido
function pedidoFinalizado(){
    const name = prompt(`Qual é o seu nome?`)
    const adress = prompt(`Qual o endereço da entrega?`)
    let msg = `Olá, gostaria de fazer o pedido:\n- Prato: ${confirmItem[0].innerHTML}\n- Bebida: ${confirmItem[1].innerHTML}\n- Sobremesa: ${confirmItem[2].innerHTML}\nTotal: ${total.innerHTML}\n\nNome: ${name}\nEndereço: ${adress}`
    mensagem = window.encodeURIComponent(msg);
    window.open(`https://wa.me/5521969592572?text=${msg}`);
}
//Função para cancelar a compra!(bônus do Projeto)
function cancelar(){
    confirmscreen.style.display = "none";
}