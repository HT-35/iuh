document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  const callApi = async (product) => {
    const res = await fetch("http://localhost:3000/product/find-product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Thêm header Content-Type
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  };

  btnFind.addEventListener("click", async () => {
    const findNameProduct = document.querySelector("#find-name-product");

    const res = await callApi();

    console.log(res);
  });
});
