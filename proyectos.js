let projects = [
    {
      title: "Plumbing Company",
      category: "React.js",
      description: "Corporate website with fluid animations and modern design.",
      image: "./img/anaisis.png",
      demo: "#",
      github: "#"
    },
    {
      title: "E-Commerce Store",
      category: "Next.js + WooCommerce",
      description: "Online store with shopping cart and integrated payments.",
      image: "./img/tienda-linea-online-shop.jpg",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Manager App",
      category: "Node.js + MongoDB",
      description: "Task management application with login and database.",
      image: "./img/basedatos.jpg",
      demo: "#",
      github: "#"
    }

  ];


  let projectos = document.getElementById("proyects");
    

    let cant= projects.length;
    console.log(cant);

    if (cant < 4){
          projectos.innerHTML = projects.reduce((acumulador,proy)=> {

          return acumulador + ` 
      <div class="bg-blue-950 dark:bg-white dark:shadow-[0_5px_20px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden text-left flex flex-col">
      <img src="${proy.image}"
           alt="Plumbing Company"
           class="w-full h-40 object-cover block" style="background-color:#2a3a50;" />
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="inline-block bg-[#E3FF6A20] text-highlight dark:text-deep-blue text-xs px-2.5 py-0.5 rounded-[10px] mb-2.5">${proy.category}</span>
          <h3 class="m-0 mb-2 text-[17px] text-light dark:text-dark">${proy.title}</h3>
          <p class="m-0 mb-3.5 text-softGray dark:text-[#4a5568] text-sm leading-[1.6]">${proy.description}</p>
        </div>
        <div class="flex gap-2.5">
          <a href="#" class="btn-small bg-highlight dark:bg-[#cce6ff] dark:text-deep-blue text-dark px-3.5 py-1.5 rounded-[15px] text-[13px] font-bold transition-colors duration-200">See demo</a>
          <a href="#" class="btn-small-outline bg-linear-to-r from-[#18181B] to-[#27272A] border border-highlight text-highlight px-3.5 py-1.5 rounded-[15px] text-[13px] transition-colors duration-200">GitHub</a>
        </div>
      </div>
    </div>`; }, "");
    
   }else
    {
      let cadena="";
        for (let i=0 ;i<4;i++){
           cadena = cadena + ` 
      <div class="bg-blue-950 dark:bg-white dark:shadow-[0_5px_20px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden text-left flex flex-col">
      <img src="${proy.image}"
           alt="Plumbing Company"
           class="w-full h-40 object-cover block" style="background-color:#2a3a50;" />
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="inline-block bg-[#E3FF6A20] text-highlight dark:text-deep-blue text-xs px-2.5 py-0.5 rounded-[10px] mb-2.5">${proy.category}</span>
          <h3 class="m-0 mb-2 text-[17px] text-light dark:text-dark">${proy.title}</h3>
          <p class="m-0 mb-3.5 text-softGray dark:text-[#4a5568] text-sm leading-[1.6]">${proy.description}</p>
        </div>
        <div class="flex gap-2.5">
          <a href="#" class="btn-small bg-highlight dark:bg-[#cce6ff] dark:text-deep-blue text-dark px-3.5 py-1.5 rounded-[15px] text-[13px] font-bold transition-colors duration-200">See demo</a>
          <a href="#" class="btn-small-outline bg-linear-to-r from-[#18181B] to-[#27272A] border border-highlight text-highlight px-3.5 py-1.5 rounded-[15px] text-[13px] transition-colors duration-200">GitHub</a>
        </div>
      </div>
    </div>`;

        }

      projectos.innerHTML = cadena;

    }    

    
  



