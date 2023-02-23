import headerAdmin from "@/component/headerAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";
const resumeAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const timeLine = document.querySelector("#timeline");
        const Title = document.querySelector("#title");
        const Description = document.querySelector("#description");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                timeLine: timeLine.value,
                Title: Title.value,
                description: Description.value
            };
            axios.post('http://localhost:3000/Resume', formData).then(() => router.navigate("/admin/resume/resume"));
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
      <label class="form-label">Time Line</label>
      <input type="text" class="form-control" id="timeline" >
    </div>
    <div class="mb-3">
      <label class="form-label">Tiêu đề</label>
      <input type="text" class="form-control" id="title" >
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả</label>
      <input type="text" class="form-control" id="description" >
    </div>
    <button type="submit" class="btn btn-danger">Thêm Bài Viết</button>
  </form>
      </div>
      </div>
      </div>
    `;

}

export default resumeAdd