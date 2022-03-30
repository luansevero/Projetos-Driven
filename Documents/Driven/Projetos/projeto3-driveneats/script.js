//Icone

//Armazenamento do Pedido
let prato = "";
let valorprato = 0;
let bebida = "";
let valorbebida = 0;
let sobremesa = "";
let valorsobremesa = 0;
//Alerta para pedido fora de ordem!
let alertaprato = "";
let alertabebida = "";
//Sistema para desselecionar e para mudança do texto do botão!
let systemprato = 0;
let systembebida = 0;
let systemsobremesa = 0;
//Arrays com Nome e Valores dos Pratos!
let arraypratos = ["", "", ""];
let arrayvalorespratos = ["", "", ""];
var quantidadepratos = document.querySelectorAll("div.prato");
//Finalizar Pedido
let botaoverde = document.getElementById('botão')
let botaotexto = document.getElementById('botão-texto')

function seletorPrato(nprato){
    if(systemprato == nprato){
        botaotexto.innerHTML = `Selecione os 3 itens para fechar o pedido`
        document.getElementById(`prato-${nprato}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`selecionado-prato-${nprato}`).style.display = "none"
        systemprato = 0
        prato = ""
        valorprato = 0
        document.getElementById(`bebida-${systembebida}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`selecionado-bebida-${systembebida}`).style.display = "none"
        systembebida = 0
        document.getElementById(`sobremesa-${systemsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`selecionado-sobremesa-${systemsobremesa}`).style.display = "none"
        systemsobremesa = 0
        botaoverde.style.backgroundColor = "#CBCBCB";
    } else {
        systemprato = nprato
        valorprato = arrayvalorespratos[nprato - 1]
        prato = arraypratos[nprato - 1]
        for(let i = 1; i <= quantidadepratos.length; i++){
            if( i != nprato){
                    document.getElementById(`prato-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
                    document.getElementById(`selecionado-prato-${i}`).style.display = "none"  
            } else {
                    document.getElementById(`prato-${nprato}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
                    document.getElementById(`selecionado-prato-${i}`).style.display = "flex"  
            }
        }
        botaotexto.innerHTML = `Selecione mais 2 itens para fechar o pedido`
    }
}

let arraybebidas = ["", "", ""]
let arrayvaloresbebidas = ["", "", ""]
var quantidadebebidas = document.querySelectorAll("div.bebida");
function seletorBebida(nbebida){
    if(systemprato <= 0){
        alert(`Selecione um Prato antes`)
    } else if(systembebida == nbebida){
        botaotexto.innerHTML = `Selecione mais 2 itens para fechar o pedido` 
        document.getElementById(`bebida-${nbebida}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`selecionado-bebida-${nbebida}`).style.display = "none"
        systembebida = 0
        bebida = ""
        valorbebida = 0
        document.getElementById(`sobremesa-${systemsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`selecionado-sobremesa-${systemsobremesa}`).style.display = "none"
        systemsobremesa = 0
        botaoverde.style.backgroundColor = "#CBCBCB";
    } else {
        systembebida = nbebida
        valorbebida = arrayvaloresbebidas[nbebida - 1]
        bebida = arraybebidas[nbebida - 1]
        for(let i = 1; i <= quantidadebebidas.length; i++){
            if( i != nbebida){
                    document.getElementById(`bebida-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040"; 
                    document.getElementById(`selecionado-bebida-${i}`).style.display = "none"
            } else {
                    document.getElementById(`bebida-${nbebida}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
                    document.getElementById(`selecionado-bebida-${i}`).style.display = "flex"   
            }
        }
        botaotexto.innerHTML = `Selecione mais 1 item para fechar o pedido` 
    }
}

let arraysobremesas = ["", "", ""]
let arrayvaloressobremesas = ["", "", ""]
var quantidadesobremesas = document.querySelectorAll("div.sobremesa");
function seletorSobremesa(nsobremesa){
    if(systemprato <= 0 && systembebida <= 0){
        alert(`Selecione um Prato e uma Bebida antes`)
    }
    else if(systembebida <= 0){
        alert(`Selecione uma Bebida antes`)
    } else {
        if(systemsobremesa == nsobremesa){
            document.getElementById(`sobremesa-${nsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
            document.getElementById(`selecionado-sobremesa-${nsobremesa}`).style.display = "none"
            systemsobremesa = 0
            sobremesa = ""
            valorsobremesa = 0
            botaoverde.style.backgroundColor = "#CBCBCB";
            botaotexto.innerHTML = `Selecione mais 1 item para fechar o pedido` 
        } else {
            systemsobremesa = nsobremesa
            valorsobremesa = arrayvaloressobremesas[nsobremesa - 1]
            sobremesa = arraysobremesas[nsobremesa - 1]
            for(let i = 1; i <= quantidadesobremesas.length; i++){
                if( i != nsobremesa){
                        document.getElementById(`sobremesa-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
                        document.getElementById(`selecionado-sobremesa-${i}`).style.display = "none"
                } else {
                        document.getElementById(`sobremesa-${nsobremesa}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
                        document.getElementById(`selecionado-sobremesa-${i}`).style.display = "flex"    
                }
            }
            botaoverde.style.backgroundColor = "green";
            botaotexto.innerHTML = `Finalizar Pedido` 
        }
    }
}

function finalizarPedido(){
    if(botaoverde.style.backgroundColor == "green"){
        
    }
}