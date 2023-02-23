import headerAdmin from "@/component/headerAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";
const serviceAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const Title = document.querySelector("#title");
        const Description = document.querySelector("#description");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                title: Title.value,
                description: Description.value
            };
            axios.post('http://localhost:3000/service', formData).then(() => router.navigate("/admin/service/serviceAdmin"));
        });
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
      <label class="form-label">Tiêu đề</label>
      <input type="text" class="form-control" id="title" >
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả</label>
      <textarea type="text" class="form-control" id="description" ></textarea>
    </div>
    <button type="submit" class="btn btn-danger">Thêm Bài Viết</button>
  </form>
      </div>
      </div>
      </div>
    
    `;

}

export default serviceAdd