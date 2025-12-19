const personDetails = {
    personal: {
      firstName: "Maxime",
      lastName: "ROSE",
      email: "maxime.rose22@gmail.com",
      age: 17,
      languages: "French, English",
      phone: "+33 665377709",
      contactMail: "maxime.rose22@gmail.com",
      address: "Paris, France",
      nationality: "Francaise",
      freelance: "Will be Available soon 😉",
      description: "Je suis un étudiant passionné en développement web, désireux d'apprendre et de créer des expériences web exceptionnelles. Je suis toujours enthousiaste à l'idée de relever de nouveaux défis et d'améliorer mes compétences dans le monde en constante évolution du développement web."
    },
    professional: {
      yoe: 2,
      completedProjects: 16,
      happyCustomers: 4,
      awardsWon: 0,
    },
    academic: {
      college: {
        name: "LET'S SEE 😉",
        duration: "2024-2028(expected)",
        course: "",
      },
      school: {
        name: "EDEN SCHOOL(ECOLE DU DIGITAL ET DU NUMERIQUE)",
        duration: "2024-2027",
        course: "Formation"
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 95,
      "javascript": 80,
      "css": 90,
      "nodejs": 10,
      "wordpress": 85,
      "python": 20,
      "gitAndGithub": 50,
      "vscode": 100, 
      // PHP
      },
    social: {
      github: "https://github.com/Mvvs95",
      linkedin: "https://www.linkedin.com/in/maxime-rose-3250833a1/",
      codepen: "",
      telegram: ""
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');