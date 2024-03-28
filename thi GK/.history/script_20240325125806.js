document.addEventListener("DOMContentLoaded", async () => {
  const nameProduct = document.querySelector("#name-product");
  const price = document.querySelector("#price");
  const btn = document.querySelector(".btn");

  const product = {
    nameProduct: nameProduct.value,
    price: price.value,
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

  btn.addEventListener("click", async () => {
    // const dataApi = await callApi(product);
    // console.log(dataApi);
      console.log(product);
  });
});
