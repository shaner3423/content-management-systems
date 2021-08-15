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
            
        }
    })
}