INSERT INTO department (id,name)
VALUES (1,"Accounting"),
       (2,"Customer Support"),
       (3,"Human Resources"),
       (4,"Engineering"),
       (5,"Operations"),
       (6,"Payroll"),
       (7,"Business Development");

INSERT INTO role (id,title,salary,department_id)
VALUES (1,"Software Engineer",80000,4),
       (2,"Payroll Manager",95000,6),
       (3,"Human Resources Manager",100000,3),
       (4,"Financial Analyst",750000,7),
       (5,"Project Manager",80000,5),
       (6,"Accountant",55000,1),
       (7,"Customer Support Specialist",60000,2);

INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES (2,"Jessica","Newman",3),
       (4,"Hannah","Elliston",5),
       (6,"Tanya","Jewels",2),
       (1,"Mike","Johnson",1,5),
       (3,"Jeff","Portman",6,2),
       (5,"Timothy","Cadeaux",4,5),
       (7,"Riley","Fergeson",7,5);