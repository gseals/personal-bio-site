//to do
//make nav bar
//make display step through each project that pages through projects created.

const projects = [
    {
        title: "Cool Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb5s_PQ6mKy20Xrjh-o3iP_15ksWq-DVkufDjuiJvpeSabzIq", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb5s_PQ6mKy20Xrjh-o3iP_15ksWq-DVkufDjuiJvpeSabzIq", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb5s_PQ6mKy20Xrjh-o3iP_15ksWq-DVkufDjuiJvpeSabzIq", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb5s_PQ6mKy20Xrjh-o3iP_15ksWq-DVkufDjuiJvpeSabzIq", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjb5s_PQ6mKy20Xrjh-o3iP_15ksWq-DVkufDjuiJvpeSabzIq", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
};

const createProjectCards = (arr) => {
    let domString ='';
    for (let i = 0; i < arr.length; i++) {
        const object = arr[i]
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
    `
    printToDom(domString, 'projectsPage');
    }
}
}

document.addEventListener('click', function(e){
  let bio = document.getElementById('bioPage');
  let tech = document.getElementById('technologiesPage');
  let pro = document.getElementById('projectsPage');
  if (event.target.id === navToBio) {
    bio.classList.add('show');
    tech.classList.add('hide');
    pro.classList.add('hide');
  } else if (event.target.id === navToTechnologies) {
    bio.classList.add('hide');
    tech.classList.add('show');
    pro.classList.add('hide');
  } else if (event.target.id === navToProjects) {
    bio.classList.add('hide');
    tech.classList.add('hide');
    pro.classList.add('show');
  }
})

const init = () => {
  createProjectCards(projects);

}
init();
