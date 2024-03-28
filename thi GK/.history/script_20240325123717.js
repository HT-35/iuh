document.addEventListener("DOMContentLoaded", async () => {
  const nameProduct = document.querySelector("#name-product");
  const price = document.querySelector("#price");

  console.log(price, nameProduct);

  const data = {
    nameProduct,
    price,
  };

  const callApi = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    return res;
  };

  const dataApi = await callApi();

  console.log(dataApi);
});
