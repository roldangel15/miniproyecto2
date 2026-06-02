

document.querySelector('#nombre').textContent = portfolioData.profile.name;
    document.querySelector('#rol').textContent = 
      `${portfolioData.profile.role} — ${portfolioData.profile.technologies.join(' · ')}`;
    
      document.querySelector('#origen').textContent = 
      `Client Review From ${portfolioData.reviews.origin}`;
    document.querySelector('#rating').textContent = 
      `${portfolioData.reviews.rating}`;
    document.querySelector('#rating').textContent = 
      `${portfolioData.reviews.rating}`;
    document.querySelector('#opinion').textContent = 
      `${portfolioData.reviews.text}`;


    // Actualiza las barras de experiencia (Expertise)
     

    let experiencia =document.getElementById("experiencia");
     experiencia.innerHTML= portfolioData.expertise.reduce((acumulador,expert)=> {

        return acumulador + ` <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-xl font-medium text-slate-400 dark:text-slate-600">${expert.label}</span>
                        <span class="text-xl font-medium text-slate-400 dark:text-slate-600">${expert.percentage}%</span>
                    </div>
                    <div class="w-full bg-slate-700 dark:bg-slate-300 rounded-full h-3">
                        <div class="${expert.color} h-3 rounded-full" style="width: ${expert.percentage}%"></div>
                    </div>
                </div>`; }, "");


const btnEnviar = document.querySelector('.btn-enviar');
   
     if (!btnEnviar) return;

     btnEnviar.addEventListener("click", function() {
          enviarFormulario();
     });
// ── Función principal de envío ────────────────────────────
  function enviarFormulario() {
    const campoNombre  = document.getElementById("nombres");
    const campoEmail   = document.getElementById("email");
    const campoMensaje = document.getElementById("mensaje");

    const nombre  = campoNombre.value.trim();
    const email   = campoEmail.value.trim();
    const mensaje = campoMensaje.value.trim();

    // Limpiar errores previos
    limpiarError(campoNombre);
    limpiarError(campoEmail);
    limpiarError(campoMensaje);

    // Validar cada campo
    let valido = true;

    if (nombre === "") {
      mostrarError(campoNombre, "Please enter your name.");
      valido = false;
    }

    if (email === "") {
      mostrarError(campoEmail, "Please enter your email.");
      valido = false;
    } else if (!esEmailValido(email)) {
      mostrarError(campoEmail, "Please enter a valid email address.");
      valido = false;
    }

    if (mensaje === "") {
      mostrarError(campoMensaje, "Please write a message.");
      valido = false;
    }

    if (!valido) return;

    // ── Envío mediante mailto: ──────────────────────────────
    const asunto  = encodeURIComponent("Portfolio Contact: " + nombre);
    const cuerpo  = encodeURIComponent(
      "Name: " + nombre + "\n" +
      "Email: " + email + "\n\n" +
      mensaje
    );

    window.location.href =
      "mailto:rolando@example.com?subject=" + asunto + "&body=" + cuerpo;

    // Mensaje de confirmación visual tras redirigir
    setTimeout(function() {
      mostrarConfirmacion();
      campoNombre.value  = "";
      campoEmail.value   = "";
      campoMensaje.value = "";
    }, 800);
  }

  // ── Helpers ───────────────────────────────────────────────

  function esEmailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function mostrarError(campo, texto) {
    campo.style.borderColor = "#ff6b6b";

    // Evitar duplicar el mensaje de error
    let msg = campo.parentNode.querySelector(".error-msg");
    if (!msg) {
      msg = document.createElement("p");
      msg.className = "error-msg text-[#ff6b6b] text-xs mt-1 text-left";
      campo.parentNode.appendChild(msg);
    }
    msg.textContent = texto;
  }

  function limpiarError(campo) {
    campo.style.borderColor = "";
    const msg = campo.parentNode.querySelector(".error-msg");
    if (msg) msg.remove();
  }

  function mostrarConfirmacion() {
    // Buscar o crear el mensaje de confirmación
    let confirmacion = document.getElementById("confirmacion-envio");
    if (!confirmacion) {
      confirmacion = document.createElement("p");
      confirmacion.id = "confirmacion-envio";
      confirmacion.className =
        "text-center text-sm mt-4 px-4 py-2 rounded-lg border border-[#A4FF7A] text-[#A4FF7A]";
      btnEnviar.parentNode.insertBefore(confirmacion, btnEnviar.nextSibling);
    }
    confirmacion.textContent = "✅ Message sent! I'll get back to you soon.";

    // Ocultar automáticamente a los 5 s
    setTimeout(function() {
      confirmacion.remove();
    }, 5000);
  }

// Ejecutar al cargar el documento
document.addEventListener('DOMContentLoaded', () => PortfolioApp.init());

