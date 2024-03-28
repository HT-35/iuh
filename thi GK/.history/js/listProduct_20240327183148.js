document.addEventListener("DOMContentLoaded", () => {
  const insertData = document.querySelector("#insertData");

  const callApi = async () => {
    const res = await fetch(`http://localhost:3000/product/`);
    const data = await res.json();
    const product = data.data;
    console.log(product);

    product.map((item, index) => {
      const { product, price } = item;
      const template = `                <tr>
                  <th scope="row">1</th>
                  <td>${product}</td>
                  <td>${price}</td>
                  <td>${product}</td>
                  <td>${price}</td>
                  <td>${price}</td>
                </tr>`;
      insertData.insertAdjacentHTML("beforeend")
    });
  };

  callApi();
});
