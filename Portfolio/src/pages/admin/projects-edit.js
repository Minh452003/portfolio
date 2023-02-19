import headerAdmin from "@/component/headerAdmin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
const projectsEdit = ({ id }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/projects/${id}`).then(({ data }) => setProjects(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-edit");
    const nameProject = document.getElementById("idduan");
    const author = document.getElementById("tacgia");
    const avatar = document.getElementById("avatar");
    const imgPreview = document.getElementById("img_preview");
    const linkGit = document.getElementById("linkgit");
    const linkPreview = document.getElementById("linkpreview");
    const Date = document.getElementById("thoigian");
    const FeedBack = document.getElementById("feedback");
    const Technology = document.getElementById("technology");
    const Category = document.getElementById("category");
    const Description = document.getElementById("mota");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await uploadFiles(avatar.files);
      const formData = {
        id: id,
        duan: nameProject.value,
        tacgia: author.value,
        avatar: urls,
        linkgit: linkGit.value,
        linkpreview: linkPreview.value,
        thoigian: Date.value,
        Feedback: FeedBack.value,
        technology: Technology.value,
        categoryId: Category.value,
        mota: Description.value
      };
      axios.put(`http://localhost:3000/projects/${id}`, formData).then(() => router.navigate("/admin/projects"));
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dkvghcobl";
      const PRESET_NAME = "upload-portfolio";
      const FOLDER_NAME = "ECMA";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload
          `;
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }

  };

  return `
    ${headerAdmin()}

    <div class="container">
    <div class="row">
    <div class="col-lg-4">
    <img src="https://mona.solutions/wp-content/uploads/2021/01/OJKB731-1.png" alt="" width="100%">
    </div>
    <div class="col-lg-8 p-3 mb-2 bg-light text-dark">
    <form id="form-edit">
  <div class="mb-3">
    <label class="form-label">Tên dự án</label>
    <input type="text" class="form-control" id="idduan" value="${projects.duan}" >
  </div>
  <div class="mb-3">
    <label class="form-label">Tác Giả</label>
    <input type="text" class="form-control" id="tacgia" value="${projects.tacgia}">
  </div>
  <div class="mb-3">
    <label class="form-label">Ảnh đại diện</label>
    <input type="file" class="form-control" id="avatar">
    <input type="hidden" id="img_preview" value="${projects.avatar}">
    <img src="${projects.avatar}"  width="50">
  </div>
  <div class="mb-3">
    <label class="form-label">Link Git</label>
    <input type="text" class="form-control" id="linkgit" value="${projects.linkgit}">
  </div>
  <div class="mb-3">
    <label class="form-label">Link Preview</label>
    <input type="text" class="form-control" id="linkpreview" value="${projects.linkpreview}">
  </div>
  <div class="mb-3">
    <label class="form-label">Thời Gian</label>
    <input type="text" class="form-control" id="thoigian" value="${projects.thoigian}">
  </div>
  <div class="mb-3">
    <label class="form-label">FeedBack</label>
    <input type="text" class="form-control" id="feedback" value="${projects.Feedback}">
  </div>
  <div class="mb-3">
    <label class="form-label">Technology/Tag</label>
    <input type="text" class="form-control" id="technology" value="${projects.technology}">
  </div>
  <div class="mb-3">
    <label class="form-label">Category</label>
    <input type="text" class="form-control" id="category" value="${projects.categoryId}">
  </div>
  <div class="mb-3">
    <label class="form-label">Mô Tả</label>
    <textarea class="form-control" id="mota" cols="10" rows="5">${projects.mota}</textarea>
  </div>
  <button type="submit" class="btn btn-danger">Thêm Dự Án</button>
</form>
<br>
    </div>
    </div>
    </div>
    `;

}

export default projectsEdit;