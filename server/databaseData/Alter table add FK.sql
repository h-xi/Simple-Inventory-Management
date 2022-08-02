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
    FOREIGN KEY (Bin_name,Aisle_no) REFERENCES Bin (Bin_name,Aisle_no),
    FOREIGN KEY (Category_ID) REFERENCES Categories,
    FOREIGN KEY (Brand_ID) REFERENCES Brands,
    FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
    FOREIGN KEY (Order_ID) REFERENCES Order;

ALTER TABLE Inventory
ADD CONSTRAINT fk6
    FOREIGN KEY (Barcode)
    REFERENCES Product (Barcode);

ALTER TABLE ProductSupplier
ADD CONSTRAINT fk7
FOREIGN KEY Barcode REFERENCES Product,
FOREIGN KEY SupplierID REFERENCES Supplier;

ALTER TABLE OutgoingShipmentOrder
ADD CONSTRAINT fk8
FOREIGN KEY (AssignedDriver) REFERENCES DriverEmployee,
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
FOREIGN KEY (Product_Barcode) REFERENCES Product(Barcode),
FOREIGN KEY (Manager) REFERENCES ManagerEmployee;

ALTER TABLE IncomingShipmentOrder
ADD CONSTRAINT fk9
FOREIGN KEY (AssignedReceiver) REFERENCES WorkerEmployee,
FOREIGN KEY (Inventory_barcode) REFERENCES Inventory,
FOREIGN KEY (Product_Barcode) REFERENCES Product (Barcode),
FOREIGN KEY (Manager) REFERENCES ManagerEmployee;

-- what to do abou this??
--ALTER TABLE Product
--ADD CONSTRAINT fk9
--    FOREIGN KEY (Order_ID) REFERENCES Order (Order_ID);


ALTER TABLE ProductSupplier
ADD CONSTRAINT fk11
    FOREIGN KEY Barcode
    REFERENCES Product (Barcode);