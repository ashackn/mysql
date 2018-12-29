DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (

item_id INTEGER(100) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL (6, 2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id) 
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "peanuts", "grocery", 2.00, 96);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "bananas", "grocery", 0.79, 84);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "chocolate", "grocery", 10.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "beef", "grocery", 28.00, 66);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "chips", "grocery", 4.00, 57);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "water", "grocery", 2.00, 81);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "pear", "grocery", 5.00, 79);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "apple", "grocery", 4.00, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "shrimp", "grocery", 33.00, 35);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "sugar", "grocery", 7.00, 73);

