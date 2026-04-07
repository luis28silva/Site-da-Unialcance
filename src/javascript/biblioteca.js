
    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            // Fecha todos antes de abrir o novo
            buttons.forEach(b => {
                if (b !== btn) {
                    b.classList.remove("active");
                    b.nextElementSibling.classList.remove("open");
                }
            });

            // Alterna o item clicado
            btn.classList.toggle("active");
            btn.nextElementSibling.classList.toggle("open");
        });
    });

