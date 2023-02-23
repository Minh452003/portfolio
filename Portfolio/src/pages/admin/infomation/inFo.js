import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";
const inFo = () => {
    const [infomations, setInfo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/Infomation").then(({ data }) => setInfo(data));
    }, []);

    return `
    ${headerAdmin()}
    <div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">INFOMATION</h6>
            <br>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="table-primary">
                        <tr>
                        <th>#</th>
                        <th>Tiêu Đề</th>
                        <th>Họ Tên</th> 
                        <th>Ngày Sinh</th>                          
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Địa Chỉ</th>
                        <th>Mô Tả</th>
                        <th>Chuyên Môn</th>
                        <th>Mô Tả CM</th>
                        <th>Chuyên Môn 2</th>
                        <th>Mô Tả CM 2</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${infomations.map(
        (info, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${info.title}</td>                      
                    <td>${info.name}</td> 
                    <td>${info.birtday}</td> 
                    <td>${info.email}</td> 
                    <td>${info.phone}</td>   
                    <td>${info.address}</td>  
                    <td>${info.description}</td> 
                    <td>${info.exName}</td> 
                    <td>${info.desName}</td>                              
                    <td>${info.exName1}</td>  
                    <td>${info.desName1}</td>  
                    <td>
                        <a class="btn btn-warning" style="color: white; list-style: none;" href="#/admin/infomation/inFo/${info.id}/edit">Edit</a>
                    
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

export default inFo