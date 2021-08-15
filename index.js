const {prompt} = require('inquirer');
const db = require("./db");
require("console.table");

initializeApp();

//initial function to start NPM
function initializeApp() {
    runPrompts();
}

//run prompt functions

function runPrompts() {
    prompt([
        {
            //load prompt below when app is inialized on NPM start
            type: 'list',
            name: 'choice',
            message: 'Please select the following action:',
            choices: [
                {
                    name: 'View All Departments',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'View All Roles',
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'View all Employees',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: 'Add Department',
                    value: 'ADD_DEPARTMENT'
                },
                {
                    name: 'Add a Role',
                    value: 'ADD_ROLE'
                },
                {
                    name: 'Add and Employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Update Employee Role',
                    value: 'UPDATE_EMPLOYEE_ROLE'
                },
                {
                    name: 'Quit',
                    value: "QUIT"
                }
            ]
        }

    ]).then(res => {
        let choice = res.choice;
        //call the functions based off of the users selection
        switch (choice) {
            case 'VIEW_DEPARTMENTS':
                viewAllDepartments();
                break;
            case 'VIEW_ROLES':
                viewAllRoles();
                break;
            case 'VIEW_EMPLOYEES':
                viewAllEmployees();
                break;
            case 'ADD_DEPARTMENT':
                createDepartment();
                break;
            case 'ADD_ROLE':
                createRole();
                break;
            case 'ADD_EMPLOYEE':
                createEmployee();
                break;
            case 'UPDATE_EMPLOYEE_ROLE':
                updateEmployeeROle();
                break;
            default:
                quit();
        }
    })
}

//View all employees function
function viewAllEmployees() {
    db.allEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
    .then(() => runPrompts());
}

//view all roles function
function viewAllRoles() {
    db.allRoles()
    .then(([roles]) => {
        let roles = rows;
        console.log('\n');
    })
    .then(() => runPrompts());
}

//view all departments function
function viewAllDepartments () {
    db.allDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('\n');
        consol.table(departments);
    })
    .then (() => runPrompts());
}

//Add roles
function createRole() {
    db.allDepartments()
    .then(([ rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name}) => ({
            name: name,
            value: id 
        }));

        prompt([
            {
                name: 'title',
                message: 'What is the role?'
            },
            {
                name: 'salary',
                message: 'What is the salary rate?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Which department does the role fall under?',
                choices: departmentChioces 
            }
        ])
        .then(role => {
            db.addRole(role)
            .then(() => consol.log(`Added ${role.title} to the database`))
            .then(() => runPrompts())
        })
    })
}

//
