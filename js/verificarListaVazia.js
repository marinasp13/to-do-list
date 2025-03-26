const mensagem = document.querySelector("#mensagem-lista-vazia");

export function verificarListaVazia (lista){
    if(lista.childElementCount === 0){
        mensagem.style.display = "block";
    } else{
        mensagem.style.display = "none";
    }
}