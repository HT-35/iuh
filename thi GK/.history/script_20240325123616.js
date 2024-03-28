document.addEventListener("DOMContentLoaded", () => {
  const nameProduct = document.querySelector("#name-product");
  const price = document.querySelector("#price");

  console.log(price, nameProduct);

  const data = {
    nameProduct,
    price,
  };

  const callApi = async () => {
    const res = fetch("http://localhost:3000/");
    const data = res.json;
    return data;
  };

  const dataApi = callApi();

  console.log(dataApi);
});
