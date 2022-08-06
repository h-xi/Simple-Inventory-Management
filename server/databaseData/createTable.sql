CREATE TABLE Brands(
  Brand_ID Integer,
  B_name Char(30),
  PRIMARY KEY (Brand_ID)
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
  PRIMARY KEY(Bin_name, Aisle_no),
  FOREIGN KEY (Aisle_no) REFERENCES Aisle (Aisle_no) ON DELETE NO ACTION);


CREATE TABLE Categories(
Category_ID Integer,
Cat_name Char(30),
Aisle_no Integer,
PRIMARY KEY (Category_ID),
FOREIGN KEY (Aisle_no) REFERENCES Aisle (Aisle_no)
);

CREATE TABLE Supplier(
S_contact Char(50),
Supplier_name Char(40),
Supplier_ID Integer,
ProductID Integer,
PRIMARY KEY(Supplier_ID, ProductID),
FOREIGN KEY (ProductID) REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
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
FOREIGN KEY (YearsWorked) REFERENCES Benefits,
FOREIGN KEY (YearsWorked) REFERENCES Holiday
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
Inventory_barcode Integer NOT NULL,
SupplierID Integer,
Price Integer,
PRIMARY KEY (Barcode),
UNIQUE (Order_ID),
FOREIGN KEY (Bin_name, Aisle_no) REFERENCES Bin (Bin_name, Aisle_no),
FOREIGN KEY (Category_ID) REFERENCES Categories,
FOREIGN KEY (Brand_ID) REFERENCES Brands
);

--REMOVED as we want inventory to be the child of product.
--ALTER TABLE Product
--ADD CONSTRAINT fk8    
--    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode);

--added delete cascades here so that if product is deleted and corresponding inventory is deleted, the orders are deleted as well
--ALTER TABLE OutgoingShipmentOrder
--ADD CONSTRAINT fk14
--    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory(Barcode) ON DELETE CASCADE ON UPDATE CASCADE;


--added delete cascades here so that if product is deleted and corresponding inventory is deleted, the orders are deleted as well
--ALTER TABLE IncomingShipmentOrder
--ADD CONSTRAINT fk18
--   FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

--added delete cascades here so that if product is deleted and corresponding order is deleted
--ALTER TABLE IncomingShipmentOrder
--ADD CONSTRAINT fk17
--   FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

--added delete cascades here so that if product is deleted and corresponding order is deleted
--ALTER TABLE OutgoingShipmentOrder
--ADD CONSTRAINT fk12
--    FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE Inventory(
Barcode Integer NOT NULL,
Quantity Integer NOT NULL,
PRIMARY KEY (Barcode),
FOREIGN KEY (Barcode) REFERENCES Product(Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
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
PRIMARY KEY (Order_ID),
FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee(Employee_ID),
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory(Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Manager) REFERENCES ManagerEmployee,
FOREIGN KEY (Quantity) REFERENCES Priority (Quantity),
FOREIGN KEY (DaysToShipment) REFERENCES Highlight (DaysToShipment)
);

CREATE TABLE IncomingShipmentOrder(
Order_ID Integer,
ShipmentDate Char(20),
Quantity Integer,
AssignedReceiver Integer NOT NULL,
Inventory_barcode Integer NOT NULL,
Product_Barcode Integer NOT NULL,
Manager Integer NOT NULL,
PRIMARY KEY (Order_ID),
FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee(Employee_ID),
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory(Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (Manager) REFERENCES ManagerEmployee
);

CREATE TABLE Priority(
Quantity Integer,
PriorityStatus Char(6),
PRIMARY KEY (Quantity)
--remove this
--FOREIGN KEY (Quantity) REFERENCES OutgoingShipmentOrder(Quantity)
);

CREATE TABLE Highlight(
DaysToShipment Integer,
HighLightView Char(3),
PRIMARY KEY (DaysToShipment)
-- remove this
--FOREIGN KEY (DaysToShipment) REFERENCES OutgoingShipmentOrder(DaysToShipment)
);