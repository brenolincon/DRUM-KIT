"use strict";

const sons = {
  A: "tom-high.wav",
  S: "2_kick.wav",
  D: "hihat-close.wav",
  F: "kick.wav",
  G: "hihat-open.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tom-mid.wav",
  L: "tom-low.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("tecla");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("conteudo").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(`./sons/${sons[letra]}`);
  audio.play();
};
const ativarDiv = (evento) => {
  let letra = '';
  if (evento.type == 'click') {
    letra = evento.target.id;
  }else {
    letra = evento.key.toUpperCase();
  }
  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    tocarSom(letra);
  }
};

exibir(sons);
document.getElementById("conteudo").addEventListener("click", ativarDiv);

window.addEventListener('keydown', ativarDiv)
