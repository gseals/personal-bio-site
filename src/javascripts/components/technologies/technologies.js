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
          <div class="d-flex flex-row flex-wrap justify-content-between">
          <div>
          <a href="${technology.webpageURL}" target="_blank">
            <img class="imgSize" src="${technology.image}" />
          </a>
          <h4>${technology.title}</h4>
            </div>
          </div>
        </div>`;
        util.printToDom('technologiesDisplay', domString);
      })
        .catch((error) => console.error(error));
    });
};

export default { createTechCards };