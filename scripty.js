<script>
    // Toggle do menu principal (mobile)
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#main-menu");

    toggle.addEventListener("click", () => {
      const isActive = menu.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Submenu "Raças": expandir/colapsar no mobile via clique
    const submenuParent = menu.querySelector("li:nth-child(2)"); // segundo item (Raças)
    const parentLink = submenuParent.querySelector(".parent-link");
    const submenuToggle = submenuParent.querySelector(".submenu-toggle");

    function toggleSubmenu(e) {
      // Evita navegação do link "#"
      if (e && e.preventDefault) e.preventDefault();
      submenuParent.classList.toggle("open");
      const expanded = submenuParent.classList.contains("open");
      parentLink.setAttribute("aria-expanded", expanded ? "true" : "false");

      // Alterna o ícone do botão no mobile
      const icon = submenuToggle.querySelector("i");
      icon.className = expanded ? "bi bi-chevron-up" : "bi bi-chevron-down";
    }

    // Clique no botão de expandir (mobile)
    submenuToggle.addEventListener("click", toggleSubmenu);

    // Opcional: também permitir clique no texto do item pai para expandir
    parentLink.addEventListener("click", toggleSubmenu);
  </script>