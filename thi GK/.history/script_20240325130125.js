document.addEventListener("DOMContentLoaded", async () => {

  const btn = document.querySelector(".btn");

  console.log(nameProduct, price);



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

      const nameProduct = document.querySelector("#name-product").value;
      const price = document.querySelector("#price").value;
      const btn = document.querySelector(".btn");

      console.log(nameProduct, price);

      const product = {
        nameProduct: nameProduct,
        price: price,
      };

    // const dataApi = await callApi(product);
    // console.log(dataApi);
    console.log(product);
  });
});
