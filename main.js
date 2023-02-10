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

const startApp = () => {
  navbar();
};

startApp();
