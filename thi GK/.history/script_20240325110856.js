document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("apiForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn sự kiện mặc định của form

      var inputData = document.getElementById("inputData").value; // Lấy dữ liệu từ input

      // Gửi yêu cầu fetch đến API
      fetch("URL_API_CỦA_BẠN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Xử lý dữ liệu trả về từ API
          document.getElementById("result").innerText =
            "API Response: " + JSON.stringify(data);
        })
        .catch((error) => {
          // Xử lý lỗi
          console.error("Error:", error);
          document.getElementById("result").innerText =
            "Error: " + error.message;
        });
    });
});
