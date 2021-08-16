
use employees;

INSERT INTO department
    (name)
VALUES
    ('Human Resources'),
    ('Marketing'),
    ('Information Technology'),
    ('Accounting'),
    ('Analyst');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('HR Manager', 100000, 1),
    ('HR', 50000, 1),
    ('Marketing Director', 140000, 2),
    ('Sales', 65000, 2),
    ('IT Director', 195000, 3),
    ('IT Support', 100000, 3),
    ('Account Manager', 110000, 4),
    ('Accountant', 90000, 4),
    ('Analyst', 80000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Donald', 'Duck', 1, NULL),
    ('Mickey', 'Mouse', 2, 1),
    ('Calvin', 'Klein', 3, NULL),
    ('Gianni', 'Versace', 4, 3),
    ('Louis', 'Vuitton', 4, 3),
    ('Dolce', 'Gabbana', 5, NULL),
    ('Minnie', 'Mouse', 6, 5),
    ('Daffy', 'Duck', 6, 5),
    ('Daisy', 'Duck', 7, NULL),
    ('Joe', 'Smith', 7, 8),
    ('Jane', 'Smith', 8, NULL);