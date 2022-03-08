const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    }
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project?'
    }
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use your project.'
    }
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the guidelines for contributions to this project?'
    }
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions on how to use your project.'
    }
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your contact email',

  }
  ])
}

const generateReadme = ({ title, description, installation, usage, contribution, test, location, licence, github, linkedin }) =>
  `# ${title}

  ## Description
  
  ${description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#how to contribute)
  - [Contact](#contact)
  
  ## Installation
  
 ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  s
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  

  ## How to Contribute
  
  ${contribution}
  