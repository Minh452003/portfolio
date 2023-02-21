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

const app = document.querySelector("#app");
router.on("/", () => render(homePage, app));
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
