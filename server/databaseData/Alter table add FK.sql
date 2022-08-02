
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

ALTER TABLE Supplier
ADD CONSTRAINT fk11
    FOREIGN KEY (ProductID)
    REFERENCES Product (Barcode);




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