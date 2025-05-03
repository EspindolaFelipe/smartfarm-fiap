function sendFormReport() {
    let clientReportName = document.getElementById('nome_cliente').value;
    let clientReportEmail = document.getElementById('email_cliente').value;
    let clientReportTel = document.getElementById('tel_cliente').value;
    let clientReportMsg = document.getElementById('mensagem_cliente').value;
    alert(clientReportName + '\n' + clientReportEmail + '\n' + clientReportTel + '\n' + clientReportMsg)
}