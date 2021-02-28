const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./dist/renderedOutput");

let employees = [];

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
    name:"office_number",
    type:"input",
    message:"Please enter the Manager's office number:",
    when:(data) => data.employee_type === "Manager",
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"Engineer_github",
    type:"input",
    message:"Please enter the Engineer's GitHub username:",
    when:(data) => data.employee_type === "Engineer",
    validate: function validateInput(name){
        return name !== '';
    }
    },
    {
    name:"Intern_school",
    type:"input",
    message:"Please enter the Intern's school name:",
    when: (data) => data.employee_type === "Intern",
    validate: function validateInput(name){
        return name !== '';
    }
    }
]

// function to start questions and create employees array
function getEmployee() {
    inquirer.prompt(
          [...questions]
    )
    .then ((data) => {
      try {
          //push employee data to employee array,prompt to ask if user wants
          //to add more employees
    employees.push(data);
    inquirer.prompt(
        [{
        name:"add_more",
        type:"list",
        message:"Would you like to add another employee?",
        choices:["Engineer", "Intern", "None"]
        },
        ]
    )
      .then ((data) => {
        //if statement to end inquirer and call function to render data if 'none'
        //chosen, or redirect to questions if more employees need to be added
      if (data.add_more === 'None') {
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
       


function pushAnswersToRender(data) {
try {
    //fs.writeFileSync('index.html', generateFile(data));
    console.log('Success! Your team profiles page has been created!');
    console.log(employees);
    } catch (error) {
          console.log(error);
    };
}



// Function call to initialize app
getEmployee();
