"use strict";

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
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
  const audio = new Audio(`./sounds/${sons[letra]}`);
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
