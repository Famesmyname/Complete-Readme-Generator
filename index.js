const inquirer = require('inquirer');
const fs = require('fs');



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use your project.'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the guidelines for contributions to this project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: [Apache, MIT, GNUv3]
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions tests that could be run.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your contact email',
    },
  ]);
};

const generateReadme = ({ title, description, installation, usage, contribution, test, location, licence, github, email }) =>
  `# ${title}
  
  ## Description
  
  ${description}

  ---
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Test](#test)
  - [Questions](#questions)

  ---
  ## Installation
  
  ${installation}
  ---
  ## Usage
  ${usage}

  ---
  ## License
  
  The last section of a high-quality README file is the license.
  
  ---
  ## How to Contribute
  ${contribution}

  ---
  ## Test
  ${test}

  ---
  ## Questions 

  Please send any questions by email to ${email}.
  Github https://github.com/${github}.
`
