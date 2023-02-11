
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

const repoCardsOnDom = () => {
  let domString = "";
  for (const repo of reposData) {
    domString += `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">"${repo.title}"</div>
    <div class="card-body">
      <h5 class="card-title">"${repo.tags}"</h5>
      <p class="card-text">"${repo.description}"</p>
    </div>
  </div>`;
  }

  renderToDom("#existingRepos", domString);
};

window.addEventListener("load", function () {
  if (window.location.pathname === "/repositories.html") {
    repoCardsOnDom();
  }
});

const profileCard = () => {
  let domString = `<div class="card" style="width: 18rem;">
  <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" class="card-img-top" alt="..." id='profileCardImg'>
  <div class="card-body">
    <h5 class="card-title">John Johnson</h5>
    <p class="card-text">Hello im John, a highly motivated individual coupled with strong technical abilities.</p>
    <button id="profileBtn">Follow</button> <button id="profileBtn">Sponsor</button>
      <div id="pf-stats">
       <p id="profileStat">2.4k Followers</p>
       <p id="profileStat">33 Following</p>
       <p id="profileStat">63 Favorites</p>
      </div>
      <div id=pf-contact>
        <p id="contact-pf-stats">Los Angeles, California</p>
        <p id="contact-pf-stats">github@johnjohnson.com</p>
        <p id="contact-pf-stats">http://wwwjohncodes.com</p>
        <p id="contact-pf-stats">@johnthesavagecoder</p>
      </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
     <h4>Highlights</h4>
       <p id="highlight">Artic Code Vault Contributor</p>
       <p id="highlight">GitHuub Star</p>
        <p id="highlight">GitHub Pro</p>
    </li>
    <li class="list-group-item">
      <h4>Organizations</h4>
        <div id="org-img">
          <img src="https://ichef.bbci.co.uk/images/ic/1920x1080/p03t1sm8.jpg" alt="" id="org">
          <img src="https://thisisnotadvertising.files.wordpress.com/2012/02/tumblr_lpgq8fjbov1qfw54v.jpg" alt="" id="org">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NDp6Gtg-cZXIPLqS76Ez9rk9xCo35m3LAg&usqp=CAU" alt="" id="org">
        </div>
    </li>
    <li class="list-group-item">
      <h4>Sponsors</h4>
        <div id="spons-imgs">
          <img src="https://media.istockphoto.com/id/119094519/photo/portrait-of-a-young-handsome-man.jpg?s=612x612&w=0&k=20&c=aVOPnsCkhlzgitekfgVVK4MdGGP8MaST83u-snJZv5Y=" alt="" id="sponsor">
          <img src="https://burst.shopifycdn.com/photos/portrait-of-male-model.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="" id="sponsor">
          <img src="https://media.istockphoto.com/photos/beautiful-middle-aged-woman-with-clean-wrinkled-skin-picture-id1310459525?b=1&k=20&m=1310459525&s=612x612&w=0&h=G6ynEpzATIgbVbUXJzXiQBkvYluEPAlCRNIJeP-fYHk=" alt="" id="sponsor">
          <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczUzLWFlLWFvbS0wMDkwMDYuanBn.jpg?s=Bow3j-xEjuHNmVV9WcE1CLH2b-bg7GuwtvDSrVPpnhk" alt="" id="sponsor">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/003/491/890/small/closeup-face-portrait-of-pretty-blonde-girl-with-fresh-skin-horizontal-image-free-photo.jpg" alt="" id="sponsor">
          <img src="https://media.istockphoto.com/id/1165314753/photo/born-and-bred-in-the-city.jpg?s=612x612&w=0&k=20&c=YVgFueYMLeUg1rXNIJWtMmKOgb-8EHAgyzK9sPEaaiM=" alt="" id="sponsor">
          <img src="https://media.istockphoto.com/photos/beauty-portrait-of-young-brunette-picture-id1309405105?b=1&k=20&m=1309405105&s=612x612&w=0&h=LqbVRuf1Y9BfeAv7z9witu0b2KAMpQNClOLt1hdxxDE=" alt="" id="sponsor">
        </div>
    </li>
  </ul>
</div>`
renderToDom('#profile', domString)
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
  profileCard();
  repoCardsOnDom();
  footer();
};

startApp();
