  
  

  let skills= {
    main: [
      { name: "HTML5",      icon: "./img/HTML5.png",        nivel: 95 },
      { name: "CSS3",       icon: "./img/logo-css3.png",    nivel: 90 },
      { name: "JavaScript", icon: "./img/js.png",           nivel: 88 },
      { name: "React.js",   icon: "./img/reacjs.png",       nivel: 85 },
      { name: "Next.js",    icon: "./img/next.png",         nivel: 80 },
      { name: "Node.js",    icon: "./img/node-js.png",      nivel: 78 },
      { name: "Tailwind",   icon: "./img/tailwind.png",     nivel: 88 },
      { name: "WordPress",  icon: "./img/wordpress.png",    nivel: 92 }
    ],
    additional: [
      { name: "PHP", icon: "./img/Php-logo.png" },
      { name: "MySQL", icon: "./img/mysql.png" },
      { name: "Photoshop", icon: "./img/photoshop.png" },
      { name: "Excel", icon: "./img/excel.png" },
      { name: "M.S.Access", icon: "./img/access.png" },
      { name: "PowerPoint", icon: "./img/powerpoint.png" },
      { name: "M.S.Word", icon: "./img/word.png" },
      { name: "Powerdirector", icon: "./img/powerdirector.png" }
    ]
  }


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
         