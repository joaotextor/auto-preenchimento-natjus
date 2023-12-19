setInterval(createComponent, 1000);

function createComponent() {
  if (document.querySelector(".auto-fill-natjus")) return;
  const buttonLocation = document.querySelector(".alert.alert-warning");
  if (buttonLocation) {
    const button = document.createElement("button");
    const urgente = document.querySelector("#urgente_1");
    const requerido = document.querySelector("#txtRequerido");
    const prazo = document.querySelector("#txtPrazoResposta");
    const emailResposta = document.querySelector("#txtEmailNotificacao");
    const esfera = document.querySelector("#selEsfera");
    const plantao = document.querySelector("#selPlantao");
    const vara = document.querySelector("#txtServentia");
    const motivo = document.querySelector("#txaMotivoJudicializacao");

    button.classList.add("auto-fill-natjus");
    buttonLocation.insertAdjacentElement("afterend", button);
    button.innerText = "Auto-Preencher Nota Técnica";
    button.type = "button";

    button.addEventListener("click", (e) => {
      e.preventDefault;
      storage.get("natjusAutoFill").then((data) => {
        defaultConfig = data.natjusAutoFill;
        fillNatjus();
      });
    });

    function fillNatjus() {
      urgente.checked = defaultConfig.urgente;
      requerido.value = defaultConfig.requerido;
      prazo.value = defaultConfig.prazo;
      emailResposta.value = defaultConfig.emailResposta;
      esfera.selectedIndex = defaultConfig.esfera;
      plantao.selectedIndex = defaultConfig.plantao;
      vara.value = defaultConfig.vara;
      motivo.value = defaultConfig.motivo;
    }
  } else {
    return;
  }
}
