import Header from "@/component/Header";
import Nav from "@/component/Nav";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const projectDetail = ({ data: { id } }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`).then(({ data }) => setProjects(data))
        const project = projects.find((project) => project.id == id);
        console.log("project", project);
    }, []);

    return `
    ${Header()}
    ${Nav()}

    <div class="row mb-4">
    <h2 class="col-12 tm-text-primary1">${projects.duan}</h2>
</div>
    <div class="row tm-mb-90">            
            <div class="col-xl-6 col-lg-5 col-md-6 col-sm-12">
                <img src="${projects.avatar}" alt="Image" class="img-fluid1">
            </div>
            <div class="col-xl-6 col-lg-7 col-md-6 col-sm-12">
                <div class="tm-bg-gray tm-video-details">
                    <p class="mb-4 name1">
                    Thực hiện bởi: ${projects.tacgia}
                    </p>
                    <div class="text-center mb-5">
                        <a href="${projects.linkgit}" class="btn btn-primary tm-btn-big">Xem Git</a>
                        <a href="${projects.linkpreview}" class="btn btn-info tm-btn-big">Xem Preview</a>
                    </div>                    
                    <div class="mb-4 d-flex flex-wrap tg1">
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Category: </span><span class="tm-text-primary">${projects.category}</span>
                        </div>
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Thời gian hoàn thành dự án: </span><span class="tm-text-primary">${projects.thoigian} ngày</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Mô Tả:</h3>
                        <p class="mt1">${projects.mota}</p>
                    </div>
                    <div>
                        <h3 class="tm-text-gray-dark mb-3">Tags</h3>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">${projects.technology}</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                        <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                    </div>
                </div>
            </div>
        </div>
    `;

}

export default projectDetail