import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "@/lib";
import homePage from "@/pages/homePage";
import projectsAdmin from "./pages/admin/projects";
import projectsAdd from "./pages/admin/projects-add";
import projectDetail from "./pages/projectDetail";
import projectsEdit from "./pages/admin/projects-edit";
import login from "./pages/Sign/login";
import signup from "./pages/Sign/signup";
import categories from "./pages/admin/categories";
import CategoriesAdd from "./pages/admin/CategoriesAdd";
import CategoriesEdit from "./pages/admin/CategoriesEdit";
import postAdmin from "./pages/admin/postAdmin";
import postAdd from "./pages/admin/postAdd";
import postEdit from "./pages/admin/postEdit";
import inFo from "./pages/admin/infomation/inFo";
import infoEdit from "./pages/admin/infomation/infoEdit";
import resume from "./pages/admin/resume/resume";
import resumeAdd from "./pages/admin/resume/resumeAdd";
import resumeEdit from "./pages/admin/resume/resumeEdit";
import serviceAdmin from "./pages/admin/service/serviceAdmin";
import serviceAdd from "./pages/admin/service/serviceAdd";
import serviceEdit from "./pages/admin/service/serviceEdit";
import worked from "./pages/admin/worked/worked";
import workEdit from "./pages/admin/worked/workEdit";

const app = document.querySelector("#app");

// router.on("/admin/*", () => { }, {
//     before(done) {
//         const user = JSON.parse(localStorage.getItem("users")) || [];
//         if (!user) return (window.location.href = "/");
//         if (user && user.id != 1) return (window.location.href = "/#/Sign/login");
//         done();
//     },
// });



router.on("/", () => render(homePage, app));
router.on("/admin/worked/worked", () => render(worked, app));
router.on("/admin/worked/worked/:id/edit", ({ data }) => render(() => workEdit(data), app));

router.on("/admin/service/serviceAdmin", () => render(serviceAdmin, app));
router.on("/admin/service/serviceAdmin/add", () => render(serviceAdd, app));
router.on("/admin/service/serviceAdmin/:id/edit", ({ data }) => render(() => serviceEdit(data), app));
router.on("/admin/resume/resume", () => render(resume, app));
router.on("/admin/resume/resume/add", () => render(resumeAdd, app));
router.on("/admin/resume/resume/:id/edit", ({ data }) => render(() => resumeEdit(data), app));
router.on("/admin/infomation/inFo", () => render(inFo, app));
router.on("/admin/infomation/inFo/:id/edit", ({ data }) => render(() => infoEdit(data), app));
router.on("/project/:id", (params) => render(() => projectDetail(params), app));
router.on("/admin/projects", () => render(projectsAdmin, app));
router.on("/admin/categories", () => render(categories, app));

router.on("/admin/postAdmin", () => render(postAdmin, app));
router.on("/admin/categories/add", () => render(CategoriesAdd, app));
router.on("/admin/postAdmin/add", () => render(postAdd, app));
router.on("/admin/postAdmin/:id/edit", ({ data }) => render(() => postEdit(data), app));
router.on("/admin/categories/:id/edit", ({ data }) => render(() => CategoriesEdit(data), app));
router.on("/admin/projects/add", () => render(projectsAdd, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => projectsEdit(data), app));
router.on("/Sign/login", () => render(login, app));
router.on("/Sign/signup", () => render(signup, app));

router.resolve();
