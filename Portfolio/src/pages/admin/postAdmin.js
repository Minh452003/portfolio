import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";
const postAdmin = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts").then(({ data }) => setPost(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
                    const newPosts = posts.filter((post) => post.id != id);
                    setPost(newPosts);
                })
            });
        }
    });

    return `
    ${headerAdmin()}
    <div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">QUẢN LÝ BÀI VIẾT</h6>
            <br>
            <p class="mb-4"><a class="btn btn-danger" style="color: white; list-style: none;" href="#/admin/postAdmin/add">Thêm Danh Mục</a></p>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="table-primary">
                        <tr>
                        <th>#</th>
                        <th>Tiêu Đề</th> 
                        <th>Ảnh</th>                          
                        <th>Tác Giả</th>
                        <th>Mô Tả</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${posts.map(
        (post, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${post.title}</td>                      
                    <td><img width="50px" src="${post.image}" alt=""></td> 
                    <td>${post.author}</td>    
                    <td>${post.description}</td>                            
                    <td>
                        <button data-name="Minh" data-id="${post.id}" class="btn btn-secondary btn-remove">Remove</button>
                        <a class="btn btn-warning" style="color: white; list-style: none;" href="/admin/postAdmin/${post.id}/edit">Edit</a>
                    
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

export default postAdmin