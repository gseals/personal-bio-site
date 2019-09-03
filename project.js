console.log('establishing link')

//This is the dummy data

const projects = [
    {
      title: "Cool Project", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
      title: "Cool Project", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
      title: "Cool Project", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    ];
    
    //functions below: a feature to print to the HTML setup and a loop to access the card data
    
    const printToDom = (toPrint, divId) => {
        document.getElementById(divId).innerHTML = toPrint
    }
    
    const createProjectCards = () => {
        
    }
    
    
    
    
    