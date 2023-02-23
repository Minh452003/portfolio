import headerAdmin from "@/component/headerAdmin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
const serviceEdit = ({ id }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/service/${id}`).then(({ data }) => setService(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const Title = document.querySelector("#title");
        const Description = document.querySelector("#description");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                id: id,
                title: Title.value,
                description: Description.value
            };
            axios.put(`http://localhost:3000/service/${id}`, formData).then(() => router.navigate("/admin/service/serviceAdmin"));
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
      <input type="text" class="form-control" id="title" value="${services.title}">
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả</label>
      <textarea type="text" class="form-control" id="description" >${services.description}</textarea>
    </div>
    <button type="submit" class="btn btn-danger">Sửa Bài Viết</button>
  </form>
      </div>
      </div>
      </div>
    
    `;

}

export default serviceEdit