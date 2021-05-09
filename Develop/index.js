const inquirer = require('inquirer');
const fs = require('fs');
const style = require('../assets/style')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function init() {
    buildHtml();
    team();
}

// Questions array for inquirer to pass that will be used to fill in the user cards
function team() {
    inquirer.prompt ([        
        {
            name: "teamname",
            message: "Please Enter Your Team's Name?"
        }
    ])
        .then(function (data) {
            const teamName = data.teamname;
            finishedTeamAnswers.push(teamName)
            addManager();
        });
}
function addManager() {
    inquirer.prompt ([
        {
            name: "name",
            message: "Please enter the manager's name: "
        },
        {
            name: "id",
            type: "number",
            message: "Please enter the manager's ID number: "
        },
        {
            name: "email",
            message: "Please enter the manager's email address: "
        },
        {
            name: "officeNumber",
            type: "number",
            message: "Please enter the manager's office phone number (including area code): "
        }
    ])
        .then(function (data) {
            let manager = new Manager(data.name,data.id,data.email,data.officeNumber)
            finishedTeamAnswers.push(manager);
            addTeamMember();
        });
}
function addTeamMember() {
    inquirer.prompt([
        {
            name: "selectMember",
            message: "Please select which team member you would like to add next: ",
            type: "checkbox",
            choices: ["Add an Employee", "Add an Engineer", "Add an Intern", "My team is complete!"]
        }
    ])
        .then(function (data) {
            let teamMember = "";
            if (data.selectMember == "Add an Employee") {
                teamMember = addEmployee();
            } else if (data.selectMember == "Add an Engineer") {
                teamMember = addEngineer();
            } else if (data.selectMember == "Add an Intern") {
                teamMember = addIntern();
            } else {
                buildHtml();
            }
        });
}
function addEmployee() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please enter the employee's name: "
        },
        {
            name: "id",
            type: "number",
            message: "Please enter the employee's ID number: "
        },
        {
            name: "email",
            message: "Please enter the employee's email address: "
        }
    ])
        .then (function (data) {
            let employee = new Employee(data.name,data.id,data.email);
            finishedTeamAnswers.push(employee);
            addTeamMember();
        });
}
function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please enter the engineer's name: "
        },
        {
            name: "id",
            type: "number",
            message: "Please enter the engineer's ID number: "
        },
        {
            name: "email",
            message: "Please enter the engineer's email address: "
        },
        {
            name: "github",
            message: "Please enter the engineer's Git Hub: "
        }
    ])
        .then (function (data) {
            let engineer = new Engineer(data.name,data.id,data.email,data.github);
            finishedTeamAnswers.push(engineer);
            addTeamMember();
        });
}
function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please enter the intern's name: "
        },
        {
            name: "id",
            type: "number",
            message: "Please enter the intern's ID number: "
        },
        {
            name: "email",
            message: "Please enter the intern's email address: "
        },
        {
            name: "school",
            message: "Please enter the intern's college/university if applicable: "
        }
    ])
        .then (function (data) {
            let intern = new Intern (data.name,data.id,data.school,data.email);
            finishedTeamAnswers.push(intern);
            addTeamMember();
        })
        .catch (error => {
            if (error.isTtyError) {
                console.log(error.isTtyError)
            } else {
                console.log(error);
            }
        });
}

       
let finishedTeamAnswers = [];

function buildHtml() {
    const htmlArray = [];
    const startHtml= 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma-rtl.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600&display=swap" rel="stylesheet">
        <title>${finishedTeamAnswers[0]}</title>
        <style>${style}</style>
    </head>
    <body>

    <section class="hero is-medium is-link is-centered">
        <div class="hero-body">
            <h1>${finishedTeamAnswers[0]}</h1>            
        </div>
    </section> 
    
    <div class="card-container">`

    htmlArray.push(startHtml);

    for (let i = 0; i < finishedTeamAnswers.length; i++) {
        let teamCards = `
        <div class="team-card">
            <div class="card-body">
                <h2>${finishedTeamAnswers[i].name}</h2>
                <h2>${finishedTeamAnswers[i].role}</h2>
            </div>
            <div class="card-bottom">
                <footer class="card-footer">
                <p>ID Number: ${finishedTeamAnswers[i].id}</p>
                <p>Email: <a href="mailto:${finishedTeamAnswers[i].email}" class="card-footer-item">${finishedTeamAnswers[i].email}</a></p>
                </footer> `
            if (finishedTeamAnswers[i].officeNumber) {
                teamCards += 
                `<p>Office Number: ${finishedTeamAnswers[i].officeNumber}</p>`
            }
            if (finishedTeamAnswers[i].github) {
                teamCards +=
                `<p>GitHub: <a href="https://github.com/${finishedTeamAnswers[i].github}">${finishedTeamAnswers[i].github}</a></p>`
            }
            if (finishedTeamAnswers[i].school) {
                teamCards +=
                `<p>School: ${finishedTeamAnswers[i].school}</p>`
            }
            teamCards+= `
            </div>
        </div>`
        htmlArray.push(teamCards)
    }
        
    const finishedHtml = `
    </div>
    </body>
    </html> 
    `
    htmlArray.push(finishedHtml);

    fs.appendFile(`./Created-HTML/${finishedTeamAnswers[0]}.html`, htmlArray.join(""), function (err) {
        
    });
}


init();