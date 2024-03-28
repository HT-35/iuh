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
                  <td>iphone 15</td>
                  <td>15.000.000</td>
                  <td>iphone 15</td>
                  <td>15.000.000</td>
                  <td>15.000.000</td>
                </tr>`;
      
    });
  };

  callApi();
});
