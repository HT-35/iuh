document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  const callApi = async (product) => {
    const res = await fetch("http://localhost:3000/product/find-product", {
      method: "get",
      headers: {
        "Content-Type": "application/json", // Thêm header Content-Type
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  };

  btnFind.addEventListener("click", () => {
    const findNameProduct = document.querySelector("#find-name-product");

    const res = fetch("http://localhost:3000/product/find-product");
    const data = res.json();
    console.log(data);
  });
});
