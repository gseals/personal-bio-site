import 'bootstrap';
import projects from './components/projects';
import '../styles/main.scss';

const init = () => {
  projects.createProjectCards(projects);
};

init();
