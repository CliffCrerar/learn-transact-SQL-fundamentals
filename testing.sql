USE Northwind;

SELECT ProductName, CategoryID, UnitPrice
FROM products
ORDER BY CategoryID ASC, UnitPrice DESC