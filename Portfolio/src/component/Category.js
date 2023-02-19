import { useEffect } from "@/lib";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".tm-paging-link");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });
    return `
    <div class="row tm-mb-90">
            <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
            <a href="javascript:void(0);" class="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
                <div class="tm-paging d-flex">
                ${categories
            .map(({ name, id }) => {
                return `<button data-id="${id}" class="tm-paging-link">${name}</button>`;
            }).join("")}
                </div >
    <a href="javascript:void(0);" class="btn btn-primary tm-btn-next">Next Page</a>
            </div >
            
        </div >
    `;

}

export default Category;