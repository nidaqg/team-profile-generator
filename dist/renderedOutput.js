const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');



function renderCards (employees) {
            
    for (var i=0; i<employees.length; i++) {
        var cardHTML = `
        <section class="col-lg-4">
        <section class="card m-4 teamCard">
        <section class="card-body">
        <h5 class="card-title">${employees[i].name}</h5>
        <p class="card-text">ID: ${employees[i].id}</p>
        <p class="card-text">Email: ${employees[i].email}</p>
        `
        if (employees[i].officeNumber) {
        cardHTML += `
        <p class="card-text">Office Number: ${employees[i].officeNumber}</p>
        </section>
        </section>
        </section>
        `;
        }else if (employees[i].github) {
            cardHTML += `
        <p class="card-text">GitHub: ${employees[i].github}</p>
        </section>
        </section>
        </section>
        `;
        } else if (employees[i].school) {
            cardHTML += `
        <p class="card-text">School: ${employees[i].school}</p>
        </section>
        </section>
        </section>
        `;
        }
return cardHTML;
}

   
}

function generateFile(employees) {
    return `
    <!DOCTYPE html>
<html lang="en-us">
<head>
 <title>Team Profiles Page</title>
 <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <header class="header">
      <h1>Team Profiles</h1>       
    </header>
    <main>
      <section class="row justify-content-center">
      <section class="mt-4 mb-4 col-md-8 text-center justify-content-center">
      <section class="row">
      ${renderCards(employees)}
      </section>
      </section>
      </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>
    `
}


module.exports = generateFile;