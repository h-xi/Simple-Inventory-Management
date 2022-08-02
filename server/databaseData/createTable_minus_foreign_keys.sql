CREATE TABLE Brands(Brand_ID Integer, B_name Char(30), PRIMARY KEY (Brand_ID));

CREATE TABLE Aisle(Aisle_no Integer,PRIMARY KEY (Aisle_no));

CREATE TABLE Bin(
  Bin_name CHAR(2),
  Capacity Integer,
  Aisle_no Integer,
  quant_filled Integer,
  PRIMARY KEY(Bin_name, Aisle_no)
  );


CREATE TABLE Categories(
Category_ID Integer,
Cat_name Char(30),
Aisle_no Integer,
PRIMARY KEY(Category_ID)
);


CREATE TABLE Supplier(
Supplier_ID Integer,
S_contact Char(50),
Supplier_name Char(40),
PRIMARY KEY(Supplier_ID)
);

CREATE TABLE ManagerEmployee(
Employee_ID Integer,
SIN Integer,
DOB Date,
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
DOB Date,
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
DOB Date,
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
Bin_name Char(1) NOT NULL,
Aisle_no Integer NOT NULL,
Category_ID Integer NOT NULL,
Brand_ID Integer NOT NULL,
Inventory_barcode Integer NOT NULL,
Order_ID Integer,
SupplierID Integer,
PRIMARY KEY (Barcode),
UNIQUE (Order_ID)
);

CREATE TABLE Inventory(
Barcode Integer NOT NULL,
Quantity Integer NOT NULL,
PRIMARY KEY (Barcode)
);


CREATE TABLE ProductSupplier(
Barcode Integer,
SupplierID Integer,
PRIMARY KEY (Barcode,SupplierID)
);


CREATE TABLE OutgoingShipmentOrder(
Order_ID Integer,
ShipmentDate Integer,
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
ShipmentDate Integer,
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
HighLightView Char(1),
PRIMARY KEY (DaysToShipment)
);

ALTER TABLE Bin
ADD CONSTRAINT fk1
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no) ON DELETE NO ACTION;

ALTER TABLE Categories
ADD CONSTRAINT fk2
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no);

ALTER TABLE Product
ADD CONSTRAINT fk5
    FOREIGN KEY (Bin_name,Aisle_no) REFERENCES Bin (Bin_name,Aisle_no);

ALTER TABLE Product
ADD CONSTRAINT fk6
    FOREIGN KEY (Category_ID) REFERENCES Categories (Category_ID);

ALTER TABLE Product
ADD CONSTRAINT fk7    
    FOREIGN KEY (Brand_ID) REFERENCES Brands (Brand_ID);

ALTER TABLE Product
ADD CONSTRAINT fk8    
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode);

ALTER TABLE Inventory
ADD CONSTRAINT fk10
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode);

ALTER TABLE ProductSupplier
ADD CONSTRAINT fk11
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode);

ALTER TABLE ProductSupplier
ADD CONSTRAINT fk12
    FOREIGN KEY (SupplierID) 
    REFERENCES Supplier (SupplierID);


ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk13
FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee (AssignedDriver);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk14
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Inventory_barcode);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk15
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk16
FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);


ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk17
FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee (Employee_ID);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk18
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory Barcode;

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk19
FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk20
FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);