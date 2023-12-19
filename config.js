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

storage.get("natjusAutoFill").then((data) => {
  const newConfig = data.natjusAutoFill;
  if (!newConfig) {
    return setStorageData();
  }
  config = newConfig;
  console.log(`Configuração carregada: ${JSON.stringify(config)}`);
});

function setStorageData() {
  storage.set({ natjusAutoFill: config });
  console.log(`Configuração salva: ${JSON.stringify(config)}`);
  return;
}
