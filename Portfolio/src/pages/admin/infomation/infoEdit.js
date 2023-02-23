import headerAdmin from "@/component/headerAdmin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
const infoEdit = ({ id }) => {
    const [infomations, setInfo] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/Infomation/${id}`).then(({ data }) => setInfo(data));
    }, []);

    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const Title = document.querySelector("#title");
        const Name = document.querySelector("#name");
        const Birtday = document.getElementById("birtday");
        const Email = document.getElementById("email");
        const Phone = document.getElementById("phone");
        const Address = document.getElementById("address");
        const Description = document.getElementById("description");
        const exName = document.getElementById("exName");
        const desName = document.getElementById("desName");
        const exName1 = document.getElementById("exName1");
        const desName1 = document.getElementById("desName1");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id: id,
                title: Title.value,
                name: Name.value,
                birtday: Birtday.value,
                email: Email.value,
                phone: Phone.value,
                address: Address.value,
                description: Description.value,
                exName: exName.value,
                desName: desName.value,
                exName1: exName1.value,
                desName1: desName1.value
            };
            axios.put(`http://localhost:3000/Infomation/${id}`, formData).then(() => router.navigate("/admin/infomation/inFo"));
        })
    })


    return `
    ${headerAdmin()}
    <div class="container">
      <div class="row">
      <div class="col-lg-4">
      <img src="https://mona.solutions/wp-content/uploads/2021/01/OJKB731-1.png" alt="" width="100%">
      </div>
      <div class="col-lg-8 p-3 mb-2 bg-light text-dark">
      <form id="form-edit">
    <div class="mb-3">
      <label class="form-label">Tiêu đề</label>
      <input type="text" class="form-control" id="title" value="${infomations.title}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Họ Tên</label>
      <input type="text" class="form-control" id="name" value="${infomations.name}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Ngày Sinh</label>
      <input type="text" class="form-control" id="birtday" value="${infomations.birtday}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="text" class="form-control" id="email" value="${infomations.email}" required> 
    </div>
    <div class="mb-3">
      <label class="form-label">Phone</label>
      <input type="text" class="form-control" id="phone" value="${infomations.phone}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Địa Chỉ</label>
      <input type="text" class="form-control" id="address" value="${infomations.address}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Chuyên Môn 1</label>
      <input type="text" class="form-control" id="exName" value="${infomations.exName}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả CM 1</label>
      <textarea type="text" class="form-control" id="desName" required>${infomations.desName}</textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Chuyên Môn 2</label>
      <input type="text" class="form-control" id="exName1" value="${infomations.exName1}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả CM 2</label>
      <textarea type="text" class="form-control" id="desName1" required>${infomations.desName1}</textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Mô Tả</label>
      <textarea type="text" class="form-control" id="description" required>${infomations.description}</textarea>
    </div>
    
    <button type="submit" class="btn btn-danger">Sửa Bài Viết</button>
  </form>
      </div>
      </div>
      </div>

    `;

}

export default infoEdit