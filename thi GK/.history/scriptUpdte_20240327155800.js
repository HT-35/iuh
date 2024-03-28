document.addEventListener("DOMContentLoaded", () => {
  const btnFind = document.querySelector("#btn-find");

  const callApi = async (id) => {
    const res = await fetch(`http://localhost:3000/product/find-product/${id}`);
    const data = await res.json();
    return data;
  };

  btnFind.addEventListener("click", async () => {
    const findNameProduct = document.querySelector("#find-name-product");
    const updateProduct = document.querySelector("#update-product");
    console.log(updateProduct);
    const id = findNameProduct.value;
    const res = await callApi(id);
    console.log(res);
    if (res.status) {
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
                  <input type="text" class="form-control border border-dark" id="name-product" placeholder=""
                    name="name-product">
                </div>
              </div>

              <div class="mb-3 mt-3 row">
                <div class="col-0 col-sm-2 col-md-2 col-lg-1  ">

                </div>
                <div class="col-6 col-sm-4 col-md-4 col-lg-4  ">
                  <label for="price" class="form-label p-1">Giá Tiền</label>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6"><input type="number"
                    class="form-control border border-dark" id="price" placeholder="" name="price"></div>
              </div>

              <div class="row">
                <div class=" col-4 col-sm-4 col-md-4 col-lg-4 "></div>
                <div class=" col-6 col-sm-5 col-md-5 col-lg-5 "><button id="btn-find" type="button"
                    class="btn  btn-primary">CẬP NHẬT</button>
                </div>
                <div class=" col-6 col-sm-4 col-md-4 col-lg-4 "></div>
              </div>
            </form>
          </div>`;
      
      updateProduct.insertAdjacentHTML("beforeend")
    } else {
      console.log("dell");
    }
  });
});
