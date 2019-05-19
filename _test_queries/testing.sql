USE Northwind;
/*
SELECT *
FROM categories;

INSERT INTO CATEGORIES
    (CategoryName,Description)
VALUES('Tinned Foods', 'These are all types of food that are preserved in a can');



SELECT len('Alcoholic Beverages');

SELECT len('Tinned foods');

SELECT len('alcahol drinks');



DELETE FROM categories WHERE CategoryID IN (9,10);

INSERT INTO CATEGORIES
VALUES
    (10, 'Alcohol Drinks', 'These beverages require a special license to trade'),
    (9, 'Tinned Foods', 'These are all types of food that are preserved in a can');

INSERT INTO CATEGORIES
    (CategoryID, CategoryName, Description)
VALUES
    (10, 'Alcohol Drinks', 'These beverages require a special license to trade'),
    (9, 'Tinned Foods', 'These are all types of food that are preserved in a can');




CREATE TABLE customer_applications
(
    CustomerID varchar(5),
    CompanyName varchar(40),
    ContactName varchar(30),
    ContactTitle varchar(30),
    [Address] varchar(60),
    City varchar(15),
    Region varchar(15),
    PostalCode varchar(10),
    Country varchar(15),
    Phone varchar(24),
    Fax varchar(24)
)

INSERT INTO customer_applications
VALUES
    ('ANT1N', 'Antonioson Moreno Taquer', 'Antonio Morenoreno', 'Owner', 'Mataderos  2312', 'M', NULL, '5023', 'Mexico', '(5) 555-3932', NULL),
    ('CACT1', 'Cactus Comidas para llevars', 'Patrick Simpson', 'Sales Agent', 'Cerrito 333', 'Buenos Aires', NULL, '1010', 'Argentina', '(1) 135-5555', '(1) 135-4892'),
    ('D1MON', 'Du mondelero entier', 'Jan Labrune', 'Owner', '67, rue des Cinquante Otages', 'Nantes', NULL, '44000', 'France', '40.67.88.88', '40.67.89.89'),
    ('F1LKO', 'Folk och fokkerin', 'Maria Ulricj', 'Owner', '', 'Br', NULL, 'S-844 67', 'Sweden', '0695-34 67 21', NULL),
    ('G1DOS', 'Godos Cocina Tamala', 'Jos Groban', 'Sales Manager', 'C/ Romero, 33', 'Sevilla', NULL, '41101', 'Spain', '(95) 555 82 82', NULL),
    ('H1NGC', 'Hungrier Hound Import Store', 'Josh Latimer', 'Sales Representative', 'City Center Plaza\r\n516 Main St.', 'Elgin', 'OR', '97827', 'USA', '(503) 555-6874', '(503) 555-2376'),
    ('L1UGB', 'Laughing Succubus Wine Cellars', 'Josh Tannamuri', 'Marketing Assistant', '1900 Oak St.', 'Vancouver', 'BC', 'V3F 2K1', 'Canada', '(604) 555-3392', '(604) 555-7293'),
    ('LON1P', 'Lonehill Pine Restaurant', 'Francine Wilson', 'Sales Manager', '89 Chiaroscuro Rd.', 'Portland', 'OR', '97219', 'USA', '(503) 555-9573', '(503) 555-9646'),
    ('OC1AN', 'Ocposie', 'Yvonne Chaka Chaka', 'Sales Agent', 'Ing. Gustavo Moncada 8585\r\nPiso 20-A', 'Buenos Aires', NULL, '1010', 'Argentina', '(1) 135-5333', '(1) 135-5535'),
    ('PRIN1', 'Princesa Isabel Vinhosomo', 'Isabel denel', 'Sales Representative', 'Estrada da sa', 'Lisboa', NULL, '1756', 'Portugal', '(1) 356-5634', NULL),
    ('R1GGC', 'Reggiani Caseificimii', 'Morne Moroni', 'Sales Associate', 'Strada Provinciale 124', 'Reggio Emilia', NULL, '42100', 'Italy', '0522-556721', '0522-556722'),
    ('SE1ES', 'Even Seven Seas Imports', 'Peter Kumar', 'Sales Manager', '90 Wadhurst Rd.', 'London', NULL, 'OX15 4NB', 'UK', '(171) 555-1717', '(171) 555-5646'),
    ('T1ECR', 'The Crack Box', 'Liu Ka', 'Marketing Assistant', '55 Grizzly Peak Rd.', 'Butte', 'MT', '59801', 'USA', '(406) 555-5834', '(406) 555-8083'),
    ('VI1TE', 'What the Victuailles en stock', 'Mary Saveme', 'Sales Agent', '2, rue du Commerce', 'Lyon', NULL, '69004', 'France', '78.32.54.86', '78.32.54.87'),
    ('W1LMK', 'Wilman Kalalapappa', 'Mathew Karttunen', 'Owner/Marketing Assistant', 'Keskuskatu 45', 'Helsinki', NULL, '21240', 'Finland', '90-224 8858', '90-224 8858')

DROP TABLE customer_applications



INSERT INTO Customers(CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax)
SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax
FROM customer_applications
WHERE status = 'approved';


SELECT *
FROM customers;



DROP TABLE ProductsHighStock;

SELECT TOP 5
    ProductName AS Product, UnitsInStock AS [Stock Level]
--INTO ProductsHighStock
FROM Products
WHERE UnitsOnOrder = 0
ORDER BY UnitsInStock DESC
GO

SELECT *
FROM ProductsHighStock;


--DROP TABLE ProductsHighStock;


SELECT *
FROM INFORMATION_SCHEMA.columns
WHERE TABLE_NAME = 'suppliers'

UPDATE Suppliers SET Region = 'Kongers' WHERE SupplierID = 21;


SELECT *
FROM Employees
WHERE TitleOfCourtesy = 'Ms.';

SELECT *
INTO

SELECT *
INTO employees_bu
FROM Employees;
SELECT *
INTO products_bu
FROM Products;
*/

--DELETE FROM Employees WHERE Country = 'USA';

--TRUNCATE TABLE Products;

/*
DELETE FROM Employees;
SELECT *
FROM Employees;
*/
INSERT INTO Employees
SELECT *
FROM employees_bu;
INSERT INTO Products
SELECT *
FROM Products_bu;

SELECT *
FROM Products;

SELECT *
FROM Employees;
