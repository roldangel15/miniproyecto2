const PortfolioApp = {
  init() {
    this.renderHero();
    this.renderSkills();
    this.renderProjects();
    this.setupContactForm();
  },

  renderHero() {
    // Actualiza el nombre y el rol en el Hero
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
  },

  renderSkills() {
   
   let habilidad =document.getElementById("habilidades");
   
    habilidad.innerHTML = skills.main.reduce((acumulador,habils)=> {

        return acumulador + `  <div class="bg-dark dark:bg-white border border-[#2a3a50] dark:border-[#c0cce0] rounded-md sm:rounded-lg p-1.5 sm:p-4 text-[9px] sm:text-sm text-light dark:text-dark flex flex-col items-center justify-center shadow-sm">
          <img src="${habils.icon}" alt="icono ${habils.name}" class="w-5 h-5 sm:w-10 sm:h-10 mb-1 sm:mb-2 object-contain"/>
          <span class="font-medium truncate max-w-full">${habils.name}</span>
          <div class="w-full bg-slate-700 dark:bg-slate-300 rounded-full h-3 mt-2">
           <div class="bg-indigo-600 h-3 rounded-full" style="width: ${habils.nivel}%"></div>
           </div>

        </div>`; }, "");
       
    //console.log(habilidad.innerHTML);  
      console.log("hola"); 
    let habilidadAdic =document.getElementById("adicionalHabil");
    
    habilidadAdic.innerHTML = skills.additional.reduce((acumulador,habilsa)=> {

          return acumulador + `  <div class="bg-dark dark:bg-white rounded-[10px] px-2 py-4 text-sm text-light dark:text-dark min-w-20 flex flex-col items-center">
          <img 
            src="${habilsa.icon}" 
            alt="icono ${habilsa.name}" 
            class="w-10 h-10 mb-1.5 object-contain"
          />
          <span class="font-medium">${habilsa.name}</span>
      </div>`; }, "");
         
 
  
  },


  renderProjects() {
/*
    let contenedorProyectos = document.getElementById("proyectos");

if (contenedorProyectos) {
  // 2. Corregido: Se agregaron backticks `` para que sea un template literal válido
  contenedorProyectos.innerHTML = projects.reduce((acumulador, proy) => {
    return acumulador + `
      <div class="bg-deepBlue dark:bg-[#e8edf5] rounded-xl w-85 sm:w-full sm:max-w-85 overflow-hidden text-left">
        <img src="${proy.image}" alt="${proy.title}" class="w-full h-40 object-cover block" style="background-color:#2a3a50;" />
        <div class="p-4">
          <span class="inline-block bg-[#E3FF6A20] text-highlight dark:text-deep-blue text-xs px-2.5 py-0.5 rounded-[10px] mb-2.5">${proy.category}</span>
          <h3 class="m-0 mb-2 text-[17px] text-light dark:text-dark">${proy.title}</h3>
          <p class="m-0 mb-3.5 text-softGray dark:text-[#4a5568] text-sm leading-[1.6]">${proy.description}</p>
          <div class="flex gap-2.5">
            <a href="${proy.demo}" class="btn-small bg-highlight dark:bg-[#cce6ff] dark:text-deep-blue text-dark px-3.5 py-1.5 rounded-[15px] text-[13px] font-bold transition-colors duration-200">Demo</a>
            <a href="${proy.github}" class="btn-small-outline dark:bg-black border border-highlight dark:border-[#3399ff] text-highlight px-3.5 py-1.5 rounded-[15px] text-[13px] transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </div>
    `;
  }, ""); // IMPORTANTE: Agregado el valor inicial "" para que el acumulador empiece vacío
}
*/
/*
    let projectos = document.getElementById("proyectos");
    
    projectos.innerHTML = projects.reduce((acumulador,proy)=> {

          return acumulador + ` 


      <div class="bg-deepBlue dark:bg-[#e8edf5] rounded-xl w-85 sm:w-full sm:max-w-85 overflow-hidden text-left">
        <img src="${proy.description}"
             alt="Plumbing Company"
             class="w-full h-40 object-cover block" style="background-color:#2a3a50;" />
        <div class="p-4">
          <span class="inline-block bg-[#E3FF6A20] text-highlight dark:text-deep-blue text-xs px-2.5 py-0.5 rounded-[10px] mb-2.5">${proy.category}</span>
          <h3 class="m-0 mb-2 text-[17px] text-light dark:text-dark">${proy.title}</h3>
          <p class="m-0 mb-3.5 text-softGray dark:text-[#4a5568] text-sm leading-[1.6]">${proy.description}</p>
          <div class="flex gap-2.5">
            <a href="#" class="btn-small bg-highlight dark:bg-[#cce6ff] dark:text-deep-blue text-dark px-3.5 py-1.5 rounded-[15px] text-[13px] font-bold transition-colors duration-200">${proy.demo}</a>
            <a href="#" class="btn-small-outline dark:bg-black border border-highlight dark:border-[#3399ff] text-highlight px-3.5 py-1.5 rounded-[15px] text-[13px] transition-colors duration-200">${proy.github}</a>
          </div>
        </div>
      </div>`; }, "");
*/      
  },


  setupContactForm() {
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




  }
};

// Ejecutar al cargar el documento
document.addEventListener('DOMContentLoaded', () => PortfolioApp.init());