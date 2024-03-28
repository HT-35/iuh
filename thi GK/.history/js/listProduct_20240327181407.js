document.addEventListener("DOMContentLoaded", () => {
  const insertData = document.querySelector("#insertData");

  const callApi = async () => {
    const res = await fetch(`http://localhost:3000/product/fi}nd-product/${id`);
    const data = await res.json();
    return data;
  };

  const arrProdduct = callApi();
});
