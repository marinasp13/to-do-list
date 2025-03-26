const modal = document.querySelector("dialog");
const fecharModalBtn = document.querySelector("#dialog-img-fechar");
const inputNomeEdicao = document.querySelector("#item-nome-edicao");
const inputDescricaoEdicao = document.querySelector("#item-descricao-edicao");
const salvarAlteracoesBtn = document.querySelector("#dialog-btn-salvar");
const mainElement= document.querySelector("#main");
//variaveis que armazenam o Id no elemento "p" do nome e da descricao do item que foi clicado
let nomeAntigo;
let descricaoAntiga;

// no click no icone de edicao, essa funcao é executada:
export function abrirModal (evento){
    const idEditar = evento.target.id;
    const identificadorItem = idEditar.slice(7);
    const idNome = `#itemNome-${identificadorItem}`;
    const idDescricao = `#itemDescricao-${identificadorItem}`;

    modal.style.display="flex";
    mainElement.style.opacity = "0.1";
    inputNomeEdicao.focus();
    inputNomeEdicao.value = document.querySelector(idNome).innerText;
    inputDescricaoEdicao.value = document.querySelector(idDescricao).innerText;
    nomeAntigo = idNome;
    descricaoAntiga = idDescricao;
}

salvarAlteracoesBtn.addEventListener("click", salvarAlteracoes);
function salvarAlteracoes(){
    const novoNome = inputNomeEdicao.value;
    const novaDescricao = inputDescricaoEdicao.value;

    if(novoNome !== null && novoNome.trim() !== ""){
        document.querySelector(nomeAntigo).innerText = novoNome;
        document.querySelector(descricaoAntiga).innerText = novaDescricao;
    }
    
    fecharModal();
}

function fecharModal(){
    inputNomeEdicao.value = "";
    modal.style.display="none";
    mainElement.style.opacity = "1";
}

fecharModalBtn.addEventListener("click", fecharModal);