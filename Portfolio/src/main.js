import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "@/lib";
import homePage from "@/pages/homePage";
import projectsAdmin from "./pages/admin/projects";
import projectsAdd from "./pages/admin/projects-add";
import projectDetail from "./pages/projectDetail";
import projectsEdit from "./pages/admin/projects-edit";
import login from "./pages/Sign/login";
import signup from "./pages/Sign/signup";

const app = document.querySelector("#app");
router.on("/", () => render(homePage, app));
router.on("/project/:id", (params) => render(() => projectDetail(params), app));
router.on("/admin/projects", () => render(projectsAdmin, app));
router.on("/admin/projects/add", () => render(projectsAdd, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => projectsEdit(data), app));
router.on("/Sign/login", () => render(login, app));
router.on("/Sign/signup", () => render(signup, app));

router.resolve();
