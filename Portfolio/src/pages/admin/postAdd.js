import headerAdmin from "@/component/headerAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";
const postAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const Title = document.querySelector("#title");
    const Author = document.querySelector("#author");
    const Image = document.querySelector("#images");
    const Description = document.querySelector("#description");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await uploadFiles(Image.files);
      const formData = {
        title: Title.value,
        author: Author.value,
        image: urls,
        description: Description.value
      };
      axios.post('http://localhost:3000/posts', formData).then(() => router.navigate("/admin/postAdmin"));
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dkvghcobl";
      const PRESET_NAME = "upload-portfolio";
      const FOLDER_NAME = "Post";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
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
  }

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
    <label class="form-label">Tiêu đề</label>
    <input type="text" class="form-control" id="title" >
  </div>
  <div class="mb-3">
    <label class="form-label">Tác Giả</label>
    <input type="text" class="form-control" id="author" >
  </div>
  <div class="mb-3">
    <label class="form-label">Ảnh</label>
    <input type="file" class="form-control" id="images" >
  </div>
  <div class="mb-3">
    <label class="form-label">Mô Tả</label>
    <input type="text" class="form-control" id="description" >
  </div>
  <button type="submit" class="btn btn-danger">Thêm Bài Viết</button>
</form>
    </div>
    </div>
    </div>
  `;

}

export default postAdd;