USE Northwind

DECLARE @nwtb int = 2;

/* 1 */
IF @nwtb = 1 SELECT *
FROM categories;
/* 2 */
IF @nwtb = 2 SELECT *
FROM customers;
/* 3 */
IF @nwtb = 3 SELECT *
FROM employees;
/* 4 */
IF @nwtb = 4 SELECT *
FROM order_details;
/* 5 */
IF @nwtb = 5 SELECT *
FROM orders;
/* 6 */
IF @nwtb = 6 SELECT *
FROM products;
/* 7 */
IF @nwtb = 7 SELECT *
FROM shippers;
/* 8 */
IF @nwtb = 8 SELECT *
FROM suppliers;