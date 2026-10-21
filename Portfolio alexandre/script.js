console.log("js conectado!")
const botaoTema = document.getElementById("btn-tema");
function alternartema() {
    document.body.classList.toggle("escuro");
}
botaoTema.addEventListener("click",alternartema);
const trilho = document.getElementById("trilho-projetos");
const btnanterior = document.getElementById("btn-anterior")
const btnproximo = document.getElementById("btn-proximo")

function rolardireita () {
    trilho.scrollBy({ left: -320,behavior: "smooth"})
}

function rolaresquerda() {
    trilho.scrollBy({left:320, behavior:"smooth"})
}

btnproximo.addEventListener
btnanterior.addEventListener







function animarbarras   () {
    Document.queryselectorall(".nivel").forEach((barra) => { barra.style.width = barra.dataset.nivel ="%";
    });
}

const secaoskills = document.getElementById("skills")

const observadorskills = new IntersectionObserver(
(entradas, observador) => {
entradas.forEach((entrada) => {
    if (entrada.isIntersecting){
        animarbarras();
        observador.unobserve(entrada.target)
    }
});
},

     {threshold: 0.25}
);

observadorskills.observe(secaoskills);
const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const retornoFormulario = document.getElementById("retorno-formulario");


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();


  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const mensagem = campoMensagem.value.trim();


  if (!nome || !email || !mensagem) {
    retornoFormulario.textContent =
      "Preencha todos os campos antes de enviar.";
    return;
  }


  retornoFormulario.textContent =
    `Obrigado, ${nome}! Sua mensagem foi registrada nesta demonstração.`;


  formulario.reset();
});


