class Dados {
  #container;
  #elemento;

  constructor(seletor) {
    this.#elemento = document.querySelector(seletor);
    this.#container = this.#elemento.parentElement;

    this.#elemento.remove();
    this.#elemento.classList.remove("d-none");
  }

  renderizar(dados) {
    this.#container.innerHTML = "";

    dados.forEach((dado) => {
      const div = document.createElement("div");
      const clone = this.#elemento.cloneNode(true);

      div.appendChild(clone);

      for (const prop in dado) {
        div.innerHTML = div.innerHTML.replaceAll(`$${prop}$`, dado[prop]);
      }

      this.#container.appendChild(div.querySelector("*"));
      div.remove();
    });
  }
}
