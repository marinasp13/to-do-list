import { deletar } from "./deletar.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { itensFinalizados} from "./script.js";
import { abrirModal } from "./edicao.js";
import { progresso } from "./barraProgresso.js";


const listaItensPendentes = document.querySelector("#lista-de-itens-pendentes");
const listaDeItensFinalizados = document.querySelector("#lista-de-itens-finalizados");
const listaDeItensFinalizadosDiv = document.querySelector("#lista-de-itens-finalizados-container");
let contador = 0;
let contadorId = 0;
let contadorEditar = 0;
let contadorIdNome = 0;
let contadorIdDescricao = 0;

 export function criarItem(itemNomeInput, itemDescricaoInput){
    const item = document.createElement("li");
    item.classList.add("item-container");
    item.id = "item-" + contadorId++;

    const itemConteudo = document.createElement("div");
    itemConteudo.classList.add("item-conteudo");

    const botaoCheckbox = document.createElement("button");
    botaoCheckbox.classList.add("item-btn-checkbox");
    
    const imgCheckbox = document.createElement("img");
    imgCheckbox.classList.add("item-img-checkbox");
    imgCheckbox.id="checkbox-" + contador++;
    imgCheckbox.src = "assets/checkbox.png";
    imgCheckbox.alt = "Ícone de checkbox";

    imgCheckbox.addEventListener("click", function(evento){
        const itemTitulo = evento.target.closest("li").querySelector(".item-nome");     
        
        if(evento.target.src.includes("checkbox")){
            imgCheckbox.src = "assets/checked.png";
            itemNome.style.textDecoration = "line-through";
            itemNome.style.textDecorationThickness = "2px";
            itemBotoes.style.display = "none";
            listaDeItensFinalizados.appendChild(item);
            itensFinalizados.push(item);
            listaDeItensFinalizadosDiv.style.display="block";
            progresso();
        }else {
            imgCheckbox.src = "assets/checkbox.png";
            itemNome.style.textDecoration = "none";
            itemBotoes.style.display = "flex";
            listaItensPendentes.appendChild(item);
            if(listaDeItensFinalizados.childElementCount === 0){
                listaDeItensFinalizadosDiv.style.display="none";  
            }
            itensFinalizados.splice(item.id, 1);
            progresso();
        }
        verificarListaVazia(listaItensPendentes);
    })

    const textItemContainer = document.createElement("div");
    textItemContainer.classList.add("item-text-container");
    
    const itemNome = document.createElement("p");
    itemNome.classList.add("item-nome");
    itemNome.id = "itemNome-"+ contadorIdNome++;
    itemNome.innerText= itemNomeInput;
    
    const itemDescricao = document.createElement("p");
    itemDescricao.classList.add("item-descricao");
    itemDescricao.id = "itemDescricao-"+ contadorIdDescricao++;
    itemDescricao.innerText= itemDescricaoInput;

    const itemBotoes = document.createElement("div");
    itemBotoes.classList.add("item-botoes");
    
    const itemBtnEditar = document.createElement("button");
    itemBtnEditar.classList.add("item-btn-editar");
    
    const itemImgEditar = document.createElement("img");
    itemImgEditar.classList.add("item-img-editar")
    itemImgEditar.src = "assets/editar.png";
    itemImgEditar.alt = "Ícone de edição";
    itemImgEditar.id ="editar-" + contadorEditar++;

    itemImgEditar.addEventListener("click", abrirModal);
    
    const itemBtnDeletar = document.createElement("button");
    itemBtnDeletar.classList.add("item-btn-deletar");
    
    const itemImgDeletar = document.createElement("img");
    itemImgDeletar.classList.add("item-img-deletar");
    itemImgDeletar.src = "assets/deletar.png";
    itemImgDeletar.alt = "Ícone de deletar";

    itemImgDeletar.addEventListener("click", deletar);

    itemBtnDeletar.appendChild(itemImgDeletar);
    itemBtnEditar.appendChild(itemImgEditar);
    itemBotoes.appendChild(itemBtnEditar);
    itemBotoes.appendChild(itemBtnDeletar);
    textItemContainer.appendChild(itemNome);
    textItemContainer.appendChild(itemDescricao);
    botaoCheckbox.appendChild(imgCheckbox);
    itemConteudo.appendChild(botaoCheckbox);
    itemConteudo.appendChild(textItemContainer);
    item.appendChild(itemConteudo);
    item.appendChild(itemBotoes);

    

    return item;

}