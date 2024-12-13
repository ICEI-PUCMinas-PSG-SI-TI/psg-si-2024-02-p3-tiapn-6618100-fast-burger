const converterParaBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
    reader.onerror = reject;
  });
