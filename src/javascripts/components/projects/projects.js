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
                  <a href="${project.url}" rel="noopener noreferrer" target="_blank role="button" class="btn btn-primary">Demo Site</a>
                  <a href="${project.githubUrl}" rel="noopener noreferrer" target="_blank" role="button" class="btn btn-primary">GitHub code</a>
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

export default { createProjectCards };
