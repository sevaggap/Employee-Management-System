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
       ("Financial Analyst",750000,7),
       ("Project Manager",80000,5),
       ("Accountant",55000,1),
       ("Customer Support Specialist",60000,2);

INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES (2,"Jessica","Newman",3),
       (4,"Hannah","Elliston",5),
       (6,"Tanya","Jewels",2),
       (1,"Mike","Johnson",1,5),
       (3,"Jeff","Portman",6,2),
       (5,"Timothy","Cadeaux",4,5),
       (7,"Riley","Fergeson",7,5);