const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

const options = [
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ["View All Departments","View All Roles","View All Employees","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Nothing"]
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
            db.query('SELECT * FROM department', function (err,results) {
                console.log(results);
                optionSelect();
            });
        } else if (data.choice == "View All Roles") {
            db.query('SELECT * FROM role', function (err,results) {
                console.log(results);
                optionSelect();
            });
        } else if (data.choise == "View All Employees") {
            db.query('SELECT * FROM employee', function (err,results) {
                console.log(results);
                optionSelect();
            });
        } else if (data.choice == "Add a Department") {
            inquirer.prompt(addDepartment)
            .then (function (data){

                optionSelect();

            })
        } else if (data.choice == "Add a Role") {
            inquirer.prompt(addRole)
            .then (function (data){

                optionSelect();

            })
        } else if (data.choice == "Add an Employee") {
            inquirer.prompt(addEmployee)
            .then (function (data){

                optionSelect();

            })
        } else if (data.choice == "Update an Employee Role") {
            inquirer.prompt(updateEmployee)
            .then (function (data){

                optionSelect();

            })
        } else if (data.choice == "Nothing"){
            console.log("Have a nice day!")
        }
    })
};

init();