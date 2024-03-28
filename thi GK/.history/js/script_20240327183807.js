document.addEventListener("DOMContentLoaded", async () => {
  const btn = document.querySelector(".btn");

  const callApi = async (product) => {
    const res = await fetch("http://localhost:3000/product/create", {
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

    const product = {
      product: nameProduct,
      price: price,
    };

    const dataApi = await callApi(product);
    console.log(dataApi);
    const template = `
            <div class="title col-12 col-sm-12 col-md-12 col-lg-12">
              <h1 class="text-center">Thêm Sẩn Phẩm Thành Công</h1>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody id="insertData">
                  <!-- <tr>
                                      <th scope="row">1</th>
                                      <td>iphone 15</td>
                                      <td>15.000.000</td>
                                      <td>iphone 15</td>
                                      <td>15.000.000</td>
                                      <td>15.000.000</td>
                                    </tr> -->

                </tbody>
              </table>
            </div>`;
    // console.log(product);
  });
});
