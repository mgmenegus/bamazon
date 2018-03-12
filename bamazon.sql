CREATE database bamazon;
USE bamazon;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INTEGER NULL
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('iPhone 8', 'Electronics', 900, 100),
 ('Hiking Boots', 'Clothing', 200, 15),
 ('Farcry 5', 'Electronics', 60, 1000),
 ('Motor Oil', 'Automotive', 60, 10),
 ('Dish Soap', 'Household', 5, 100),
 ('Socks', 'Clothing', 15, 800),
 ('Blade Runner 2049', 'Movies', 20, 1000),
 ('Exhaust', 'Automotive', 1000, 4),
 ('The Story of Luke', 'Movies', 10, 5),
 ('Hair Comb', 'Household', 9, 50);
