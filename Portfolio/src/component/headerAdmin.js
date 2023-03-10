const headerAdmin = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a data-id="navigo" class="navbar-brand" href="/"><h1 class="h3 mb-2 text-gray-800">ADMIN</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/admin/projects" data-id="navigo">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#/admin/categories" data-id="navigo">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#/admin/postAdmin" data-id="navigo">Posts</a>
        </li>
        <li class="nav-item">
        <a data-id="navigo" class="nav-link " href="#/admin/infomation/inFo" >Infomation</a>
      </li>
      <li class="nav-item">
        <a data-id="navigo" class="nav-link " href="#/admin/resume/resume" >Resume</a>
      </li>
      <li class="nav-item">
        <a data-id="navigo" class="nav-link" href="#/admin/service/serviceAdmin" >Service</a>
      </li>
      <li class="nav-item">
        <a data-id="navigo" class="nav-link" href="#/admin/worked/worked" >Worked</a>
      </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div>
      <button class="btn btn-primary">Logout</button>
      </div>
    </div>
  </div>
</nav>
  <br>
  `;
}

export default headerAdmin;