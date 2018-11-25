USE Northwind;

DECLARE @tc int = 3

/* 1 */
IF @tc = 1 SELECT *
FROM categories;
/* 2 */
IF @tc = 2 SELECT *
FROM customers;
/* 3 */
IF @tc = 3 SELECT *
FROM employees;
/* 4 */
IF @tc = 4 SELECT *
FROM order_details;
/* 5 */
IF @tc = 5 SELECT *
FROM orders;
/* 6 */
IF @tc = 6 SELECT *
FROM products;
/* 7 */
IF @tc = 7 SELECT *
FROM shippers;
/* 8 */
IF @tc = 8 SELECT *
FROM suppliers;