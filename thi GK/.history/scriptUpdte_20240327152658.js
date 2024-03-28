document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  btnFind.addEventListener("click", () => {
    const findNameProduct = document.querySelector("#find-name-product");

    const res = fetch("http://localhost:3000/product//find-product");
    console.log(findNameProduct);
  });
});
