import headerAdmin from "@/component/headerAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";
const CategoriesAdd = () => {

  useEffect(() => {
    const form = document.querySelector("#form-add");
    const nameCategory = document.querySelector("#idduan");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: nameCategory.value,
      };
      axios.post('http://localhost:3000/categories', formData).then(() => router.navigate("/admin/categories"));
    })

  });

  return `
  ${headerAdmin()}
  <div class="container">
    <div class="row">
    <div class="col-lg-4">
    <img src="https://mona.solutions/wp-content/uploads/2021/01/OJKB731-1.png" alt="" width="100%">
    </div>
    <div class="col-lg-8 p-3 mb-2 bg-light text-dark">
    <form id="form-add">
  <div class="mb-3">
    <label class="form-label">Tên danh mục</label>
    <input type="text" class="form-control" id="idduan" >
  </div>
  <button type="submit" class="btn btn-danger">Thêm Danh Mục</button>
</form>
    </div>
    </div>
    </div>
  `;
}

export default CategoriesAdd