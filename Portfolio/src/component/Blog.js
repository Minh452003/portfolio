import { useEffect, useState } from "@/lib";
import axios from "axios";


const BlogComponent = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts").then(({ data }) => setPost(data));
    }, []);

    return `
    <section class="section" id="blog">
    <div class="container">
        <h2 class="mb-5">LATEST <span class="text-danger">NEWS</span></h2>
        <div class="row">
        ${posts.map((post) => {
        return `
            <div class="blog-card">
            <div class="img-holder">
                <img src="${post.image}" alt="" class="img2">
            </div>
            <div class="content-holder">
                <h6 class="title">${post.title}</h6>

                <p class="post-details">
                    <a href="#">By:${post.author}</a>
                    <a href="#"><i class="ti-heart text-danger"></i> 234</a>
                    <a href="#"><i class="ti-comment"></i> 123</a>
                </p>
                
                <p>${post.description}</p>

                <a href="#" class="read-more">Read more <i class="ti-angle-double-right"></i></a>
            </div>
        </div><!-- end of blog wrapper -->`;
    }).join("")}
            
        </div>
    </div>
</section>
  `;

}

export default BlogComponent