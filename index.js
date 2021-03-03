const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./dist/renderedOutput");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Initialize employyes array to hold team member data
let employees = [];

//questions array for inquirer
const questions = [
    {
    name: "employee_type",
    type: "list",
    message:"Please confirm employee role before proceeding:",
    choices:["Manager", "Engineer", "Intern"],
    },
    {
    name:"name",
    type:"input",
    message:"Please enter team member's name:",
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"id",
    type:"input",
    message:"Please enter the team member's employee ID:",
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"email",
    type:"input",
    message:"Please enter team member's email address:",
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"officeNumber",
    type:"input",
    message:"Please enter the Manager's office number:",
    when:(data) => data.employee_type === "Manager", //only displayif employee type manager
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"github",
    type:"input",
    message:"Please enter the Engineer's GitHub username:",
    when:(data) => data.employee_type === "Engineer", //only display if employee type Engineer
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"school",
    type:"input",
    message:"Please enter the Intern's school name:",
    when: (data) => data.employee_type === "Intern", //only display if employee type Intern
    validate: function validateInput(name){
        return name !== '';
    }
    }
]

// function to start questions and push to employees array
function getEmployee() {
    inquirer.prompt(
          [...questions]
    )
    .then ((data) => {
      try {
    //Apply relevant classes to data, push teammember objects to employees array
    let teamMember;
    if (data.employee_type === "Manager") {
        let name = data.name;
        let id = data.id;
        let email = data.email;
        let officeNumber = data.officeNumber;
        teamMember = new Manager (name, id, email, officeNumber);
        employees.push(teamMember);

    } else if (data.employee_type === "Engineer") {
       let name = data.name;
       let id = data.id;
       let email = data.email;
       let github = data.github;
        teamMember = new Engineer (name, id, email, github);
        employees.push(teamMember);
    } else {
        let name = data.name;
        let id = data.id;
        let email = data.email;
        let school = data.school;
        teamMember = new Intern (name, id, email, school);
        employees.push(teamMember);

    };
    //ask users if they want to add more team members
    inquirer.prompt(
        [{
        name:"add_more",
        type:"list",
        message:"Would you like to add another team member?",
        choices:["Yes", "No"]
        },
        ]
    )
      .then ((data) => {
        //if statement to end inquirer and call function to render data if 'no'
        //chosen, or redirect to questions if more employees need to be added
      if (data.add_more === 'No') {
        pushAnswersToRender(employees);
      } else {
        getEmployee();
      }
    })
    } catch (error) {
    console.log(error);
    }
    }); 
    };
       
//function to render data from prompt ansers to html page
function pushAnswersToRender(employees) {
try {
    fs.writeFileSync('index.html', generateFile(employees));
    console.log('Success! Your team profiles page has been created!');
    //console.log(employees);
    } catch (error) {
          console.log(error);
    };
}

// Function call to initialize app
function init () {
    inquirer.prompt(
        [{
        name:"welcome_message",
        type:"list",
        message:"Welcome to your team profile builder! To start building your team, please enter information for your team Manager first. Ready to begin?",
        choices:["Yes"]
        },
        ]
        )
        .then ((data) => {
          try {   
            if (data.welcome_message === "Yes") {
            getEmployee(data);
            }
        } catch (error) {
        console.log(error);
        }
       })
    }

    init()
    

