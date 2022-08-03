CREATE TABLE Brands(Brand_ID Integer, B_name Char(30), PRIMARY KEY (Brand_ID));




CREATE TABLE Categories(
Category_ID Integer,
Cat_name Char(30),
Aisle_no Integer,
PRIMARY KEY(Category_ID)
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
SupplierID Integer,
PRIMARY KEY (Barcode)
);

CREATE TABLE Aisle(
    Aisle_no Integer,
    PRIMARY KEY (Aisle_no)
    );

CREATE TABLE Bin(
  Bin_name CHAR(2),
  Aisle_no Integer,
  Capacity Integer,
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
    FOREIGN KEY (Bin_name) REFERENCES Bin (Bin_name);

ALTER TABLE Product
ADD CONSTRAINT fk6
    FOREIGN KEY (Category_ID) REFERENCES Categories (Category_ID);

ALTER TABLE ManagerEmployee
ADD CONSTRAINT fk66
    FOREIGN KEY (YearsWorked) REFERENCES Benefits (YearsWorked);


ALTER TABLE ManagerEmployee
ADD CONSTRAINT fk666
    FOREIGN KEY (YearsWorked) REFERENCES Holiday (YearsWorked);

ALTER TABLE Product
ADD CONSTRAINT fk7    
    FOREIGN KEY (Brand_ID) REFERENCES Brands (Brand_ID);

ALTER TABLE Product
ADD CONSTRAINT fk8    
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode);

ALTER TABLE Inventory
ADD CONSTRAINT fk10
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE Supplier
ADD CONSTRAINT fk11
    FOREIGN KEY (ProductID)
    REFERENCES Product (Barcode) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk13
FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee(Employee_ID);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk14
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory(Barcode);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk15
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk16
FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk166
FOREIGN KEY (Quantity) REFERENCES Priority (Quantity);

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk167
FOREIGN KEY (DaysToShipment) REFERENCES Highlight (DaysToShipment);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk17
FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee (Employee_ID);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk18
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory (Barcode);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk19
FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode);

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk20
FOREIGN KEY (Manager) REFERENCES ManagerEmployee (Employee_ID);