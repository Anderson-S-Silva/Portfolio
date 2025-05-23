function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((Letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += Letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".digitando");
  ativaLetra(titulo);
}

escrevendoLetra();

function meunuMobol() {
  function ativacaoMenu() {
  const ativaMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("header .navegacao-primaria");

  ativaMenu.addEventListener("click", () => {
    ativaMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("ativado");
  });
}

ativacaoMenu();

}
meunuMobol();

function sobreMim() {
  const divexperiencia = document.querySelectorAll(".experiencia_content div");
  const liexperiencia = document.querySelectorAll(".experiencia_content ul li");
  const diveducacao = document.querySelectorAll(".educacao_content div");
  const lieducacao = document.querySelectorAll(".educacao_content ul li");

  divexperiencia[0].classList.add("ativo");
  diveducacao[0].classList.add("ativo");
  liexperiencia[0].classList.add("ativo");
  lieducacao[0].classList.add("ativo");

  function slideShow(index) {
    divexperiencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    liexperiencia.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    divexperiencia[index].classList.add("ativo");
    liexperiencia[index].classList.add("ativo");
  }
  function slideShow2(index) {
    diveducacao.forEach((div) => {
      div.classList.remove("ativo");
    });
    lieducacao.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    diveducacao[index].classList.add("ativo");
    lieducacao[index].classList.add("ativo");
  }

  liexperiencia.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  lieducacao.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}
sobreMim();


const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.active');
    });
    buttomGeral[index].classList.add('.active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'front'){
        list[0].classList.add('active');
        list[1].classList.add('active');
    }
    if(buttom == 'back'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(buttom == 'ads'){
        list[4].classList.add('active');
        list[5].classList.add('active');
    }
    if(buttom == 'aut'){
        list[6].classList.add('active');
        list[7].classList.add('active');

    }
    if(buttom == 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('front')){
            showList(listAll, "front")
        }
        if(currentButtom.classList.contains('back')){
            showList(listAll, "back")
        }
        if(currentButtom.classList.contains('ads')){
            showList(listAll, "ads")
        }
        if(currentButtom.classList.contains('aut')){
            showList(listAll, "aut")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
    })
})