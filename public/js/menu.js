(function() {
      let btn  = document.getElementById("btn-hamburger");
      let menu = document.getElementById("menu-mobile");
      if (!btn || !menu) return;

      btn.addEventListener("click", function() {
        var abierto = menu.style.maxHeight && menu.style.maxHeight !== "0px";
        menu.style.maxHeight = abierto ? "0px" : menu.scrollHeight + "px";
        btn.textContent = abierto ? "☰" : "✕";
        btn.setAttribute("aria-expanded", abierto ? "false" : "true");
      });

      menu.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
          menu.style.maxHeight = "0px";
          btn.textContent = "☰";
          btn.setAttribute("aria-expanded", "false");
        });
      });
    })();