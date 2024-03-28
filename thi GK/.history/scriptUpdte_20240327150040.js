document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  btnFind.addEventListener("click", () => {
    const findNameProduct = document.querySelector("#find-name-product");

    const res = fetch('')
    console.log(findNameProduct);
  });
});
