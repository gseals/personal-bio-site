import util from '../helpers/utilities';

const createProjectCards = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    const object = arr[i];
    if (object.available === true) {
    // if (arr.available === true) {
      domString = `
<div class="card" style="width: 18rem;">
<img src="${object.screenshot}" class="card-img-top" alt="${object.title}">
<div class="card-body">
  <h5 class="card-title">${object.title}</h5>
  <p class="card-text">${object.description}</p>
  <p class="card-text">Created with: ${object.technologiesUsed}</p>
  <button href="${object.url}" class="btn btn-primary">Check it out</button>
</div>
</div>
`;
      util.printToDom(domString, 'projectsDisplay');
    }
  }
};

document.body.addEventListener('click', (event) => {
  const bio = document.getElementById('bioPage');
  const tech = document.getElementById('technologiesPage');
  const pro = document.getElementById('projectsPage');
  event.preventDefault();
  if (event.target.id === 'navToBio') {
    bio.classList.remove('hide');
    bio.classList.add('active');
    tech.classList.remove('active');
    tech.classList.add('hide');
    pro.classList.remove('active');
    pro.classList.add('hide');
  } else if (event.target.id === 'navToTechnologies') {
    bio.classList.remove('active');
    bio.classList.add('hide');
    tech.classList.remove('hide');
    tech.classList.add('active');
    pro.classList.remove('active');
    pro.classList.add('hide');
  } else if (event.target.id === 'navToProjects') {
    bio.classList.remove('active');
    bio.classList.add('hide');
    tech.classList.remove('active');
    tech.classList.add('hide');
    pro.classList.remove('hide');
    pro.classList.add('active');
  }
});

export default { createProjectCards };
