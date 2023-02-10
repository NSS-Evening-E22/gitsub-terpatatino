console.log("Hello everyone!");

console.log("tori made a branch");

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
