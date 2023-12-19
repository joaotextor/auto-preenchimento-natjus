// Get components

if (!storage) {
  var storage = chrome.storage.sync;
}

if (!config) {
  var config = {};
}

config = {
  urgente: true,
  requerido: "UNIÃO FEDERAL e OUTROS",
  prazo: "5",
  emailResposta: "rsere01@jfrs.jus.br",
  esfera: "2",
  plantao: "2",
  vara: "1ª Vara Federal de Erechim",
  motivo: "Negativa administrativa. Medicamento não padronizado no SUS.",
};

let inputRequerido;
let inputPrazo;
let inputEmail;
let inputVara;
let inputMotivo;
let buttonSalvar;

// Load values from LocalStorage
let defaultConfig;
storage.get("natjusAutoFill").then((data) => {
  defaultConfig = data.natjusAutoFill;
  if (defaultConfig) {
    selectComponents();
    fillConfigForm();
  }
});

function selectComponents() {
  inputRequerido = document.querySelector("#textRequerido");
  inputPrazo = document.querySelector("#textPrazo");
  inputEmail = document.querySelector("#textEmail");
  inputVara = document.querySelector("#textVara");
  inputMotivo = document.querySelector("#textMotivo");
  buttonSalvar = document.querySelector("#buttonSalvar");
  buttonResetar = document.querySelector("#buttonResetar");
}

function fillConfigForm() {
  if (!inputRequerido) return;
  inputRequerido.value = defaultConfig.requerido || "";
  inputPrazo.value = defaultConfig.prazo || "";
  inputEmail.value = defaultConfig.emailResposta || "";
  inputVara.value = defaultConfig.vara || "";
  inputMotivo.value = defaultConfig.motivo;
  buttonSalvar.addEventListener("click", (e) => {
    e.preventDefault;
    saveConfig();
  });
  buttonResetar.addEventListener("click", (e) => {
    e.preventDefault;
    resetConfig();
  });
}

function saveConfig() {
  const newConfig = {
    requerido: inputRequerido.value,
    prazo: inputPrazo.value,
    emailResposta: inputEmail.value,
    vara: inputVara.value,
    motivo: inputMotivo.value,
    urgente: true,
    esfera: "2",
    plantao: "2",
  };
  defaultConfig = newConfig;
  storage.set({ natjusAutoFill: defaultConfig });
}

function resetConfig() {
  storage.set({ natjusAutoFill: config });
}
