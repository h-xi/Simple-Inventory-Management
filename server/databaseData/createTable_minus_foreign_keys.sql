CREATE TABLE Brands(
Brand_ID Integer,
B_name Char(30),
PRIMARY KEY (Brand_ID)
);

CREATE TABLE Categories(
Category_ID Integer,
Cat_name Char(30),
Aisle_no Integer,
PRIMARY KEY (Category_ID)
);

CREATE TABLE Supplier(
S_contact Char(50),
Supplier_name Char(40),
Supplier_ID Integer,
ProductID Integer,
PRIMARY KEY(Supplier_ID, ProductID)
);

CREATE TABLE ManagerEmployee(
Employee_ID Integer,
SIN Integer,
DOB Char(20),
Address Char(50),
Salary Integer,
FirstName Char(15),
LastName Char(15),
YearsWorked Integer,
Department Char(15),
PRIMARY KEY (Employee_ID),
UNIQUE (SIN)
);

CREATE TABLE DriverEmployee(
Employee_ID Integer,
SIN Integer,
DOB Char(20),
Address Char(50),
Salary Integer,
FirstName Char(15),
LastName Char(15),
YearsWorked Integer,
DriverLicenseClass Char(10),
PRIMARY KEY (Employee_ID),
UNIQUE (SIN)
);

CREATE TABLE WorkerEmployee(
Employee_ID Integer,
SIN Integer,
DOB Char(20),
Address Char(50),
Salary Integer,
FirstName Char(15),
LastName Char(15),
YearsWorked Integer,
ForkLiftQual Char(10),
PRIMARY KEY (Employee_ID),
UNIQUE (SIN)
);

CREATE TABLE Benefits(
YearsWorked Integer,
Benefits_Class Char(1),
Primary Key (YearsWorked)
);

CREATE TABLE Holiday(
YearsWorked Integer,
Holiday_dest Char(15),
Primary Key (YearsWorked)
);

CREATE TABLE Product(
Barcode Integer,
P_name Char(30),
Size Char(6),
Bin_name Char(2) NOT NULL,
Aisle_no Integer NOT NULL,
Category_ID Integer NOT NULL,
Brand_ID Integer NOT NULL,
Inventory_barcode Integer,
SupplierID Integer,
Price Integer,
PRIMARY KEY (Barcode),
UNIQUE (Inventory_barcode)
);

CREATE TABLE Aisle(
    Aisle_no Integer,
    PRIMARY KEY (Aisle_no)
    );

CREATE TABLE Bin(
  Bin_name CHAR(2),
  Capacity Integer,
  Aisle_no Integer,
  quant_filled Integer,
  PRIMARY KEY(Bin_name, Aisle_no)
  );

CREATE TABLE Inventory(
Barcode Integer NOT NULL,
Quantity Integer NOT NULL,
PRIMARY KEY (Barcode)
);

CREATE TABLE OutgoingShipmentOrder(
Order_ID Integer,
ShipmentDate Char(20),
Quantity Integer,
AssignedDriver Integer NOT NULL,
DeliveryAddress Char(50),
DaysToShipment Integer,
Inventory_Barcode Integer NOT NULL,
Product_Barcode Integer NOT NULL,
Manager Integer NOT NULL,
PRIMARY KEY (Order_ID)
);


CREATE TABLE IncomingShipmentOrder(
Order_ID Integer,
ShipmentDate Char(20),
Quantity Integer,
AssignedReceiver Integer NOT NULL,
Inventory_barcode Integer NOT NULL,
Product_Barcode Integer NOT NULL,
Manager Integer NOT NULL,
PRIMARY KEY (Order_ID)
);

CREATE TABLE Priority(
Quantity Integer,
PriorityStatus Char(6),
PRIMARY KEY (Quantity)
);


CREATE TABLE Highlight(
DaysToShipment Integer,
HighLightView Char(3),
PRIMARY KEY (DaysToShipment)
);


INSERT INTO inventory_system.Brands VALUES (100, 'Nike');
INSERT INTO inventory_system.Brands VALUES (200, 'Adidas');
INSERT INTO inventory_system.Brands VALUES (300, 'Fila');
INSERT INTO inventory_system.Brands VALUES (400, 'Champion');
INSERT INTO inventory_system.Brands VALUES (500, 'Columbia');

INSERT INTO inventory_system.Aisle VALUES (1);
INSERT INTO inventory_system.Aisle VALUES (2);
INSERT INTO inventory_system.Aisle VALUES (3);
INSERT INTO inventory_system.Aisle VALUES (4);
INSERT INTO inventory_system.Aisle VALUES (5);

INSERT INTO inventory_system.Categories VALUES (1, 'T-shirt', 1);
INSERT INTO inventory_system.Categories VALUES (2, 'Shirt', 2);
INSERT INTO inventory_system.Categories VALUES (3, 'Pants', 3);
INSERT INTO inventory_system.Categories VALUES (4, 'Shorts', 4);
INSERT INTO inventory_system.Categories VALUES (5, 'Coats', 5);

INSERT INTO inventory_system.Bin VALUES ('AE', 1000, 1, 0);
INSERT INTO inventory_system.Bin VALUES ('FG', 1000, 1, 0);
INSERT INTO inventory_system.Bin VALUES ('KO', 1000, 1, 0);
INSERT INTO inventory_system.Bin VALUES ('PT', 1000, 1, 0);
INSERT INTO inventory_system.Bin VALUES ('UZ', 1000, 1, 0);
INSERT INTO inventory_system.Bin VALUES ('AE', 1000, 2, 0);
INSERT INTO inventory_system.Bin VALUES ('FG', 1000, 2, 0);
INSERT INTO inventory_system.Bin VALUES ('KO', 1000, 2, 0);
INSERT INTO inventory_system.Bin VALUES ('PT', 1000, 2, 0);
INSERT INTO inventory_system.Bin VALUES ('UZ', 1000, 2, 0);
INSERT INTO inventory_system.Bin VALUES ('AE', 1000, 3, 0);
INSERT INTO inventory_system.Bin VALUES ('FG', 1000, 3, 0);
INSERT INTO inventory_system.Bin VALUES ('KO', 1000, 3, 0);
INSERT INTO inventory_system.Bin VALUES ('PT', 1000, 3, 0);
INSERT INTO inventory_system.Bin VALUES ('UZ', 1000, 3, 0);
INSERT INTO inventory_system.Bin VALUES ('AE', 1000, 4, 0);
INSERT INTO inventory_system.Bin VALUES ('FG', 1000, 4, 0);
INSERT INTO inventory_system.Bin VALUES ('KO', 1000, 4, 0);
INSERT INTO inventory_system.Bin VALUES ('PT', 1000, 4, 0);
INSERT INTO inventory_system.Bin VALUES ('UZ', 1000, 4, 0);
INSERT INTO inventory_system.Bin VALUES ('AE', 1000, 5, 0);
INSERT INTO inventory_system.Bin VALUES ('FG', 1000, 5, 0);
INSERT INTO inventory_system.Bin VALUES ('KO', 1000, 5, 0);
INSERT INTO inventory_system.Bin VALUES ('PT', 1000, 5, 0);
INSERT INTO inventory_system.Bin VALUES ('UZ', 1000, 5, 0);

INSERT INTO inventory_system.Product VALUES (364, 'Nike shirt 1', 'Small','KO',2,2,100,364,302,90);
INSERT INTO inventory_system.Product VALUES (374, 'Nike shirt 2', 'Small','KO',2,2,100,374,402,120);
INSERT INTO inventory_system.Product VALUES (384, 'Nike shirt 3', 'Small','KO',2,2,100,384,502,142);
INSERT INTO inventory_system.Product VALUES (394, 'Nike shirt 4', 'Small','KO',2,2,100,394,650,72);
INSERT INTO inventory_system.Product VALUES (354, 'Nike shirt 5', 'Small','KO',2,2,100,354,71,80);

INSERT INTO inventory_system.Supplier VALUES (9513124873, 'Acme', 302, 364);
INSERT INTO inventory_system.Supplier VALUES (9513124192, 'Peak', 402, 374);
INSERT INTO inventory_system.Supplier VALUES (9519021001, 'Admire', 502, 384);
INSERT INTO inventory_system.Supplier VALUES (9517701000, 'ClothingInc', 650, 394);
INSERT INTO inventory_system.Supplier VALUES (9501000013, 'DivineClothing', 71, 354);





INSERT INTO inventory_system.Inventory VALUES (364,120);
INSERT INTO inventory_system.Inventory VALUES (374,452);
INSERT INTO inventory_system.Inventory VALUES (384,278);
INSERT INTO inventory_system.Inventory VALUES (394,215);
INSERT INTO inventory_system.Inventory VALUES (354,253);



INSERT INTO inventory_system.ManagerEmployee VALUES (39302, 593105933, '17/02/1995', '45 Grove Drive', 125000, 'Adam', 'West', 12, 'Purchasing');
INSERT INTO inventory_system.ManagerEmployee VALUES (33113, 593100141, '12/06/1985', '75 Grove Drive', 135000, 'David', 'Ames', 4, 'Payroll');
INSERT INTO inventory_system.ManagerEmployee VALUES (30014, 581105961, '19/01/1997', '15 Grove Drive', 145000, 'John', 'West', 9, 'HR');
INSERT INTO inventory_system.ManagerEmployee VALUES (35215, 500345930, '13/07/1975', '95 Grove Drive', 165100, 'John', 'Xi', 17, 'Marketing');
INSERT INTO inventory_system.ManagerEmployee VALUES (66546,871305965, '07/12/1998', '25 Grove Drive', 95000, 'Smith', 'West', 22, 'Recruitment');



INSERT INTO inventory_system.DriverEmployee VALUES (30002, 593111933, '17/02/1995', '45 Apple Drive', 85000, 'Michael', 'Johnson', 12, 'A');
INSERT INTO inventory_system.DriverEmployee VALUES (30523, 591110141, '12/06/1985', '75 Apple Drive', 95000, 'Thomas', 'Williams', 4, 'B');
INSERT INTO inventory_system.DriverEmployee VALUES (56114, 581112396, '19/01/1997', '15 Apple Drive', 55000, 'Charles', 'Brown', 9, 'C');
INSERT INTO inventory_system.DriverEmployee VALUES (98115, 455545930, '13/07/1975', '95 Apple Drive', 65100, 'Christopher', 'Jones', 17, 'C');
INSERT INTO inventory_system.DriverEmployee VALUES (62146,932105965, '07/12/1998', '25 Apple Drive', 85000, 'Daniel', 'Garcia', 22, 'A');

INSERT INTO inventory_system.WorkerEmployee VALUES (39212, 591231933, '17/03/1995', '45 Chestnut Drive', 85000, 'Matthew', 'Miller', 15, 'Yes');
INSERT INTO inventory_system.WorkerEmployee VALUES (310233, 596540141, '12/07/1985', '75 Chestnut Drive', 95000, 'Anthony', 'Davis', 14, 'No');
INSERT INTO inventory_system.WorkerEmployee VALUES (516214, 581168296, '19/03/1997', '15 Chestnut Drive', 55000, 'Mark', 'Rodriguez', 4, 'Yes');
INSERT INTO inventory_system.WorkerEmployee VALUES (900115, 455989830, '13/06/1975', '95 Chestnut Drive', 65100, 'Donald', 'Martinez', 27, 'No');
INSERT INTO inventory_system.WorkerEmployee VALUES (12146, 912054551, '07/11/1998', '25 Chestnut Drive', 85000, 'Steven', 'Lopez', 21, 'No');

INSERT INTO inventory_system.Benefits VALUES (1, 'E');
INSERT INTO inventory_system.Benefits VALUES (2, 'E');
INSERT INTO inventory_system.Benefits VALUES (3, 'E');
INSERT INTO inventory_system.Benefits VALUES (4, 'E');
INSERT INTO inventory_system.Benefits VALUES (5, 'E');
INSERT INTO inventory_system.Benefits VALUES (6, 'D');
INSERT INTO inventory_system.Benefits VALUES (7, 'D');
INSERT INTO inventory_system.Benefits VALUES (8, 'D');
INSERT INTO inventory_system.Benefits VALUES (9, 'D');
INSERT INTO inventory_system.Benefits VALUES (10, 'D');
INSERT INTO inventory_system.Benefits VALUES (11, 'C');
INSERT INTO inventory_system.Benefits VALUES (12, 'C');
INSERT INTO inventory_system.Benefits VALUES (13, 'C');
INSERT INTO inventory_system.Benefits VALUES (14, 'C');
INSERT INTO inventory_system.Benefits VALUES (15, 'C');
INSERT INTO inventory_system.Benefits VALUES (16, 'B');
INSERT INTO inventory_system.Benefits VALUES (17, 'B');
INSERT INTO inventory_system.Benefits VALUES (18, 'B');
INSERT INTO inventory_system.Benefits VALUES (19, 'B');
INSERT INTO inventory_system.Benefits VALUES (20, 'B');
INSERT INTO inventory_system.Benefits VALUES (21, 'A');
INSERT INTO inventory_system.Benefits VALUES (22, 'A');
INSERT INTO inventory_system.Benefits VALUES (23, 'A');
INSERT INTO inventory_system.Benefits VALUES (24, 'A');
INSERT INTO inventory_system.Benefits VALUES (25, 'A');
INSERT INTO inventory_system.Benefits VALUES (26, 'A');
INSERT INTO inventory_system.Benefits VALUES (27, 'A');
INSERT INTO inventory_system.Benefits VALUES (28, 'A');
INSERT INTO inventory_system.Benefits VALUES (29, 'A');
INSERT INTO inventory_system.Benefits VALUES (30, 'A');

INSERT INTO inventory_system.Holiday VALUES (1, 'Vancouver');
INSERT INTO inventory_system.Holiday VALUES (2, 'Vancouver');
INSERT INTO inventory_system.Holiday VALUES (3, 'Vancouver');
INSERT INTO inventory_system.Holiday VALUES (4, 'Vancouver');
INSERT INTO inventory_system.Holiday VALUES (5, 'Vancouver');
INSERT INTO inventory_system.Holiday VALUES (6, 'Toronto');
INSERT INTO inventory_system.Holiday VALUES (7, 'Toronto');
INSERT INTO inventory_system.Holiday VALUES (8, 'Toronto');
INSERT INTO inventory_system.Holiday VALUES (9, 'Toronto');
INSERT INTO inventory_system.Holiday VALUES (10, 'Toronto');
INSERT INTO inventory_system.Holiday VALUES (11, 'New York City');
INSERT INTO inventory_system.Holiday VALUES (12, 'New York City');
INSERT INTO inventory_system.Holiday VALUES (13, 'New York City');
INSERT INTO inventory_system.Holiday VALUES (14, 'New York City');
INSERT INTO inventory_system.Holiday VALUES (15, 'New York City');
INSERT INTO inventory_system.Holiday VALUES (16, 'London');
INSERT INTO inventory_system.Holiday VALUES (17, 'London');
INSERT INTO inventory_system.Holiday VALUES (18, 'London');
INSERT INTO inventory_system.Holiday VALUES (19, 'London');
INSERT INTO inventory_system.Holiday VALUES (20, 'London');
INSERT INTO inventory_system.Holiday VALUES (21, 'London');
INSERT INTO inventory_system.Holiday VALUES (22, 'London');
INSERT INTO inventory_system.Holiday VALUES (23, 'London');
INSERT INTO inventory_system.Holiday VALUES (24, 'London');
INSERT INTO inventory_system.Holiday VALUES (25, 'London');
INSERT INTO inventory_system.Holiday VALUES (26, 'London');
INSERT INTO inventory_system.Holiday VALUES (27, 'London');
INSERT INTO inventory_system.Holiday VALUES (28, 'London');
INSERT INTO inventory_system.Holiday VALUES (29, 'London');
INSERT INTO inventory_system.Holiday VALUES (30, 'London');



INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48231, '12/06/1985', 2, 30002, '123 Almond Drive', 12, 354,354,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48232, '13/06/1985', 5, 30002, '125 Almond Drive', 2, 364,364,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48233, '14/06/1985', 7, 56114, '127 Almond Drive', 7, 374,374,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48234, '15/06/1985', 9, 30002, '121 Almond Drive', 14, 384,384,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48235, '16/06/1985', 4, 56114, '122 Almond Drive', 2, 394,394,30014);

INSERT INTO inventory_system.IncomingShipmentOrder VALUES (48671, '13/06/1984', 12, 516214, 364,364,39302);
INSERT INTO inventory_system.IncomingShipmentOrder VALUES (83133, '14/06/1984', 13, 39212, 374,374,33113);
INSERT INTO inventory_system.IncomingShipmentOrder VALUES (11134, '15/06/1984', 14, 39212, 384,384,39302);
INSERT INTO inventory_system.IncomingShipmentOrder VALUES (73135, '16/06/1984', 11, 310233, 394,394,33113);

INSERT INTO inventory_system.Priority VALUES (1, 'low');
INSERT INTO inventory_system.Priority VALUES (2, 'low');
INSERT INTO inventory_system.Priority VALUES (3, 'low');
INSERT INTO inventory_system.Priority VALUES (4, 'low');
INSERT INTO inventory_system.Priority VALUES (5, 'low');
INSERT INTO inventory_system.Priority VALUES (6, 'medium');
INSERT INTO inventory_system.Priority VALUES (7, 'medium');
INSERT INTO inventory_system.Priority VALUES (8, 'medium');
INSERT INTO inventory_system.Priority VALUES (9, 'medium');
INSERT INTO inventory_system.Priority VALUES (10, 'medium');
INSERT INTO inventory_system.Priority VALUES (11, 'high');
INSERT INTO inventory_system.Priority VALUES (12, 'high');
INSERT INTO inventory_system.Priority VALUES (13, 'high');
INSERT INTO inventory_system.Priority VALUES (14, 'high');
INSERT INTO inventory_system.Priority VALUES (15, 'high');

INSERT INTO inventory_system.Highlight VALUES (1, 'Yes');
INSERT INTO inventory_system.Highlight VALUES (2, 'Yes');
INSERT INTO inventory_system.Highlight VALUES (3, 'Yes');
INSERT INTO inventory_system.Highlight VALUES (4, 'Yes');
INSERT INTO inventory_system.Highlight VALUES (5, 'Yes');
INSERT INTO inventory_system.Highlight VALUES (6, 'No');
INSERT INTO inventory_system.Highlight VALUES (7, 'No');
INSERT INTO inventory_system.Highlight VALUES (8, 'No');
INSERT INTO inventory_system.Highlight VALUES (9, 'No');
INSERT INTO inventory_system.Highlight VALUES (10, 'No');
INSERT INTO inventory_system.Highlight VALUES (11, 'No');
INSERT INTO inventory_system.Highlight VALUES (12, 'No');
INSERT INTO inventory_system.Highlight VALUES (13, 'No');
INSERT INTO inventory_system.Highlight VALUES (14, 'No');
INSERT INTO inventory_system.Highlight VALUES (15, 'No');


ALTER TABLE Bin
ADD CONSTRAINT fk1
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no) ON DELETE NO ACTION;

ALTER TABLE Categories
ADD CONSTRAINT fk2
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no);

ALTER TABLE Product
ADD CONSTRAINT fk3
    FOREIGN KEY (Bin_name) REFERENCES Bin (Bin_name);

ALTER TABLE Product
ADD CONSTRAINT fk4
    FOREIGN KEY (Category_ID) REFERENCES Categories (Category_ID);

ALTER TABLE Product
ADD CONSTRAINT fk5    
    FOREIGN KEY (Brand_ID) REFERENCES Brands (Brand_ID);


ALTER TABLE ManagerEmployee
ADD CONSTRAINT fk6
    FOREIGN KEY (YearsWorked) REFERENCES Benefits (YearsWorked);

ALTER TABLE ManagerEmployee
ADD CONSTRAINT fk7
    FOREIGN KEY (YearsWorked) REFERENCES Holiday (YearsWorked);

ALTER TABLE Inventory
ADD CONSTRAINT fk8
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE Supplier
ADD CONSTRAINT f9
    FOREIGN KEY (ProductID)
    REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk10
    FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee(Employee_ID);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk11
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory(Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk12
    FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk13
    FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk14
    FOREIGN KEY (Quantity) REFERENCES Priority (Quantity);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk167
    FOREIGN KEY (DaysToShipment) REFERENCES Highlight (DaysToShipment);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk15
    FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee (Employee_ID);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk16
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk17
    FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk18
    FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);