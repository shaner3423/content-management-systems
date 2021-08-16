DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTOINCREMENT
    titles VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    INDEX department_id,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER AUTOINCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10) NULL,
    PRIMARY KEY (id)
);


