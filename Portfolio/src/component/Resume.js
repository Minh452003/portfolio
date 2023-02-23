import { useEffect, useState } from "@/lib";
import axios from "axios";
const Resume = () => {
    const [resumes, setResume] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/Resume").then(({ data }) => setResume(data));
    }, []);

    return `<!--Resume Section-->
    <section class="section" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">MY</span> RESUME</h2>
            <div class="row">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Expertise & Education</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        

                        ${resumes.map((resume) => {
        return `<div class="card-body">
                            <h6 class="title text-danger">${resume.timeLine}</h6>
                            <P>${resume.Title}</P>
                            <P class="subtitle">${resume.description}</P>
                            <hr>
                            </div>
                            `;
    }).join("")}
                            
                       
                    </div>
                </div>
                
            </div>
        </div>
    </section>`;

}

export default Resume