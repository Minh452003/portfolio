import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";
const projectsAdmin = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/projects").then(({ data }) => setProjects(data))
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                axios.delete(`http://localhost:3000/projects/${id}`).then(() => {
                    const newProjects = projects.filter((project) => project.id != id);
                    setProjects(newProjects);
                })

            });
        }
    });

    return `
    ${headerAdmin()}
    <div class="container-fluid">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">QUẢN LÝ DỰ ÁN</h6>
                <br>
                <p class="mb-4"><a class="btn btn-danger" style="color: white; list-style: none;" href="#/admin/projects/add">Thêm Dự Án</a></p>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead class="table-primary">
                            <tr>
                            <th>#</th>
                            <th>Tên Dự Án</th>       
                            <th>Tác Giả</th>
                            <th>Ảnh Đại Diện</th>
                            <th>Link Git</th>
                            <th>Link Preview</th>
                            <th>Thời Gian </th>
                            <th>Feedback</th>
                            <th>Tag</th>
                            <th>Category</th>
                            <th>Mô Tả</th>                     
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        ${projects.map(
        (project, index) => {
            return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.duan}</td>                                   
                        <td>${project.tacgia}</td>
                        <td><img width="50px" src="${project.avatar}" alt=""></td>
                        <td><a class="btn btn-info" style="list-style: none;" href="${project.linkgit}">Xem</a></td>
                        <td><a class="btn btn-success" style="list-style: none;" href="${project.linkpreview}">Xem</a></td>
                        <td>${project.thoigian} ngày</td>
                        <td>${project.Feedback}</td>
                        <td>${project.technology}</td>
                        <td>${project.categoryId}</td>
                        <td>${project.mota}</td>
                        <td>
                            <button data-name="Minh" data-id="${project.id}" class="btn btn-secondary btn-remove">Remove</button>
                            <a class="btn btn-warning" style="color: white; list-style: none;" href="#/admin/projects/${project.id}/edit">Edit</a>
                        
                        </td>
                    </tr>`
        }).join("")}                                  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>

    `;

}
export default projectsAdmin;
