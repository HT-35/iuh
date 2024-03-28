document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  const callApi = async (id) => {
    const res = await fetch(`http://localhost:3000/product/find-product/${id}`);
    const data = await res.json();
    return data;
  };
  const updateProductAPI = async (id, product) => {
    const res = await fetch(
      `http://localhost:3000/product/update-product/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Thêm header Content-Type
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    return data;
  };

  btnFind.addEventListener("click", async () => {
    const findNameProduct = document.querySelector("#find-name-product");
    const updateProduct = document.querySelector("#update-product");
    findNameProduct.addEventListener("change", () => {
      updateProduct.innerHTML = "";
      btnFind.disabled = false;
    });
    // console.log(updateProduct);
    const id = findNameProduct.value;
    const res = await callApi(id);
    // console.log(res);
    if (res.status) {
      btnFind.disabled = true;
      const { price, product } = res.data;
      const template = `          <div class="">
            <div class="row">

              <div class="title col-sm-12 col-md-12 col-lg-12">
                <h1 class="text-center">Cập Nhật Sản Phẩm</h1>
              </div>
            </div>

            <form action="#" class="">
              <div class="mb-3 mt-3 row">
                <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

                </div>
                <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                  <label for="name-product" class="form-label p-1">Tên Sản Phẩm</label>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                  <input type="text" value="${product}" class="form-control border border-dark" id="update-name-product" placeholder=""
                    name="name-product">
                </div>
              </div>

              <div class="mb-3 mt-3 row">
                <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

                </div>
                <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                  <label for="price" class="form-label p-1">Giá Tiền</label>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input value="${price}" type="number"
                    class="form-control border border-dark" id="update-price" placeholder="" name="price"></div>
              </div>

              <div class="row">
                <div class=" col-4 col-sm-4 col-md-4 col-lg-4 "></div>
                <div class=" col-6 col-sm-5 col-md-5 col-lg-5 "><button id="btn-update" type="button"
                    class="btn  btn-primary">CẬP NHẬT</button>
                </div>
                <div class=" col-6 col-sm-4 col-md-4 col-lg-4 "></div>
              </div>
            </form>
          </div>`;

      updateProduct.insertAdjacentHTML("beforeend", template);

      const btnUpdate = document.querySelector("#btn-update");
      // console.log(btnUpdate);
      btnUpdate.addEventListener("click", async () => {
        const updateNameProduct = document.querySelector(
          "#update-name-product"
        );
        const updatePrice = document.querySelector("#update-price");

        const newProduct = {
          product: updateNameProduct.value,
          price: updatePrice.value,
        };

        // update
        const res = await updateProductAPI(id, newProduct);
        if (res.status == true) {
          //get new product
          const newProduct = await callApi(id);
          const { product, price } = res;
          console.log("btnUpdate.addEventListener ~ newProduct:", newProduct);

          const templateSuccess = `                       <div class="">
            <div class="row">
              <div class=" col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1>Sản Phẩm Mới</h1>
              </div>

            </div>

            <div class=" ">
              <div class=" mt-1 row ">
                <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">
                </div>
                <div
                  class="col-6 col-sm-4 col-md-4 col-lg-4 text-center  border-bottom border-top  border-end border-black ">
                  <p class=" p-1">Sản Phẩm</p>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6 text-center border-bottom border-top border-black">
                  <p class=" p-1">${product} </p>
                </div>
              </div>
            </div>
            <div class=" ">
              <div class="mb-1  row ">
                <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">
                </div>
                <div class="col-6 col-sm-4 col-md-4 col-lg-4 text-center  border-bottom   border-end border-black ">
                  <p class=" p-1">Giá</p>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6 text-center border-bottom  border-black">
                  <p class=" p-1">15.000.000</p>
                </div>
              </div>
            </div>
          </div>`;

          updateProduct.insertAdjacentHTML("beforeend", templateSuccess);
        } else {
          console.log(res);
        }
        console.log(res);
      });
    } else {
      btnFind.disabled = true;
      const { price, data } = res;

      console.log(data);
      const template = `              <div class="mb-3 mt-3 row text-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12  ">

                <p class="text-bg-danger "  >Lỗi : ${data}</p>
              </div>`;
      updateProduct.insertAdjacentHTML("beforeend", template);
    }
  });
});
