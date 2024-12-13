class Modal {
  #elemento;
  #formulario;
  #submitHandler;

  constructor(seletor) {
    this.#elemento = document.getElementById(seletor);
    this.#formulario = this.#elemento.querySelector("form");
    this.#elemento.remove();

    this.#elemento
      .querySelector('[data-button="close"]')
      ?.addEventListener("click", () => {
        this.fechar();
      });

    this.#formulario?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.#submitHandler?.call(this, this.#formulario);
    });

    this.limparFormulario();
  }

  abrir() {
    document.body.append(this.#elemento);
    this.#elemento.classList.add("open");
  }

  fechar() {
    this.#elemento.classList.remove("open");
    document.body.removeChild(this.#elemento);
  }

  limparFormulario() {
    this.#formulario?.reset();
  }

  onFormularioSubmit(cb) {
    this.#submitHandler = cb;
  }
}
