INSERT INTO department (name)
VALUES ("Accounting"),
       ("Customer Support"),
       ("Human Resources"),
       ("Engineering"),
       ("Operations"),
       ("Payroll"),
       ("Business Development");

INSERT INTO role (title,salary,department_id)
VALUES ("Software Engineer",80000,4),
       ("Payroll Manager",95000,6),
       ("Human Resources Manager",100000,3),
       ("Financial Analyst",75000,7),
       ("Project Manager",80000,5),
       ("Accountant",55000,1),
       ("Disability Coordinator",60000,2);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Jessica","Newman",3,NULL),
       ("Tanya","Jewels",2,NULL),
       ("Hannah","Elliston",5,NULL),
       ("Mike","Johnson",1,3),
       ("Jeff","Portman",6,2),
       ("Timothy","Cadeaux",4,2),
       ("Riley","Fergeson",7,1);