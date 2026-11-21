var exp = "", COR = "linear-gradient(gray, black)", ATIVA = "linear-gradient(red, black)";

function atualizarDisplay() {
  var d = document.getElementById("display");
  if (d.value !== undefined) d.value = exp; else d.textContent = exp;
}

function pressed(v) { exp += v; atualizarDisplay(); }
function clearAll() { exp = ""; atualizarDisplay(); }
function backspace() { exp = exp.slice(0, -1); atualizarDisplay(); }

function calculate() {
  if (exp === "") return;
  try { exp = String(eval(exp)); }
  catch (e) { exp = ""; return mostrarErro(); }
  if (exp === "Infinity" || exp === "-Infinity" || exp === "NaN") { exp = ""; return mostrarErro(); }
  atualizarDisplay();
}

function mostrarErro() {
  var d = document.getElementById("display");
  if (d.value !== undefined) d.value = "Erro"; else d.textContent = "Erro";
}

function acender(b) { if (b) b.style.backgroundImage = ATIVA; }
function apagar(b) { if (b) b.style.backgroundImage = COR; }

function acharBotao(t) {
  var b = document.querySelectorAll(".btn");
  for (var i = 0; i < b.length; i++) if (b[i].textContent.trim() === t) return b[i];
  return null;
}

function botaoDaTecla(t) {
  if (t === "Backspace") return acharBotao("<");
  if (t === "Enter") return acharBotao("=");
  if (t === "Escape") return acharBotao("C");
  return acharBotao(t);
}

function iniciar() {
  var b = document.querySelectorAll(".btn");
  for (var i = 0; i < b.length; i++) (function (x) {
    x.addEventListener("mousedown", function () { acender(x); });
    x.addEventListener("mouseup", function () { apagar(x); });
    x.addEventListener("mouseleave", function () { apagar(x); });
  })(b[i]);

  document.addEventListener("keydown", function (e) {
    if (e.repeat) return;
    acender(botaoDaTecla(e.key));
    if ((e.key >= "0" && e.key <= "9") || e.key === "." || "+-*/".indexOf(e.key) > -1) pressed(e.key);
    else if (e.key === "Backspace") { e.preventDefault(); backspace(); }
    else if (e.key === "Enter") { e.preventDefault(); calculate(); }
    else if (e.key === "Escape") clearAll();
  });

  document.addEventListener("keyup", function (e) { apagar(botaoDaTecla(e.key)); });
  atualizarDisplay();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
else iniciar();