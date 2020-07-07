import util from '../../helpers/utilities';
import techData from '../../helpers/data/techData';
import './technologies.scss';

const createTechCards = () => {
  let domString = '';
  techData.getTechData()
    .then((technologies) => {
      technologies.forEach((technology) => {
        domString += `
        <div class="cardSize">
          <p class="d-flex flex-row flex-wrap justify-content-between text-center">
          <div class="techImg">
          <a href="${technology.webpageURL}" rel="noopener noreferrer" title="${technology.title}" target="_blank">
            <img class="imgSize" src="${technology.image}" />
          </a>
            </div>
          </p>
        </div>`;
        util.printToDom('technologiesDisplay', domString);
      })
        .catch((error) => console.error(error));
    });
};

export default { createTechCards };
