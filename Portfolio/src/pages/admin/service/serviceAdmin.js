import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";
const serviceAdmin = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/service").then(({ data }) => setService(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                axios.delete(`http://localhost:3000/service/${id}`).then(() => {
                    const newService = services.filter((service) => service.id != id);
                    setService(newService);
                })
            });
        }
    });

    return `
    ${headerAdmin()}
    <div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">RESUME</h6>
            <br>
            <p class="mb-4"><a data-navigo class="btn btn-danger" style="color: white; list-style: none;" href="#/admin/service/serviceAdmin/add">Thêm</a></p>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="table-primary">
                        <tr>
                        <th>#</th>
                        <th>Time Line</th> 
                        <th>Tiêu Đề</th>                          
                        <th>Mô Tả</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${services.map(
        (service, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>                   
                    <td>${service.title}</td> 
                    <td>${service.description}</td>                            
                    <td>
                        <button data-name="Minh" data-id="${service.id}" class="btn btn-secondary btn-remove">Remove</button>
                        <a class="btn btn-warning" style="color: white; list-style: none;" href="#/admin/service/serviceAdmin/${service.id}/edit">Edit</a>
                    
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

export default serviceAdmin