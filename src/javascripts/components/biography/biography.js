import util from '../../helpers/utilities';
import './biography.scss';
import photo from '../../../assets/profilePic.jpg';

const bioString = () => {
  let domString = '';
  domString = `
  <div>
  <h3 class="name">Hi! I'm Gabe</h3>
  </div>
  <div class="row bioBlock">
  <div class="col-4">
  <img id="bioImg" src="${photo}"/>
  </div>
  <div class="col-8">
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
  literary magazine on the West Coast, acted as poetry judging for local contests,
  assisted professors in grading essays, and published poems in literary journals
  like BOAAT, Frontier Poetry, and Rockvale Review.
  </p>
  <p>
  In late 2018, I began to seriously consider how my time should be spent:
  should I continue waiting for opportunities to become available, or should
  I seek an opportunity and pursue it with the intention of spending the rest
  of my life doing it? Luckily, I had some experience with coding as a graduate
  school class required us to build basic HTML and CSS websites. As the
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
