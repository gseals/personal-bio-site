import util from '../../helpers/utilities';
import getProjectData from '../../helpers/data/projectsData';
import './projects.scss';

const createProjectCards = () => {
  let domString = '';
  getProjectData.getProjectData()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
          <div class="card projectCard mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${project.screenshot}" class="card-img-top" alt="${project.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description}</p>
                  <p class="card-text d-inline">Created with: ${project.technologiesUsed}</p>
                  <div class="d-flex justify-content-between">
                  <a href="${project.url}" target="_blank role="button" class="btn btn-primary">Demo Site</a>
                  <a href="${project.githubUrl}" target="_blank" role="button" class="btn btn-primary">GitHub code</a>
                </div>
                </div>
              </div>
            </div>
          </div>`;
        util.printToDom('projectsDisplay', domString);
      })
        .catch((error) => console.error(error));
    });
};

// document.body.addEventListener('click', (event) => {
//   const intro = document.getElementById('introPage');
//   const bio = document.getElementById('bioPage');
//   const tech = document.getElementById('technologiesPage');
//   const pro = document.getElementById('projectsPage');
//   event.preventDefault();
//   if (event.target.id === 'navToIntro') {
//     intro.classList.remove('hide');
//     intro.classList.add('active');
//     bio.classList.remove('active');
//     bio.classList.add('hide');
//     tech.classList.remove('active');
//     tech.classList.add('hide');
//     pro.classList.remove('active');
//     pro.classList.add('hide');
//   } else if (event.target.id === 'navToTechnologies') {
//     intro.classList.remove('active');
//     intro.classList.add('hide');
//     bio.classList.remove('active');
//     bio.classList.add('hide');
//     tech.classList.remove('hide');
//     tech.classList.add('active');
//     pro.classList.remove('active');
//     pro.classList.add('hide');
//   } else if (event.target.id === 'navToProjects') {
//     intro.classList.remove('active');
//     intro.classList.add('hide');
//     bio.classList.remove('active');
//     bio.classList.add('hide');
//     tech.classList.remove('active');
//     tech.classList.add('hide');
//     pro.classList.remove('hide');
//     pro.classList.add('active');
//   } else if (event.target.id === 'navToBio') {
//     intro.classList.remove('active');
//     intro.classList.add('hide');
//     bio.classList.remove('hide');
//     bio.classList.add('active');
//     tech.classList.remove('active');
//     tech.classList.add('hide');
//     pro.classList.remove('active');
//     pro.classList.add('hide');
//   }
// }); Need to remove?

export default { createProjectCards };
