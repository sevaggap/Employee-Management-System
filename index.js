const inquirer = require("inquirer");
const mysql = require('mysql2');
const consoletable = require("console.table");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      // TO DO: Enter your MySQL password below
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
  
let departments = [];
let roles = [];
let managers = [];
let employees = [];

const options = [
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ["View All Departments","View All Roles","View All Employees","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Nothing"]
  },
]

function viewEmployees () {
    return `SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;`
}

function init () {
    optionSelect();
}

function optionSelect() {
    inquirer.prompt(options)
    .then (function (data) {
        if(data.choice == "View All Departments") {
            db.query('SELECT * FROM department', function (err,result) {
                console.table(result);
                optionSelect();
            });
        } else if (data.choice == "View All Roles") {
            db.query('SELECT * FROM role', function (err,result) {
                console.table(result);
                optionSelect();
            });
        } else if (data.choice == "View All Employees") {
            let query = viewEmployees();
            db.query(query, function (err,result) {
                console.table(result);
                optionSelect();
            });
        } else if (data.choice == "Add a Department") {
            inquirer.prompt([
                {
                    type:'input',
                    message:'What is the name of the department?',
                    name:'name'
                },
            ])
            .then (function (data){
                db.query(`INSERT INTO department SET ?`,[data], function (err, result) {
                    if (err) {
                      console.log(err);
                      optionSelect();
                    }
                    console.log(`${data.name} added to Deparments`);
                    optionSelect();
                  });
            })
        } else if (data.choice == "Add a Role") {
            db.query(`SELECT * FROM department`, function (err,result) {
                const department = result.map(({id,name}) => ({
                    name:name,
                    value:id
                }));
                departments=department;         
                inquirer.prompt([
                {
                type:'input',
                message:'What is the name of the role?',
                name:'title'
                },
                {
                type:'input',
                message:'What is the salary for the role?',
                name:'salary'
                },
                {
                type:'list',
                message:'What department does the role belong to?',
                name:'department_id',
                choices: departments
                },
                ])
                .then (function (data){
                    db.query(`INSERT INTO role SET ?`,[data], (err, result) => {
                        if (err) {
                          console.log(err);
                          optionSelect();
                        } 
                        console.log(`${data.title} added to Roles`);
                        optionSelect();
                });
                })
        }) 
        } else if (data.choice == "Add an Employee") {
            db.query(`SELECT * FROM role`, function (err,result) {
                const role = result.map(({title,id}) => ({
                    name:title,
                    value:id
                }));
            roles=role;
            
            db.query(`SELECT * FROM employee`, function (err,result) {
                const manager = result.map(({id,first_name,last_name}) => ({
                    name: (first_name + ' ' + last_name),
                    value:id
                }));
            managers=manager;  
            inquirer.prompt([
                {
                    type:'input',
                    message:'What is the employees first name?',
                    name:'first_name'
                },
                {
                    type:'input',
                    message:'What is the employees last name?',
                    name:'last_name'
                },
                {
                    type:'list',
                    message:'What is the employees role?',
                    name:'role_id',
                    choices: roles,
                },
                {
                    type:'list',
                    message:'Who is the employees manager?',
                    name:'manager_id',
                    choices: managers,
                },
            ])
            .then (function (data){
                db.query('INSERT INTO employee SET ?', [data], (err,result) => {
                    if (err) {
                        console.log(err);
                        optionSelect();
                      } 
                })
                console.log(`${data.first_name} ${data.last_name} has been added to Employees!`);
                optionSelect();
            })
        })})
        } else if (data.choice == "Update an Employee Role") {
            db.query(`SELECT * FROM role`, function (err,result) {
                const role = result.map(({id,title}) => ({
                    name:title,
                    value:id
                }));
            roles=role;

            db.query(`SELECT * FROM employee`, function (err,result) {
                const employee= result.map(({id,first_name,last_name}) => ({
                    name:(first_name + ' ' + last_name),
                    value:id
                }));
            employees=employee; 
            inquirer.prompt([
                {
                    type:'list',
                    message:'Which employee would you like to update?',
                    name: 'id',
                    choices: employees
                },
                {
                    type:'list',
                    message:'Which role do you want to assign the selected employee?',
                    name: 'role_id',
                    choices: roles
                },
            ])
            .then (function (data){
                db.query('UPDATE employee SET role_id=? WHERE id=? ', [data.role_id,data.id], (err,result) => {
                    if (err) {
                        console.log(err);
                        optionSelect();
                      } 
                })
                console.log(`Employee has been updated!`);
                optionSelect();
            })
        })})
        } else if (data.choice == "Nothing"){
            console.log("Have a nice day!")
        }
    })
};

init();