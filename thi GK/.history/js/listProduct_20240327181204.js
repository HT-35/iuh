document.addEventListener("DOMContentLoaded", () => {
  const insertData = document.querySelector("#insertData");

  const callApi = async (id) => {
    const res = await fetch(`http://localhost:3000/product/find-product/${id}`);
    const data = await res.json();
    return data;
  };

  const arrProdduct = 
});
