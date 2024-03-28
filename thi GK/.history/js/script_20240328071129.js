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
    // const nameProduct = document.querySelector("#name-product").value;
    // const price = document.querySelector("#price").value;

    const MaNV = document.querySelector("#MaNV");
    const TenNV = document.querySelector("#TenNV");
    const NgaySinh = document.querySelector("#NgaySinh");

    const GioiTinh = document.querySelector("#GioiTinh");
    const Email = document.querySelector("#Email");

    const product = {
      MaNV,
      TenNV,
      NgaySinh,
      GioiTinh,
      Email,
    };

    console.log(product);

    // const dataApi = await callApi(product);
    // console.log(dataApi);
    // const { product, price } = dataApi.data;

    if (dataApi.status) {
      const insertData = document.querySelector("#insertData");
      const { product, price } = dataApi.data;

      const template = `
                  <div class="title col-12 col-sm-12 col-md-12 col-lg-12">
              <h1 class="text-center">Thêm Sẩn Phẩm Thành Công</h1>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>MaNV</th>
                    <th>TenNV</th>
                    <th>NgaySinh</th>
                    <th>GioiTinh</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody id="insertData">
              <tr>
                                      <th scope="row">1</th>
                                      <td>${product}</td>
                                      <td>${price}</td>
                                      <td>${product}</td>
                                      <td>${price}</td>
                                      <td>${price}</td>
              </tr> 

           `;
      insertData.insertAdjacentHTML("beforeend", template);
    }
    // console.log(product);
  });
});
