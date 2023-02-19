import { useEffect, useState } from "@/lib";
import axios from "axios";

const Projects = ({ projects }) => {

    return `
    ${projects.map((project) => {
        return `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure class="effect-ming tm-video-item">
            <img src="${project.avatar}" alt="Image" class="img-fluid">
            <figcaption class="d-flex align-items-center justify-content-center">
                <h2>${project.duan}</h2>
                <a href="/#/project/${project.id}"></a>
            </figcaption>                    
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
            <span class="tm-text-gray-light">${project.technology}</span>
            <span>${project.thoigian} ngày</span>
        </div>
    </div>
        `;
    }).join("")}         
    `;

}

export default Projects;