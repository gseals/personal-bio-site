import util from '../../helpers/utilities';
import './biography.scss';
import photo from '../../../assets/profilePic.jpg';

const bioString = () => {
  let domString = '';
  domString = `
  <div>
  <h3 class="name">Hi! I'm Gabe.</h3>
  </div>
  <div class="bioBlock">
  <div class="modColImg text-center">
  <img id="bioImg" src="${photo}"/>
  <a href="mailto:webdevseals@gmail.com" target="_blank" class="fas fa-mail-bulk"></a>
  <a href="https://www.linkedin.com/in/gabriel-seals-063238188" target="_blank" class="fab fa-linkedin-in"></a>
  <a href="https://github.com/gseals" target="_blank" class="fab fa-github"></a>
  </div>
  <div class="modCol">
  <div class="bioBackground bioParaText">
  <p>
  I graduated Tennessee Technological University with a degree in English Literature,
  married the sweetest girl I’d ever met, and swiftly moved to Nashville.
  </p>
  <p>
  While my wife pursued her doctorate, I pursued my Masters in
  English through Belmont University. I attended grad school both
  as a way to further my education and as a way to prove I could do
  the work, contribute interesting ideas, provide effective feedback,
  and work towards a goal. My wife and I graduated in 2017.
  </p>
  <p>
  The road from there to here looks like this: I did some remote editing for a
  literary magazine on the West Coast, acted as poetry judge for local contests,
  assisted professors in grading essays, and published poems in literary journals
  like <a href="https://rockvalereview.com/issues/issue-1/kintsugi-by-gabriel-seals/" target="_blank">Rockvale Review</a>, 
  <a href="http://www.boaatpress.com/coronation" target="_blank">BOAAT</a>,
  and <a href="https://www.frontierpoetry.com/2018/10/05/poetry-gabriel-seals/" target="_blank">Frontier Poetry</a>.
  </p>
  <p>
  In late 2018, I began to seriously consider how my time should be spent:
  should I continue waiting for opportunities to become available, or should
  I seek an opportunity and pursue it with the intention of spending the rest
  of my life doing it? This search led me to NSS, to an info session in December, 
  to a JumpStart in March, and to the Bootcamp in August.
  My path to software development began in graduate
  school as one seminar required us to build basic HTML and CSS websites. As the
  Office Administrator for Belmont University’s campus clinic, I serve as the
  point person for changes in our EHR - Medicat - while also wielding control
  over our sector of Hannon Hill’s Cascade Content Management System.
  </p>
  <p>
  The thing that excites me most about development rests on the idea that
  an answer exists even though it may take time to locate it. The satisfaction
  comes from figuring things out and, while figuring things out takes time, the
  amount of time invested in finding the solution yields both results and a growing
  knowledge-base that can be called upon to complete future tasks. In essence, time
  in equals time out and then some.</p>
  </p>
  </div>
  </div>
  </div>
  </div>`;
  util.printToDom('bioDisplay', domString);
};

export default { bioString };
