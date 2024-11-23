function API() {
  const { protocol, hostname, port } = window.location;
  const API_URL = `${protocol}//${hostname}${port ? `:${port}` : ""}/api`;

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
      const { data: dados } = await res.json();

      return { status: res.status, dados };
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
      const { data: dados } = await res.json();

      return { status: res.status, dados };
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
      const { data: dados } = await res.json();

      return { status: res.status, dados };
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
      const { data: dados } = await res.json();

      return { status: res.status, dados };
    } catch (e) {
      return false;
    }
  };

  this.delete = async (endpoint) => {
    const urlRequisicao = API_URL + "/" + endpoint;

    try {
      const res = await fetch(urlRequisicao, { method: "DELETE" });
      return { status: res.status };
    } catch (e) {
      return { status: res.status };
    }
  };
}

const api = new API();
