import headerAdmin from "@/component/headerAdmin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
const workEdit = ({ id }) => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/worked/${id}`).then(({ data }) => setWorks(data));
    }, []);

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const housework = document.querySelector("#housework");
        const finish = document.querySelector("#finish");
        const client = document.querySelector("#client");
        const coffee = document.querySelector("#coffee");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                id: id,
                housework: housework.value,
                finish: finish.value,
                client: client.value,
                coffee: coffee.value,
            };
            axios.put(`http://localhost:3000/worked/${id}`, formData).then(() => router.navigate("/admin/worked/worked"));
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
      <label class="form-label">House Worked</label>
      <input type="text" class="form-control" id="housework" value="${works.housework}">
    </div>
    <div class="mb-3">
      <label class="form-label">Project Finish</label>
      <input type="text" class="form-control" id="finish" value="${works.finish}">
    </div>
    <div class="mb-3">
      <label class="form-label">Happy Client</label>
      <input type="text" class="form-control" id="client" value="${works.client}">
    </div>
    <div class="mb-3">
      <label class="form-label">Coffee Drinked</label>
      <input type="text" class="form-control" id="coffee" value="${works.coffee}">
    </div>
    <button type="submit" class="btn btn-danger">Sửa Bài Viết</button>
  </form>
      </div>
      </div>
      </div>
  
  `;
}

export default workEdit