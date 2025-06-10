function sendFormReport() {
    let clientReportName = document.getElementById('nome_cliente').value;
    let clientReportEmail = document.getElementById('email_cliente').value;
    let clientReportTel = document.getElementById('tel_cliente').value;
    let clientReportMsg = document.getElementById('mensagem_cliente').value;
    console.log(clientReportName + '\n' + clientReportEmail + '\n' + clientReportTel + '\n' + clientReportMsg)
}

function mostrarPopup() {
    document.getElementById("fundo_blur").style.display = "block";
    document.getElementById("div_popup").style.display = "block";
  }
  
  function fecharPopup() {
    document.getElementById("fundo_blur").style.display = "none";
    document.getElementById("div_popup").style.display = "none";
  }