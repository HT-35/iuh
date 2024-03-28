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
    console.log(res);
    if (res.status) {
      btnFind.disabled = true;
      const { TenNV } = res.data;
      console.log(res.data);
      const template = `          <div class="">
            <div class="row">

              <div class="title col-sm-12 col-md-12 col-lg-12">
                <h1 class="text-center">Cập Nhật Sản Phẩm</h1>
              </div>
            </div>

            <form action="#" class="">
                       <div class="">

            <div class="mb-3 mt-3 row">
              <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

              </div>
              <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                <label for="name-product" class="form-label p-1">MaNV</label>
              </div>
              <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                <input type="text" class="form-control border border-dark" id="MaNV" placeholder="" name="name-product">
              </div>
            </div>



            <div class="mb-3 mt-3 row">
              <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

              </div>
              <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                <label for="TenNV" class="form-label p-1">TenNV</label>
              </div>
              <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input type="text" class="form-control border border-dark"
                  id="TenNV" placeholder="" name="TenNV"></div>
            </div>

            <div class="mb-3 mt-3 row">
              <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

              </div>
              <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                <label for="NgaySinh" class="form-label p-1">NgaySinh</label>
              </div>
              <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input type="date" class="form-control border border-dark"
                  id="NgaySinh" placeholder="" name="NgaySinh"></div>
            </div>
            <div class="mb-3 mt-3 row">
              <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

              </div>
              <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                <label for="GioiTinh" class="form-label p-1">GioiTinh</label>
              </div>
              <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input type="text" class="form-control border border-dark"
                  id="GioiTinh" placeholder="" name="GioiTinh"></div>
            </div>


            <div class="mb-3 mt-3 row">
              <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

              </div>
              <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                <label for="Email" class="form-label p-1">Email</label>
              </div>
              <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input type="email" class="form-control border border-dark"
                  id="Email" placeholder="" name="Email"></div>
            </div>
          </div>

              <div class="row">
                <div class=" col-4 col-sm-4 col-md-4 col-lg-4 "></div>
                <div class=" col-6 col-sm-5 col-md-5 col-lg-5 "><button id="btn-update" type="button"
                    class="btn  btn-primary">CẬP NHẬT</button>
                </div>
                <div class=" col-6 col-sm-4 col-md-4 col-lg-4 "></div>
              </div>
            </form>
          </div>
          
          `;

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
        const resUpdate = await updateProductAPI(id, newProduct);
        console.log(resUpdate);

        if (resUpdate.status == true) {
          //get new product
          const getNewProduct = await callApi(id);
          // console.log("getNewProduct:  ", getNewProduct);
          const { product, price } = getNewProduct.data;
          console.log(
            "btnUpdate.addEventListener ~ newProduct:",
            getNewProduct
          );

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
                  <p class=" p-1">${price}</p>
                </div>
              </div>
            </div>
          </div>`;

          updateProduct.insertAdjacentHTML("beforeend", templateSuccess);
        } else {
          btnUpdate.disabled = true;
          console.log("Error:  ", resUpdate);
          const { status, data } = resUpdate;
          const templateError = `              <div class="mb-3 mt-3 row text-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12  ">

                <p class="text-bg-danger "  >Lỗi : ${data}</p>
              </div>`;
          updateProduct.insertAdjacentHTML("beforeend", templateError);
        }
      });
    } else {
      btnFind.disabled = true;
      const { status, data } = res;
      console.log("btnFind.addEventListener ~ data:", data);

      console.log(data);
      const template = `              <div class="mb-3 mt-3 row text-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12  ">

                <p class="text-bg-danger "  >Lỗi : ${data}</p>
              </div>`;
      updateProduct.insertAdjacentHTML("beforeend", template);
    }
  });
});
