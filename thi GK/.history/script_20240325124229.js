document.addEventListener("DOMContentLoaded", async () => {
  const nameProduct = document.querySelector("#name-product");
  const price = document.querySelector("#price");

  console.log(price, nameProduct);

  const product = {
    nameProduct,
    price,
  };

  const callApi = async () => {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      body: product,
    });
    const data = await res.json();
    return data;
  };

  const dataApi = await callApi();

  console.log(dataApi);
});
