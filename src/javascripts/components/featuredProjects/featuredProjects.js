import util from '../../helpers/utilities';
import getProjectData from '../../helpers/data/projectsData';
import './featuredProjects.scss';

const createFeaturedProjectCards = () => {
  let domString = '';
  getProjectData.getProjectData()
    .then((featuredProjects) => {
      featuredProjects.forEach((featuredProject) => {
        if (featuredProject.isFeatured === true) {
          domString += `
          <div class="card featuredProjectCard mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${featuredProject.screenshot}" class="card-img-top" alt="${featuredProject.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${featuredProject.title}</h5>
                  <p class="card-text">${featuredProject.description}</p>
                  <p class="card-text d-inline">Created with: ${featuredProject.technologiesUsed}</p>
                  <div class="d-flex justify-content-between">
                  <a href="${featuredProject.url}" rel="noopener noreferrer" target="_blank" role="button" class="btn btn-primary">Demo Site</a>
                  <a href="${featuredProject.githubUrl}" rel="noopener noreferrer" target="_blank" role="button" class="btn btn-primary">GitHub code</a>
                </div>
                </div>
              </div>
            </div>
          </div>`;
          util.printToDom('featuredProjectsDisplay', domString);
        }
      })
        .catch((error) => console.error(error));
    });
};

export default { createFeaturedProjectCards };
