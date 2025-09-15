import { PALAVRAS_RUINS } from "./palavrasRuins2.js";

const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
  alert("fui clicado!"); 
} 