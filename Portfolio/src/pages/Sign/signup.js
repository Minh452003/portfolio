import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Nav from "@/component/Nav";
import axios from "axios";
import { router, useEffect } from "@/lib";
const signup = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const email = document.querySelector("#email");
        const fullname = document.querySelector("#fullname");
        const password = document.querySelector("#password");


        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                email: email.value,
                password: password.value,
                username: fullname.value
            };
            axios.post('http://localhost:3000/users', formData).then(() => router.navigate("/Sign/login"));
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
                            <img class="img1" src="https://cdn.pixabay.com/photo/2022/05/06/17/58/sign-up-7178844__340.png" alt="">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Register!</h1>
                                    </div>
                                    <form class="user" id="form-add">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="email" 
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                id="fullname" 
                                                placeholder="Enter Name...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="password" placeholder="Password">
                                        </div>
                                        <button type="submit" class="btn btn-danger btn-user btn-block">
                                            Sign Up
                                        </button>
                                        <hr>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                        <div class="text-center">
                                        <a class="small" href="/#/Sign/login">Login!</a>
                                    </div>        
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

export default signup