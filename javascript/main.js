document.addEventListener('DOMContentLoaded', function () {
      const menuToggle = document.querySelector('.menu-toggle');
      const topNavBar = document.querySelector('.topNavBar');
      const contentHeader = document.querySelector('.content-header');

      // Verifique se os elementos estão sendo encontrados corretamente
      console.log(menuToggle, topNavBar, contentHeader);

      // Adiciona o evento de clique
      menuToggle.addEventListener('click', () => {
        console.log("Botão clicado!"); // Verifique se o evento está sendo disparado
        topNavBar.classList.toggle('active');
        contentHeader.classList.toggle('expanded');
      });
    });



// Form
document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("requesterTel");
  telefoneInput.addEventListener("input", function () {
    let value = telefoneInput.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    let formatado = "";

    if (value.length > 0) formatado = "(" + value.substring(0, 2);
    if (value.length >= 3) formatado += ") " + value.substring(2, 7);
    if (value.length >= 8) formatado += "-" + value.substring(7, 11);

    telefoneInput.value = formatado;
  });

  // Validação e envio do formulário
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCompleto = document.getElementById("requesterName").value.trim();
    const telefone = telefoneInput.value.trim();
    const email = document.getElementById("requesterEmail").value.trim();
    const mensagem = document.getElementById("requesterMessage").value.trim();

    document.getElementById("erroNome").style.display = "none";
    document.getElementById("erroTelefone").style.display = "none";
    document.getElementById("erroEmail").style.display = "none";

    let valido = true;

    if (nomeCompleto.split(" ").length < 2) {
      document.getElementById("erroNome").style.display = "block";
      valido = false;
    }

    const telefoneValido = /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone);
    if (!telefoneValido) {
      document.getElementById("erroTelefone").style.display = "block";
      valido = false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      document.getElementById("erroEmail").style.display = "block";
      valido = false;
    }

    const mensagemValida = mensagem.length >= 30 && mensagem.length <= 500;
    if (!mensagemValida) {
      document.getElementById("erroMensagem").style.display = "block";
      valido = false;
    } else {
      document.getElementById("erroMensagem").style.display = "none";
    }

    
    if (!valido) return;

mostrarPopup();
sendFormReport();
  });
});

function mostrarPopup() {
  const popup = document.getElementById("div_popup");
  const fundo = document.getElementById("fundo_blur");

  if (popup && fundo) {
    popup.style.display = "flex";
    fundo.style.display = "block";
  }
}

function fecharPopup() {
  const popup = document.getElementById("div_popup");
  const fundo = document.getElementById("fundo_blur");

  if (popup && fundo) {
    popup.style.display = "none";
    fundo.style.display = "none";
  }

  // Limpar o formulário
  document.getElementById("contactForm").reset();

  // Opcional: esconder mensagens de erro, se ainda estiverem visíveis
  document.getElementById("erroNome").style.display = "none";
  document.getElementById("erroTelefone").style.display = "none";
  document.getElementById("erroEmail").style.display = "none";
  document.getElementById("erroMensagem").style.display = "none";
}


