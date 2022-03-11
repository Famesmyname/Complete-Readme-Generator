const inquirer = require('inquirer');
const fs = require('fs');
const thisyear = new Date().getFullYear();


// The licenses to be used.
const liscMIT = `Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

const liscGNU = `
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`

const liscApache = ` Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

let lscChoice = (answers) => {
  if (answers.license === 'MIT'){
    lscChoice = liscMIT}
  else if (answers.license === 'Apache'){
    lscChoice = liscApache}
  else if (answers.liscence === "GNUv3"){
    lscChoice = liscGNU
  }
};

// This is the inquirer questions asked of the user when app is initiallized.
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your full name?'
    },
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
      name: 'installation',
      message: 'Please provide instructions how to install this project.'
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
      choices: ["Apache", "MIT", "GNUv3"]
    },
    {
      type: 'input',
      name: 'test',
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


// This is the readme layout below using the answers from the inquirer as variables.

const generateReadme = ({ name, title, description, installation, usage, contribution, test, github, email }) =>
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
  ## Contributions
  ${contribution}

  ---
  ## Test
  ${test}

  ---
  ## Questions 

  Please send any questions by email to ${email}.
  Github https://github.com/${github}.

  ---
  ## License
  
  Copyright (C) ${thisyear}  ${name}

  ${liscMIT}
  
`;

// This is the application initialization where the user is asked a series of questions then it is written via the generateReadme which uses the answers to generate readme.
const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('./Generated-Readme/readme.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to /Generated-Readme/readme.md'))
    .catch((err) => console.error(err));
};

init();
