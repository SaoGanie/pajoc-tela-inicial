// Obter os modais
var modalRegras = document.getElementById("myModal");
var modalCreditos = document.getElementById("myModal2");
var modalVersao = document.getElementById("myModal123");

// Obter os botões
var btnRegras = document.getElementById("regras");
var btnCreditos = document.getElementById("creditos");
var btnJogar = document.getElementById("jogar");
var btnVersao = document.getElementById("versao");

// Obter os elementos <span> que fecham os modais
var spanRegras = document.getElementsByClassName("close")[0];
var spanCreditos = document.getElementsByClassName("close2")[0];
var spanVersao = document.getElementsByClassName("close3")[0];

// Quando o usuário clicar no botão "Regras", abre o modal 
btnRegras.onclick = function() {
    modalRegras.style.display = "block";
}

// Quando o usuário clicar no botão "Créditos", abre o modal 
btnCreditos.onclick = function() {
    modalCreditos.style.display = "block";
}
// Quando o usuário clicar no botão "Créditos", abre o modal 
btnVersao.onclick = function() {
    modalVersao.style.display = "block";
}

// Quando o usuário clicar no botão "Iniciar Jogo", redireciona para a página do jogo
btnJogar.onclick = function() {
    window.location.href = "https://saoganie.github.io/pajoc/";
}

// Quando o usuário clicar no <span> (x), fecha o modal "Regras"
spanRegras.onclick = function() {
    modalRegras.style.display = "none";
}

// Quando o usuário clicar no <span> (x), fecha o modal "Créditos"
spanCreditos.onclick = function() {
    modalCreditos.style.display = "none";
}
spanVersao.onclick = function() {
    modalVersao.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal "Regras"
window.onclick = function(event) {
    if (event.target == modalRegras) {
        modalRegras.style.display = "none";
    }
    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal "Créditos"
    if (event.target == modalCreditos) {
        modalCreditos.style.display = "none";
    }
  
  if (event.target == modalVersao) {
        modalVersao.style.display = "none";
    }
}
