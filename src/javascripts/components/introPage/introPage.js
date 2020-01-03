import util from '../../helpers/utilities';
import './introPage.scss';

const introPage = () => {
  let domString = '';
  domString = `
  <div class="introMiddle">
  <h1 class="introText">Gabriel Seals</h1>
  <div class="underline"></div>
  <h2 class="introText">Software and Web Developer | Nashville Tennessee</h2>
  </div>
  `;
  util.printToDom('introPage', domString);
};

export default { introPage };
