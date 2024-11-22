class Modal {
    #elemento;

    constructor(elemento) {
      this.#elemento = elemento;
      this.#elemento.remove();
    }

    abrir() {
      this.#elemento.classList.add("open");
    }

    fechar() {
      this.#elemento.classList.remove("open");
    }
  }