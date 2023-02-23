import headerAdmin from "@/component/headerAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";

const projectsAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const nameProject = document.querySelector("#idduan");
    const author = document.querySelector("#tacgia");
    const avatar = document.querySelector("#avatar");
    const linkGit = document.querySelector("#linkgit");
    const linkPreview = document.querySelector("#linkpreview");
    const Date = document.querySelector("#thoigian");
    const FeedBack = document.querySelector("#feedback");
    const Technology = document.querySelector("#technology");
    const Category = document.querySelector("#category");
    const Description = document.querySelector("#mota");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await uploadFiles(avatar.files);
      const formData = {
        duan: nameProject.value,
        tacgia: author.value,
        avatar: urls,
        linkgit: linkGit.value,
        linkpreview: linkPreview.value,
        thoigian: Date.value,
        Feedback: FeedBack.value,
        technology: Technology.value,
        categoryId: Number(Category.value),
        mota: Description.value
      };
      axios.post('http://localhost:3000/projects', formData).then(() => router.navigate("/admin/projects"));
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
    <form id="form-add">
  <div class="mb-3">
    <label class="form-label">Tên dự án</label>
    <input type="text" class="form-control" id="idduan" >
  </div>
  <div class="mb-3">
    <label class="form-label">Tác Giả</label>
    <input type="text" class="form-control" id="tacgia">
  </div>
  <div class="mb-3">
    <label class="form-label">Ảnh đại diện</label>
    <input type="file" class="form-control" id="avatar">
    <img src="" id="img_preview" height="50">
  </div>
  <div class="mb-3">
    <label class="form-label">Link Git</label>
    <input type="text" class="form-control" id="linkgit">
  </div>
  <div class="mb-3">
    <label class="form-label">Link Preview</label>
    <input type="text" class="form-control" id="linkpreview">
  </div>
  <div class="mb-3">
    <label class="form-label">Thời Gian</label>
    <input type="text" class="form-control" id="thoigian">
  </div>
  <div class="mb-3">
    <label class="form-label">FeedBack</label>
    <input type="text" class="form-control" id="feedback">
  </div>
  <div class="mb-3">
    <label class="form-label">Technology/Tag</label>
    <input type="text" class="form-control" id="technology">
  </div>
  <div class="mb-3">
    <label class="form-label">Category</label>
    <input type="number" class="form-control" id="category">
  </div>
  <div class="mb-3">
    <label class="form-label">Mô Tả</label>
    <textarea class="form-control" id="mota" cols="10" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn-danger">Thêm Dự Án</button>
</form>
<br>
    </div>
    </div>
    </div>
    `;

}

export default projectsAdd;