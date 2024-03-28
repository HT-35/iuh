document.addEventListener("DOMContentLoaded", async () => {
  const nameProduct = document.querySelector("#name-product");
  const price = document.querySelector("#price");

  console.log(price, nameProduct);

  const product = {
    nameProduct,
    price,
  };

  const callApi = async (product) => {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Thêm header Content-Type
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  };

  const dataApi = await callApi();

  console.log(dataApi);
});
