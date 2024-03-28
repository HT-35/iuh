document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  const callApi = async (id) => {
    const res = await fetch(`http://localhost:3000/product/find-product/${id}`);
    const data = await res.json();
    return data;
  };

  btnFind.addEventListener("click", async () => {
    const findNameProduct = document.querySelector("#find-name-product");
    const id = findNameProduct.value;
    const res = await callApi(id);
    console.log(res);
    if (res.status == true) {
      console.log("ok");
    } else {
      console.log("dell");
    }
    // const { price, product } = res.data;
  });
});
