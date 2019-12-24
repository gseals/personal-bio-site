import util from '../../helpers/utilities';
import './biography.scss';
import photo from '../../../assets/profilePic.jpg';

const bioString = () => {
  let domString = '';
  domString = `
  <img id="bioImg" src="${photo}"/>
  <h3>Hi! I'm Gabe</h3>
  <!--What is your background? --> <!--edit and revise for clarity and specificity-->
  <h4>Background</h4>  
  <div class="bioBackground">
  <p>
      I grew up in a town of roughly 10,000 people. We raised chickens and drove four-wheelers. I decided to go to college because it was what everyong
      else was doing and I didn't stop to question the path: high school, college, job, family, kids, etc. College challenged me and allowed me to meet a
      lot of great people, but I did not put in the amount of time or dedication asked of me so I coasted. It wasn't until I really began considering my place,
      effect on, and usefulness in the universe that I actually started putting effort in. I attended grad school both as a way to further my education and as a way
      to prove I could do the work, contribute interesting ideas, provide effective feedback, and work towards a goal. I bring that mindset into my time at NSS.
    </p>
  </div>
  <!--Why do you want to go into development?--> <!--edit and revise for clarity and specificity-->
  <h4 class="background">Why web development?</h4>
  <div class="bioBackground">
  <p>
    I believe people should have skills or a craft that they work to develop and evolve.
  </p>
  </div>
  <!--What do you love about development?--> <!--edit and revise for clarity and specificity-->
  <h4 class="background">What do you love about development?</h4>
  <div class="bioBackground">
  <p>
    There's an answer and that answer isn't based on longwinded thoughts or postulations. There's an answer and that does
    not mean it is easy to find. There's an answer and there may be more than one. The satisfaction with programming comes from figuring things out
    and figuring things out takes time and, as opposed to some fields, time put in yields results and a growing knowledge base that can be called
    on to perform functions and activities. Being able to create something and immediately test it multiplies the feeling of accomplishment rather than
    having to wait weeks before finding out the result of your efforts. Coding/programming can be done from anywhere. The logic and visualization it allows
    me to utilize is similar to writing, but more immediate in its results and effects.
  </p>
  </div>`;
  util.printToDom('bioDisplay', domString);
};

export default { bioString };
