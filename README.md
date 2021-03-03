# Team Profile Generator
![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
![badge](https://img.shields.io/badge/license-MIT-orange)

A node.js command line application that takes in user inputted data about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Description

This application had several parts: it made use of the npm inquirer package to prompt the user with a series of questions before parsing the recieved answers. The data was organised using javascript classes and rendered to an HTML webpage. Unit testing was also carried out using the npm Jest library.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
 To run this command line application, two npm packages are required: 'inquirer' amd 'Jest'. To install the package in the relevant directory, use the command 'npm install' from your command line (the package.json download is already provided so only installation is required).

## Usage 
To run the application, use the command 'node index.js' from your command line. You will then be presented with a series of prompts. Each prompt must be answered for the application to proceed, validation methods have been added to the index.js file to prevent user from moving forward with the application if no input is given. The program will loop through the questions every time the user chooses to add another team member, program will end once the user chooses 'no' for the 'add more team members' question.
Each employee type also has questions specific to that category which are only prompted when the relevant employee type is chosen. 
Once all prompts have been answered, an HTML will be generated with each team member's details displayed in separate cards. This file will be saved as 'index.html' within the working directory.
Link to video demo of how to run the application can be found here: [Video Demo]()

## Contributing
 ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
 
 Link to Contributor's Covenant: https://www.contributor-covenant.org/version/2/0/code_of_conduct/

## Tests
Unit tests have been written for the employee.js, engineer.js, manager.js and intern.js files and can be found in the 'test' folder. The tests check to make sure the classes, the constructors within those classes and class methods work as expected. To run tests 'jest' npm must be installed, this can be done by running 'npm install' from the command line as the downl;oad folder is already provided. To run tests use 'npm run test' from the command line. 
 
## License
![badge](https://img.shields.io/badge/license-MIT-orange)
   
Copyright (c) [2021] [Nida Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
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
SOFTWARE. 

## Questions

The repo for this project can be found here: https://github.com/nidaqg/team-profile-generator

For any questions or to report issues, email me at: nidaqg@gmail.com
