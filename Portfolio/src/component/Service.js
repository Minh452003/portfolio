import { useEffect, useState } from "@/lib";
import axios from "axios";
const Service = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/service").then(({ data }) => setService(data));
    }, []);

    return `<section class="section" id="service">
    <div class="container">
        <h2 class="mb-5 pb-4"><span class="text-danger">MY</span> SERVICE</h2>
        <div class="row">
        ${services.map((service) => {
        return `
            <div class="col-md-4 col-sm-6">
                <div class="card mb-5">
                   <div class="card-header has-icon">
                        <i class="ti-vector text-danger" aria-hidden="true"></i>
                    </div>
                    <div class="card-body px-4 py-3">
                        <h5 class="mb-3 card-title text-dark">${service.title}
                        </h5>
                        <P class="subtitle">${service.description}</P>
                    </div>
                </div>
            </div>
            `;
    }).join("")}
        </div>
    </div>
</section>`;

}

export default Service