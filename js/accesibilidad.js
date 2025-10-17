(() => {
    const btnAumentar = document.querySelector("#aumentarFuente");
    const btnDisminuir = document.querySelector("#disminuirFuente");
    const btnContraste = document.querySelector("#contraste");

    let tamanoFuente = 16;
    let contrasteActivo = false;

    const setRootFont = (size) => {
      size = Math.max(12, Math.min(24, size)); // clamp entre 12 y 24
      document.documentElement.style.fontSize = `${size}px`;
    };

    if (btnAumentar && btnDisminuir && btnContraste) {
        btnAumentar.addEventListener("click", () => {
            tamanoFuente = Math.min(24, tamanoFuente + 1);
            setRootFont(tamanoFuente);
        });

        btnDisminuir.addEventListener("click", () => {
            tamanoFuente = Math.max(12, tamanoFuente - 1);
            setRootFont(tamanoFuente);
        });

        btnContraste.addEventListener("click", () => {
            contrasteActivo = !contrasteActivo;
            document.documentElement.classList.toggle("modo-contraste", contrasteActivo);
            btnContraste.setAttribute('aria-pressed', String(contrasteActivo));
        });
    }

})();