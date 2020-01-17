import 'bootstrap';
import projects from './components/projects/projects';
import technologies from './components/technologies/technologies';
import bioString from './components/biography/biography';
import introPage from './components/introPage/introPage';
import navBar from './components/navbar/navbar';
import '../styles/main.scss';

const init = () => {
  projects.createProjectCards();
  technologies.createTechCards();
  bioString.bioString();
  introPage.introPage();
  navBar.navbarAction();
};

init();
