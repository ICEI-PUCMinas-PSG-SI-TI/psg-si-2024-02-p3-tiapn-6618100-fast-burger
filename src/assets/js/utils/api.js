function API() {
  const { protocol, hostname } = window.location;
  const API_URL = `${protocol}://${hostname}/api`;

  this.get = async (endpoint) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      const res = await fetch(urlRequisicao, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const dados = await res.json();

      return dados;
    } catch (e) {
      return false;
    }
  };

  this.post = async (endpoint, body) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      const res = await fetch(urlRequisicao, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const dados = await res.json();

      return dados;
    } catch (e) {
      return false;
    }
  };

  this.patch = async (endpoint, body) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      const res = await fetch(urlRequisicao, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const dados = await res.json();

      return dados;
    } catch (e) {
      return false;
    }
  };

  this.put = async (endpoint, body) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      const res = await fetch(urlRequisicao, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const dados = await res.json();

      return dados;
    } catch (e) {
      return false;
    }
  };

  this.delete = async (endpoint) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      await fetch(urlRequisicao, { method: "DELETE" });
      return true;
    } catch (e) {
      return false;
    }
  };
}

const api = new API();
