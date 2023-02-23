import headerAdmin from "@/component/headerAdmin";
import { useEffect, useState } from "@/lib";
import axios from "axios";
const worked = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/worked").then(({ data }) => setWorks(data));
    }, []);

    return `
    ${headerAdmin()}
    <div class="container-fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">WORKED</h6>
            <br>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="table-primary">
                        <tr>
                        <th>#</th>
                        <th>House Worked</th> 
                        <th>Project Finish</th>                          
                        <th>Happy Client</th>
                        <th>Coffee Drinked</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${works.map(
        (work, index) => {
            return `
                <tr>
                    <td>${index + 1}</td>                   
                    <td>${work.housework}</td> 
                    <td>${work.finish}</td> 
                    <td>${work.client}</td> 
                    <td>${work.coffee}</td>                            
                    <td>
                        <a class="btn btn-warning" style="color: white; list-style: none;" href="#/admin/worked/worked/${work.id}/edit">Edit</a>
                    
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

export default worked