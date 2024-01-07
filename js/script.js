//Troca de tema

function trocarTema() {
  let body = document.body;

  if (body.classList.contains("theme-light")) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  }
}


//cadastro

var formEntrar = document.querySelector("#entrar");
var formCadastro = document.querySelector("#cadastro");
var btnColor = document.querySelector(".btnColor");
var urlCompleta = window.location.href;
if (urlCompleta.indexOf("login") != -1) {
  document.querySelector("#btnEntrar").addEventListener("click", () => {
    formEntrar.style.left = "25px";
    formCadastro.style.left = "450px";
    btnColor.style.left = "0px";
  });

  document.querySelector("#btnCadastro").addEventListener("click", () => {
    formEntrar.style.left = "-450px";
    formCadastro.style.left = "25px";
    btnColor.style.left = "110px";
  });
}

//carrocel

window.onload = function () {

  let iconMenu  = document.getElementById("iconMenu");
  let menu2Id   = document.getElementById("menu2Id");
  let closeMenu = document.getElementById("closeMenu");
  iconMenu.onclick = function(){
    menu2Id.style.left = "0%";
    menu2Id.style.opacity = "1";
  }
  closeMenu.onclick = function(){
    menu2Id.style.left = "-100%";
    menu2Id.style.opacity = "0";
  }

  let btnAvancar = document.getElementById("avancar");
  let btnVoltar = document.getElementById("voltar");
  let container = document.getElementById("container");
  let imgs = document.querySelectorAll("#container img");

  imgs.forEach((element) => {
    if (element.hasAttribute("data-link")) {
      element.style.cursor = "pointer";
      element.onclick = function () {
        window.open(element.dataset.link, "_blank");
      };
    }
  });

  btnAvancar.addEventListener("click", () => {
    btnAvancar.disabled = true;
    btnVoltar.disabled = true;
    imgs = document.querySelectorAll("#container img");
    container.insertBefore(imgs.item(imgs.length - 1), container.firstChild);
    for (img of imgs) {
      img.style.transition = "0ms";
      img.style.left = "-250px";
    }
    setTimeout(() => {
      for (img of imgs) {
        img.style.transition = "250ms";
        img.style.left = "0px";
      }
      btnAvancar.disabled = false;
      btnVoltar.disabled = false;
    }, 100);
  });
  btnVoltar.addEventListener("click", () => {
    btnAvancar.disabled = true;
    btnVoltar.disabled = true;

    for (img of imgs) {
      img.style.transition = "250ms";
      img.style.left = "-250px";
    }
    imgs = document.querySelectorAll("#container img");

    setTimeout(() => {
      container.appendChild(imgs.item(0));

      for (img of imgs) {
        img.style.transition = "0ms";
        img.style.left = "0px";
      }
      btnAvancar.disabled = false;
      btnVoltar.disabled = false;
    }, 250);
  });
};

