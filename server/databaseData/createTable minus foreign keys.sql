CREATE TABLE Brands(Brand_ID Integer, B_name Char(30), PRIMARY KEY (Brand_ID));

CREATE TABLE Aisle(Aisle_no Integer,PRIMARY KEY (Aisle_no));

CREATE TABLE Bin(
  Bin_name CHAR(2),
  Capacity Integer,
  Aisle_no Integer,
  quant_filled Integer,
  PRIMARY KEY(Bin_name, Aisle_no)
  );


ALTER TABLE Bin
ADD CONSTRAINT fk1
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no) ON DELETE NO ACTION;


CREATE TABLE Categories(
Category_ID Integer,
Cat_name Char(30),
Aisle_no Integer,
PRIMARY KEY (Category_ID),
);

ALTER TABLE Categories
ADD CONSTRAINT fk2
    FOREIGN KEY (Aisle_no)
    REFERENCES Aisle (Aisle_no);



CREATE TABLE Supplier(
S_contact Char(50),
Supplier_name Char(40),
Supplier_ID Integer,
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

ALTER TABLE Benefits
ADD CONSTRAINT fk3
    FOREIGN KEY (YearsWorked)
    REFERENCES ManagerEmployee (YearsWorked);



CREATE TABLE Holiday(
YearsWorked Integer,
Holiday_dest Char(15),
Primary Key (YearsWorked)
);

ALTER TABLE Holiday
ADD CONSTRAINT fk4
    FOREIGN KEY (YearsWorked)
    REFERENCES ManagerEmployee (YearsWorked);


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
PRIMARY KEY (Barcode),
UNIQUE (Order_ID)
);

ALTER TABLE Product
ADD CONSTRAINT fk5
    FOREIGN KEY (Bin_name,Aisle_no) REFERENCES Bin (Bin_name,Aisle_no),
    FOREIGN KEY (Category_ID) REFERENCES Categories,
    FOREIGN KEY (Brand_ID) REFERENCES Brands,
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
    FOREIGN KEY (Order_ID) REFERENCES Order;

CREATE TABLE Inventory(
Barcode Integer NOT NULL,
Quantity Integer NOT NULL,
PRIMARY KEY (Barcode)
);


CREATE TABLE Inventory(
Barcode Integer NOT NUL,
Quantity Integer NOT NULL,
PRIMARY KEY (Barcode),
FOREIGN KEY (Barcode) REFERENCES Product(Barcode),
);


ALTER TABLE Inventory
ADD CONSTRAINT fk6
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode);



CREATE TABLE ProductSupplier(
Barcode Integer,
SupplierID Integer,
PRIMARY KEY (Barcode,SupplierID),
);

ALTER TABLE ProductSupplier
ADD CONSTRAINT fk7
FOREIGN KEY Barcode REFERENCES Product,
FOREIGN KEY SupplierID REFERENCES Supplier;



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

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk8
FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee,
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode),
FOREIGN KEY (Manager) REFERENCES ManagerEmployee;



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

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk9
FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee,
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode) ON DELETE CASCADE,
FOREIGN KEY (Manager) REFERENCES ManagerEmployee;



CREATE TABLE Priority(
Quantity Integer,
PriorityStatus Char(6),
PRIMARY KEY (Quantity)
);

ALTER TABLE Priority
ADD CONSTRAINT fk10
FOREIGN KEY (Quantity) REFERENCES OutgoingShipmentOrder (Quantity);



CREATE TABLE Highlight(
DaysToShipment Integer,
HighLightView Char(1),
PRIMARY KEY (DaysToShipment)
);

ALTER TABLE Highlight
ADD CONSTRAINT fk11
FOREIGN KEY (DaysToShipment) REFERENCES OutgoingShipmentOrder(DaysToShipment);