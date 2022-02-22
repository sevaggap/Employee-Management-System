const inquirer = require("inquirer");
const mysql = require('mysql2');

const options = [
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ["View All Departments","View All Roles","View All Employees","Add a Deparment","Add a Role","Add an Employee","Update an Employee Role","Nothing"]
  },
]

const addDepartment = [
    {
        type:'input',
        message:'What is the name of the department?',
        name:'deparment_name'
    },
];

const addRole = [
    {
        type:'input',
        message:'What is the name of the role?',
        name:'role_name'
    },
    {
        type:'input',
        message:'What is the salary for the role?',
        name:'role_salary'
    },
    {
        type:'list',
        message:'What department does the role belong to?',
        name:'role_department',
        choices: [] //finish this maybe a db query
    },
];

const addEmployee = [
    {
        type:'input',
        message:'What is the employees first name?',
        name:'employee_first_name'
    },
    {
        type:'input',
        message:'What is the employees last name?',
        name:'employee_last_name'
    },
    {
        type:'list',
        message:'What is the employees role?',
        name:'employee_role',
        choices: [] //finish this maybe a db query
    },
    {
        type:'list',
        message:'Who is the employees manager?',
        name:'employee_manager',
        choices: [] //finish this maybe a db query
    },
];

const updateEmployee = [
    {
        type:'list',
        message:'Which employee role would you like to update?',
        name: 'update_employee',
        choices: []
    },
    {
        type:'list',
        message:'Which role do you want to assign the selected employee?',
        name: 'update_role',
        choices: []
    },
]

function init () {
    optionSelect();
}

function optionSelect() {
    inquirer.prompt(options)
    .then (function (data) {
        if(data.choice == "View All Departments") {
            optionSelect();
        } else if (data.choice == "View All Roles") {
            optionSelect();
        } else if (data.choise == "View All Employees") {
            optionSelect();
        } else if (data.choice == "Add a Department") {
            optionSelect();
        } else if (data.choice == "Add a Role") {
            optionSelect();
        } else if (data.choice == "Add an Employee") {
            optionSelect();
        } else if (data.choice == "Update an Employee Role") {
            optionSelect();
        } else if (data.choice == "Nothing"){
            console.log("Have a nice day!")
        }
    })
};

init();