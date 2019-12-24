import util from '../../helpers/utilities';
import './introPage.scss';

const introPage = () => {
  let domString = '';
  domString = `
  <h1 class="introText">Gabriel Seals</h1>
  `;
  util.printToDom('introPage', domString);
};

export default { introPage };
