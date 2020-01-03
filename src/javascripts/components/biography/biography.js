import util from '../../helpers/utilities';
import './biography.scss';
import photo from '../../../assets/profilePic.jpg';

const bioString = () => {
  let domString = '';
  domString = `
  <div class="row">
  <div class="col-6">
  <img id="bioImg" src="${photo}"/>
  </div>
  <div class="col-6">
  <div class="bioBackground">
  <p>
      I grew up in a town of roughly 10,000 people. We raised chickens and drove four-wheelers. I decided to go to college because it was what everyong
      else was doing and I didn't stop to question the path: high school, college, job, family, kids, etc. College challenged me and allowed me to meet a
      lot of great people, but I did not put in the amount of time or dedication asked of me so I coasted. It wasn't until I really began considering my place,
      effect on, and usefulness in the universe that I actually started putting effort in. I attended grad school both as a way to further my education and as a way
      to prove I could do the work, contribute interesting ideas, provide effective feedback, and work towards a goal. I bring that mindset into my time at NSS.
    </p>
  </div>
  </div>
  </div>
  </div>`;
  util.printToDom('bioDisplay', domString);
};

export default { bioString };
