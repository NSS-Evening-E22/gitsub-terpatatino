import { packagesData, reposData, projectsData} from "./referenceData.js";

//render to dom function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const navbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
      <button type="button" class="btn btn-primary">
      <a class="nav-link" href="index.html">Overview</a>
      </button>
        <li class="nav-item">
        <button type="button" class="btn btn-primary">
          <a class="nav-link" href="repositories.html">Repositories</a>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-primary">
          <a class="nav-link" href="projects.html">Projects</a>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-primary">
          <a class="nav-link" href="packages.html">Packages</a>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

  renderToDom("#navBar", domString);
};

const packagesCard = () => {
  let domString = "";
  packagesData.forEach((currentPackage) => {
  domString += `
  
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">${currentPackage.title}</h5>
      <p class="card-text">${currentPackage.description}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    });
  renderToDom("#existingPackages", domString);
};

window.addEventListener("load", function () {
  if (window.location.pathname === "/packages.html") {
    packagesCard();
  }
});

const projectsCard = () => {
  let domString = "";
  projectsData.forEach((currentProject) => {
    domString += `<div class="card">
    <div class="card-body">
      This is some text within a card body.
    </div>
  </div>`;
  });
  renderToDom("#existingProjects", domString);
};

window.addEventListener("load", function () {
  if (window.location.pathname === "/projects.html") {
    projectsCard();
  }
});

const footer = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li><h6>2023 Gitsub, Inc.</h6>
              </li>
      <li class="nav-item">
            <a class="nav-link" href="#">Terms</a>
              <li class="nav-item">
                 <a class="nav-link" href="#">Privacy</a>
              </li>
      <li class="nav-item">
            <a class="nav-link" href="#">Security</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Status</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Docs</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Contact Gitsub</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Pricing</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">API</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Training</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">Blog</a>
              </li>
                <li class="nav-item"></li>
            <a class="nav-link" href="#">About</a>
              </li>
      </ul>
    </div>
  </div>
</nav>`;

  renderToDom("#footer", domString);
};

const startApp = () => {
  navbar();
  footer();
};

startApp();
