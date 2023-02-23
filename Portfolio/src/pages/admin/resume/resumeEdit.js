import headerAdmin from "@/component/headerAdmin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
const resumeEdit = ({ id }) => {

    const [resumes, setResume] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/Resume/${id}`).then(({ data }) => setResume(data));
    }, []);

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const timeLine = document.querySelector("#timeline");
        const Title = document.querySelector("#title");
        const Description = document.querySelector("#description");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                id: id,
                timeLine: timeLine.value,
                Title: Title.value,
                description: Description.value
            };
            axios.put(`http://localhost:3000/Resume/${id}`, formData).then(() => router.navigate("/admin/resume/resume"));
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
      <input type="text" class="form-control" id="timeline" value="${resumes.timeLine}">
    </div>
    <div class="mb-3">
      <label class="form-label">Tiêu đề</label>
      <input type="text" class="form-control" id="title" value="${resumes.Title}">
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả</label>
      <textarea type="text" class="form-control" id="description" >${resumes.description}</textarea>
    </div>
    <button type="submit" class="btn btn-danger">Sửa Bài Viết</button>
  </form>
      </div>
      </div>
      </div>
    
    `;

}

export default resumeEdit