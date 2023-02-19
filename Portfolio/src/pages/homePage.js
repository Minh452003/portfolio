import Information from "@/component/Information";
import Header from "@/component/Header";
import Nav from "@/component/Nav";
import Resume from "@/component/Resume";
import Footer from "@/component/Footer";
import Blog from "@/component/Blog";
import Projects from "@/component/Projects";
import ContactCpn from "@/component/contactCpn";
import Service from "@/component/Service";
import houseWorker from "@/component/houseWorker";
import Category from "@/component/Category";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const homePage = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories").then(({ data }) => setCategories(data))
    }, []);

    const onHandleClick = (id) => {
        console.log("home", id);
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then((response) => response.json())
            .then(({ projects }) => setProjects(projects));
    };

    return `
    <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>
    ${Header()}
    ${Nav()}
    ${Information()}
    ${Resume()}
    ${houseWorker()}
    ${Service()}
    <section class="section bg-dark py-5">
        <div class="container text-center">
            <h2 class="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
            <button class="btn bg-primary w-lg" >Hire me</button>
        </div>
    </section>

    <div class="container-fluid tm-container-content tm-mt-60" id="projects">
    <div class="row mb-4">
    <h2 class="mb-5 pb-4"><span class="text-danger">Sản Phẩm</span> Của Tôi</h2>
    ${Category({ categories, onClick: onHandleClick })}
    </div>
    <div class="row tm-mb-90 tm-gallery">
    ${Projects({ projects })}
    </div> <!-- row -->   
</div>
    ${Blog()}
    ${ContactCpn()}
    ${Footer()}

	<!-- core  -->
    <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    <!-- bootstrap 3 affix -->
    <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

    <!-- Isotope  -->
    <script src="assets/vendors/isotope/isotope.pkgd.js"></script>
    
    <!-- Google mpas -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtme10pzgKSPeJVJrG1O3tjR6lk98o4w8&callback=initMap"></script>
    `;

}
// 



export default homePage