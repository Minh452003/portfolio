import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/categories").then(({ data }) => setCategories(data))
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                axios.delete(`http://localhost:3000/categories/${id}`).then(() => {
                    const newCategories = categories.filter((category) => category.id != id);
                    setCategories(newCategories);
                })
            });
        }
    })

    return `
    ${headerAdmin()}

    <div class="container-fluid">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">QUẢN LÝ DANH MỤC DỰ ÁN</h6>
                <br>
                <p class="mb-4"><a class="btn btn-danger" style="color: white; list-style: none;" href="#/admin/categories/add">Thêm Danh Mục</a></p>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead class="table-primary">
                            <tr>
                            <th>#</th>
                            <th>Tên Danh Mục</th>                           
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        ${categories.map(
        (category, index) => {
            return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${category.name}</td>                                   
                        <td>
                            <button data-name="Minh" data-id="${category.id}" class="btn btn-secondary btn-remove">Remove</button>
                            <a class="btn btn-warning" style="color: white; list-style: none;" href="/admin/categories/${category.id}/edit">Edit</a>
                        
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

export default categories