import { useEffect, useState } from "@/lib";
import axios from "axios";
const houseWorker = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/worked").then(({ data }) => setWorks(data));
    }, []);

    return `<section class="section bg-dark text-center">
    <div class="container">
    ${works.map((work) => {
        return `
        <div class="row text-center">
            <div class="col-md-6 col-lg-3">
                <div class="row ">
                    <div class="col-5 text-right text-light border-right py-3">
                        <div class="m-auto"><i class="ti-alarm-clock icon-xl"></i></div>
                    </div>
                    <div class="col-7 text-left py-3">
                        <h1 class="text-danger font-weight-bold font40">${work.housework}</h1>
                        <p class="text-light mb-1">Hours Worked</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="row">
                    <div class="col-5 text-right text-light border-right py-3">
                        <div class="m-auto"><i class="ti-layers-alt icon-xl"></i></div>
                    </div>
                    <div class="col-7 text-left py-3">
                        <h1 class="text-danger font-weight-bold font40">${work.finish}</h1>
                        <p class="text-light mb-1">Project Finished</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="row">
                    <div class="col-5 text-right text-light border-right py-3">
                        <div class="m-auto"><i class="ti-face-smile icon-xl"></i></div>
                    </div>
                    <div class="col-7 text-left py-3">
                        <h1 class="text-danger font-weight-bold font40">${work.client}</h1>
                        <p class="text-light mb-1">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="row">
                    <div class="col-5 text-right text-light border-right py-3">
                        <div class="m-auto"><i class="ti-heart-broken icon-xl"></i></div>
                    </div>
                    <div class="col-7 text-left py-3">
                        <h1 class="text-danger font-weight-bold font40">${work.coffee}</h1>
                        <p class="text-light mb-1">Coffee Drinked</p>
                    </div>
                </div>
            </div>
        </div>
        
        `;
    }).join("")}
        
    </div>
</section>`;
}

export default houseWorker