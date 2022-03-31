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
//Botao ficar Verde
let confirmprato = 0
let confirmbebida = 0
let confirmsobremesa = 0
//Finalizar Pedido
let botaoverde = document.getElementById('botão');
let botaotexto = document.getElementById('botão-texto');
let somadosvalores = 0


// Seletor do Prato
let arraypratos = ["Frango Yin Yang", "Executivo - Carne", "Executivo - Frango", "Strogonoff", "Feijoada"];
let arrayvalorespratos = ["14.90", "18.90", "16.90", "22.90", "14.90"];
var quantidadepratos = document.querySelectorAll("div.prato");
function seletorPrato(nprato){
    systemprato = nprato
    valorprato = Number(arrayvalorespratos[nprato - 1])
    prato = arraypratos[nprato - 1]
    for(let i = 1; i <= quantidadepratos.length; i++){
            if( i != nprato){
                document.getElementById(`prato-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
                document.getElementById(`selecionado-prato-${i}`).style.display = "none"  
        } else {
                document.getElementById(`prato-${nprato}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
                document.getElementById(`selecionado-prato-${i}`).style.display = "flex" 
                confirmprato = 1
        }
    }
    if(confirmprato == 1 && confirmbebida == 1 && confirmsobremesa == 1){
        botaoverde.style.backgroundColor = "green";
        botaotexto.innerHTML = `Finalizar pedido`   
    }
}
//Seletor das Bebidas
let arraybebidas = ["Coca-Cola", "Água", "Matte-Leâo", "H20H!", "Dolly Guaraná"]
let arrayvaloresbebidas = ["5.90", "2.90", "4.90", "5.90", "8.90"]
var quantidadebebidas = document.querySelectorAll("div.bebida");
function seletorBebida(nbebida){
    systembebida = nbebida
    valorbebida = Number(arrayvaloresbebidas[nbebida - 1])
    bebida = arraybebidas[nbebida - 1]
    for(let i = 1; i <= quantidadebebidas.length; i++){
        if( i != nbebida){
            document.getElementById(`bebida-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040"; 
            document.getElementById(`selecionado-bebida-${i}`).style.display = "none"
        } else {
            document.getElementById(`bebida-${nbebida}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
            document.getElementById(`selecionado-bebida-${i}`).style.display = "flex"
            confirmbebida = 1
        }
    }
    if(confirmprato == 1 && confirmbebida == 1 && confirmsobremesa == 1){
        botaoverde.style.backgroundColor = "green";
        botaotexto.innerHTML = `Finalizar pedido`   
    }
}
//Seletor das Sobremesas
let arraysobremesas = ["Pudim", "Torta de Limão", "Mousse de Maracujá", "Brownie"]
let arrayvaloressobremesas = ["7.90", "9.90", "11.90", "6.90"]
var quantidadesobremesas = document.querySelectorAll("div.sobremesa");
function seletorSobremesa(nsobremesa){
    systemsobremesa = nsobremesa
    valorsobremesa = Number(arrayvaloressobremesas[nsobremesa - 1])
    sobremesa = arraysobremesas[nsobremesa - 1]
    for(let i = 1; i <= quantidadesobremesas.length; i++){
        if( i != nsobremesa){
            document.getElementById(`sobremesa-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
            document.getElementById(`selecionado-sobremesa-${i}`).style.display = "none"
        } else {
            document.getElementById(`sobremesa-${nsobremesa}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
            document.getElementById(`selecionado-sobremesa-${i}`).style.display = "flex" 
            confirmsobremesa = 1
        }
    }
    if(confirmprato == 1 && confirmbebida == 1 && confirmsobremesa == 1){
        botaoverde.style.backgroundColor = "green";
        botaotexto.innerHTML = `Finalizar pedido`   
    }
}

if(confirmprato == 1 && confirmbebida == 1 && confirmsobremesa == 1){
    alert(`oi`)
}
/*Chields do Pedido*/
let pratoPedido = document.getElementById("prato-pedido")
let bebidaPedida = document.getElementById("bebida-pedida") 
let sobremesaPedida = document.getElementById("sobremesa-pedida")
let pratoPedidoValor = document.getElementById(`prato-pedido-valor`)
let bebidaPedidaValor = document.getElementById(`bebida-pedida-valor`)
let sobremePedidaValor = document.getElementById(`sobremesa-pedida-valor`)
let subtotal = document.getElementById("subtotal")
let total = 0
function finalizarPedido(){
    if(botaoverde.style.backgroundColor == "green"){
        document.getElementById(`pedidofinalizado`).style.display = 'flex'
        pratoPedido.innerHTML = prato
        pratoPedidoValor.innerHTML = valorprato.toFixed(2)
        bebidaPedida.innerHTML = bebida
        bebidaPedidaValor.innerHTML = valorbebida.toFixed(2)
        sobremesaPedida.innerHTML = sobremesa
        sobremePedidaValor.innerHTML = valorsobremesa.toFixed(2)
        total = `R$ ${(valorprato + valorsobremesa + valorbebida).toFixed(2)}`
        subtotal.innerHTML = total
    }
}
function pedidoFinalizado(){
    let nome = prompt(`Qual o seu nome?`);
    let endereço = prompt(`${nome}, qual o seu endereço?`);
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: ${total}\n\nNome: ${nome}\nEndereço: ${endereço}`
    mensagem = window.encodeURIComponent(mensagem);
    window.open(`https://wa.me/5521969592572?text=${mensagem}`);
}
function cancelar(){
    document.getElementById(`pedidofinalizado`).style.display = 'none';
}
