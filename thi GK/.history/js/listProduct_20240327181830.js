document.addEventListener("DOMContentLoaded", () => {
  const insertData = document.querySelector("#insertData");

  const callApi = async () => {
    const res = await fetch(`http://localhost:3000/product/`);
    const data = await res.json();
    console.log(data);
  };

  callApi();
});
