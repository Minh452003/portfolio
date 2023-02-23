import { useEffect, useState } from "@/lib";
import axios from "axios";

const Information = () => {
    const [infomations, setInfo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/Infomation").then(({ data }) => setInfo(data));
    }, []);
    return `
    ${infomations.map((info) => {
        return `
    <div class="container-fluid" >
    <div  class="row about-section" id="about">
    
        <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Who am I ?</h3>
        <span class="line mb-5"></span>
        <h5 class="mb-3">${info.title} </h5>
        <p class="mt-20">${info.description}</p>
        <button class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</button>
    </div>
    <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Personal Info</h3>
        <span class="line mb-5"></span>
        <ul class="mt40 info list-unstyled">
            <li><span>Birthdate</span> : ${info.birtday}</li>
            <li><span>Email</span> : ${info.email}</li>
            <li><span>Phone</span> : ${info.phone}</li>
            <li><span>Skype</span> : ${info.name} </li>
            <li><span>Address</span> : ${info.address}</li>
        </ul>
        <ul class="social-icons pt-3">
            <li class="social-item"><a class="social-link" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
        </ul>  
    </div>
    <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">My Expertise</h3>
        <span class="line mb-5"></span>
        <div class="row">
            <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
            <div class="col-10 ml-auto mr-3">
                <h6>${info.exName}</h6>
                <p class="subtitle">${info.desName}</p>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
            <div class="col-10 ml-auto mr-3">
                <h6>${info.exName1}</h6>
                <p class="subtitle">${info.desName1}</p>
                <hr>
            </div>
        </div>
    </div>
</div>
</div>`;
    }).join("")}
        `;

}

export default Information