function generatePage(answers) {
  return `
  # ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  ## Description 
  ${answers.description}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)
  ## Installation
  ${answers.installation}
  ## Usage 
  ${answers.usage}
  ## Contributors
  ${answers.contributors}
  ## License
  This project is cover under ${answers.license} License (https://choosealicense.com/licenses/${answers.license}/)
  ## Test 
  ${answers.tests}
  ## Questions
  
  If you have any Questions, please do not hesitate to contact me one: 
  -Github: [${answers.github}](https://github.com/${answers.github})
  
  -Email: ${answers.email}
  `;

}

module.exports = generatePage;