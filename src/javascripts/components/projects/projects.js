import util from '../../helpers/utilities';
import getProjectData from '../../helpers/data/projectsData';
import './projects.scss';

const createProjectCards = () => {
  let domString = '';
  getProjectData.getProjectData()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card projectCard" style="width: 18rem;">
          <img src="${project.screenshot}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <p class="card-text">Created with: ${project.technologiesUsed}</p>
          <div class="text-center">
          <a href="${project.url}">Demo Site</a>
          <a href="${project.githubUrl}">GitHub code</a>
          </div>
          </div>
        </div>`;
        util.printToDom('projectsDisplay', domString);
      })
        .catch((error) => console.error(error));
    });
};

document.body.addEventListener('click', (event) => {
  const bio = document.getElementById('bioPage');
  const tech = document.getElementById('technologiesPage');
  const pro = document.getElementById('projectsPage');
  event.preventDefault();
  if (event.target.id === 'navToBio') {
    bio.classList.remove('hide');
    bio.classList.add('active');
    tech.classList.remove('active');
    tech.classList.add('hide');
    pro.classList.remove('active');
    pro.classList.add('hide');
  } else if (event.target.id === 'navToTechnologies') {
    bio.classList.remove('active');
    bio.classList.add('hide');
    tech.classList.remove('hide');
    tech.classList.add('active');
    pro.classList.remove('active');
    pro.classList.add('hide');
  } else if (event.target.id === 'navToProjects') {
    bio.classList.remove('active');
    bio.classList.add('hide');
    tech.classList.remove('active');
    tech.classList.add('hide');
    pro.classList.remove('hide');
    pro.classList.add('active');
  }
});

export default { createProjectCards };
