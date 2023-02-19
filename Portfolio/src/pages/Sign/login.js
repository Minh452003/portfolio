import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Nav from "@/component/Nav";
import axios from "axios";
import { router, useEffect } from "@/lib";
const login = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");


        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                email: email.value,
                password: password.value,
            };
            axios.post('http://localhost:3000/login', formData).then(() => router.navigate("/admin/projects"));
        });
    });


    return `
    ${Header()}
    ${Nav()}
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image">
                            <img class="img1" src="https://pngfreepic.com/wp-content/uploads/2022/09/bea30945.png?v=1663399853" alt="">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" id="form-add">
                                    <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="email" 
                                        placeholder="Enter Email Address...">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="password" placeholder="Password">
                                </div>
                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                    Login
                                </button>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="/#/Sign/signup">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    ${Footer()}
  `;

}

export default login