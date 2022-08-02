INSERT INTO Brands VALUES (100, ‘Nike');
INSERT INTO Brands VALUES (200, ‘Adidas');
INSERT INTO Brands VALUES (300, ‘Fila');
INSERT INTO Brands VALUES (400, ‘Champion');
INSERT INTO Brands VALUES (500, ‘Columbia');

INSERT INTO Aisle VALUES (1);
INSERT INTO Aisle VALUES (2);
INSERT INTO Aisle VALUES (3);
INSERT INTO Aisle VALUES (4);
INSERT INTO Aisle VALUES (5);

INSERT INTO Bin VALUES (‘AE’, 1000, 1, 0);
INSERT INTO Bin VALUES (‘FG’, 1000, 1, 0);
INSERT INTO Bin VALUES (‘KO’, 1000, 1, 0);
INSERT INTO Bin VALUES (‘PT’, 1000, 1, 0);
INSERT INTO Bin VALUES (‘UZ’, 1000, 1, 0);
INSERT INTO Bin VALUES (‘AE’, 1000, 2, 0);
INSERT INTO Bin VALUES (‘FG’, 1000, 2, 0);
INSERT INTO Bin VALUES (‘KO’, 1000, 2, 0);
INSERT INTO Bin VALUES (‘PT’, 1000, 2, 0);
INSERT INTO Bin VALUES (‘UZ’, 1000, 2, 0);
INSERT INTO Bin VALUES (‘AE’, 1000, 3, 0);
INSERT INTO Bin VALUES (‘FG’, 1000, 3, 0);
INSERT INTO Bin VALUES (‘KO’, 1000, 3, 0);
INSERT INTO Bin VALUES (‘PT’, 1000, 3, 0);
INSERT INTO Bin VALUES (‘UZ’, 1000, 3, 0);
INSERT INTO Bin VALUES (‘AE’, 1000, 4, 0);
INSERT INTO Bin VALUES (‘FG’, 1000, 4, 0);
INSERT INTO Bin VALUES (‘KO’, 1000, 4, 0);
INSERT INTO Bin VALUES (‘PT’, 1000, 4, 0);
INSERT INTO Bin VALUES (‘UZ’, 1000, 4, 0);
INSERT INTO Bin VALUES (‘AE’, 1000, 5, 0);
INSERT INTO Bin VALUES (‘FG’, 1000, 5, 0);
INSERT INTO Bin VALUES (‘KO’, 1000, 5, 0);
INSERT INTO Bin VALUES (‘PT’, 1000, 5, 0);
INSERT INTO Bin VALUES (‘UZ’, 1000, 5, 0);




INSERT INTO Categories VALUES (1, 'T-shirt', 1);
INSERT INTO Categories VALUES (2, 'Shirt', 2);
INSERT INTO Categories VALUES (3, 'Pants', 3);
INSERT INTO Categories VALUES (4, 'Shorts', 4);
INSERT INTO Categories VALUES (5, 'Coats', 5);

INSERT INTO Inventory VALUES (364, 12);
INSERT INTO Inventory VALUES (374, 45);
INSERT INTO Inventory VALUES (384, 78);
INSERT INTO Inventory VALUES ( 394, 15);
INSERT INTO Inventory VALUES ( 354, 3);

INSERT INTO Supplier VALUES (9513124873, Acme, 302);
INSERT INTO Supplier VALUES (9513124192, Peak, 402);
INSERT INTO Supplier VALUES (9519021001, Admire, 502);
INSERT INTO Supplier VALUES (9517701000, Clothing Inc, 650);
INSERT INTO Supplier VALUES (9501000013, Divine Clothing, 71);

INSERT INTO Product VALUES (364, ‘Nike shirt 1’, ‘Small’, ‘KO’, 2, 2,100,364,NULL);
INSERT INTO Product VALUES (374, ‘Nike shirt 2’, ‘Small’, ‘KO’, 2, 2,100,374,NULL);
INSERT INTO Product VALUES (384, ‘Nike shirt 3’, ‘Small’, ‘KO’, 2, 2,100,384,NULL);
INSERT INTO Product VALUES (394, ‘Nike shirt 4’, ‘Small’, ‘KO’, 2, 2,100,394,NULL);
INSERT INTO Product VALUES (354, ‘Nike shirt 5’, ‘Small’, ‘KO’, 2, 2,100,354,NULL);

INSERT INTO ProductSupplier VALUES (364, 302);
INSERT INTO ProductSupplier VALUES (374, 402);
INSERT INTO ProductSupplier VALUES (384, 302);
INSERT INTO ProductSupplier VALUES (394, 302);
INSERT INTO ProductSupplier VALUES (354, 302);

INSERT INTO ManagerEmployee VALUES (39302, 593105933, ‘17/02/1995’, ‘45 Grove Drive’, 125000, ‘Adam’, ‘West’, 12, ‘Purchasing’);
INSERT INTO ManagerEmployee VALUES (33113, 593100141, ‘12/06/1985’, ‘75 Grove Drive’, 135000, ‘David’, ‘Ames’, 4, ‘Payroll’);
INSERT INTO ManagerEmployee VALUES (30014, 581105961, ‘19/01/1997’, ‘15 Grove Drive’, 145000, ‘John’, ‘West’, 9, ‘HR’);
INSERT INTO ManagerEmployee VALUES (35215, 500345930, ‘13/07/1975’, ‘95 Grove Drive’, 165100, ‘John’, ‘Xi’, 17, ‘Marketing’);
INSERT INTO ManagerEmployee VALUES (66546,871305965, ‘07/12/1998’, ‘25 Grove Drive’, 95000, ‘Smith’, West, 22, ‘Recruitment’);



INSERT INTO DriverEmployee VALUES (30002, 593111933, ‘17/02/1995’, ‘45 Apple Drive’, 85000, ‘Michael’, ‘Johnson’, 12, ‘A’);
INSERT INTO DriverEmployee VALUES (30523, 591110141, ‘12/06/1985’, ‘75 Apple Drive’, 95000, ‘Thomas’, ‘Williams’, 4, ‘B’);
INSERT INTO DriverEmployee VALUES (56114, 5811123961, ‘19/01/1997’, ‘15 Apple Drive’, 55000, ‘Charles’, ‘Brown’, 9, ‘C’);
INSERT INTO DriverEmployee VALUES (98115, 455545930, ‘13/07/1975’, ‘95 Apple Drive’, 65100, ‘Christopher’, ‘Jones’, 17, ‘C’);
INSERT INTO DriverEmployee VALUES (62146,932105965, ‘07/12/1998’, ‘25 Apple Drive’, 85000, ‘Daniel’, ‘Garcia’, 22, ‘A’);

INSERT INTO WorkerEmployee VALUES (39212, 591231933, ‘17/03/1995’, ‘45 Chestnut Drive’, 85000, ‘Matthew’, ‘Miller’, 15, ‘Yes’);
INSERT INTO WorkerEmployee VALUES (310233, 596540141, ‘12/07/1985’, ‘75 Chestnut Drive’, 95000, ‘Anthony’, ‘Davis’, 14, ‘No’);
INSERT INTO WorkerEmployee VALUES (516214, 5811682961, ‘19/03/1997’, ‘15 Chestnut Drive’, 55000, ‘Mark’, ‘Rodriguez’, 4, ‘Yes’);
INSERT INTO WorkerEmployee VALUES (900115, 455989830, ‘13/06/1975’, ‘95 Chestnut Drive’, 65100, ‘Donald’, ‘Martinez’, 27, ‘No’);
INSERT INTO WorkerEmployee VALUES (12146,91205455, ‘07/11/1998’, ‘25 Chestnut Drive’, 85000, ‘Steven’, ‘Lopez’, 21, ‘No’);

INSERT INTO Benefits VALUES (1, 'E');
INSERT INTO Benefits VALUES (2, 'E');
INSERT INTO Benefits VALUES (3, 'E');
INSERT INTO Benefits VALUES (4, 'E');
INSERT INTO Benefits VALUES (5, 'E');
INSERT INTO Benefits VALUES (6, 'D');
INSERT INTO Benefits VALUES (7, 'D');
INSERT INTO Benefits VALUES (8, 'D');
INSERT INTO Benefits VALUES (9, 'D');
INSERT INTO Benefits VALUES (10, 'D');
INSERT INTO Benefits VALUES (11, 'C');
INSERT INTO Benefits VALUES (12, 'C');
INSERT INTO Benefits VALUES (13, 'C');
INSERT INTO Benefits VALUES (14, 'C');
INSERT INTO Benefits VALUES (15, 'C');
INSERT INTO Benefits VALUES (16, 'B');
INSERT INTO Benefits VALUES (17, 'B');
INSERT INTO Benefits VALUES (18, 'B');
INSERT INTO Benefits VALUES (19, 'B');
INSERT INTO Benefits VALUES (20, 'B');
INSERT INTO Benefits VALUES (21, 'A');
INSERT INTO Benefits VALUES (22, 'A');
INSERT INTO Benefits VALUES (23, 'A');
INSERT INTO Benefits VALUES (24, 'A');
INSERT INTO Benefits VALUES (25, 'A');
INSERT INTO Benefits VALUES (26, 'A');
INSERT INTO Benefits VALUES (27, 'A');
INSERT INTO Benefits VALUES (28, 'A');
INSERT INTO Benefits VALUES (29, 'A');
INSERT INTO Benefits VALUES (30, 'A');

INSERT INTO Holiday VALUES (1, ‘Vancouver’);
INSERT INTO Holiday VALUES (2, ‘Vancouver’);
INSERT INTO Holiday VALUES (3, ‘Vancouver’);
INSERT INTO Holiday VALUES (4, ‘Vancouver’);
INSERT INTO Holiday VALUES (5, ‘Vancouver’);
INSERT INTO Holiday VALUES (6, ‘Toronto’);
INSERT INTO Holiday VALUES (7, ‘Toronto’);
INSERT INTO Holiday VALUES (8, ‘Toronto’);
INSERT INTO Holiday VALUES (9, ‘Toronto’);
INSERT INTO Holiday VALUES (10, ‘Toronto’);
INSERT INTO Holiday VALUES (11, ‘New York City’);
INSERT INTO Holiday VALUES (12, ‘New York City’);
INSERT INTO Holiday VALUES (13, ‘New York City’);
INSERT INTO Holiday VALUES (14, ‘New York City’);
INSERT INTO Holiday VALUES (15, ‘New York City’);
INSERT INTO Holiday VALUES (16, ‘London’);
INSERT INTO Holiday VALUES (17, ‘London’);
INSERT INTO Holiday VALUES (18, ‘London’);
INSERT INTO Holiday VALUES (19, ‘London’);
INSERT INTO Holiday VALUES (20, ‘London’);
INSERT INTO Holiday VALUES (21, ‘Paris’);
INSERT INTO Holiday VALUES (22, ‘Paris’);
INSERT INTO Holiday VALUES (23, ‘Paris’);
INSERT INTO Holiday VALUES (24, ‘Paris’);
INSERT INTO Holiday VALUES (25, ‘Paris’);
INSERT INTO Holiday VALUES (26, ‘Paris’);
INSERT INTO Holiday VALUES (27, ‘Paris’);
INSERT INTO Holiday VALUES (28, ‘Paris’);
INSERT INTO Holiday VALUES (29, ‘Paris’);
INSERT INTO Holiday VALUES (30, ‘Paris’);



INSERT INTO OutgoingShipmentOrder VALUES (48231, ‘12/06/1985’, 2, 30002, ‘123 Almond Drive’, 12, 354,354,35215);INSERT INTO OutgoingShipmentOrder VALUES (48232, ‘13/06/1985’, 5, 30002, ‘123 Almond Drive’, 2, 364,364,35215);
INSERT INTO OutgoingShipmentOrder VALUES (48233, ‘14/06/1985’, 7, 30002, ‘123 Almond Drive’, 7, 374,374,35215);
INSERT INTO OutgoingShipmentOrder VALUES (48234, ‘15/06/1985’, 9, 30002, ‘123 Almond Drive’, 14, 384,384,35215);
INSERT INTO OutgoingShipmentOrder VALUES (48235, ‘16/06/1985’, 4, 30002, ‘123 Almond Drive’, 2, 394,394,35215);

INSERT INTO IncomingShipmentOrder VALUES (48641, ‘16/06/1984’, 14, 39212, 12, 354,354,39302);
INSERT INTO IncomingShipmentOrder VALUES (48671, ‘13/06/1984’, 12, 39212, 2, 364,364,39302);
INSERT INTO IncomingShipmentOrder VALUES (83133, ‘14/06/1984’, 17, 39212, 7, 374,374,39302);
INSERT INTO IncomingShipmentOrder VALUES (11134, ‘15/06/1984’, 15, 39212,16, 384,384,39302);
INSERT INTO IncomingShipmentOrder VALUES (73135, ‘16/06/1984’, 7, 310233,20, 394,394,39302);

INSERT INTO Priority VALUES (1, ‘low’)
INSERT INTO Priority VALUES (2, ‘low’)
INSERT INTO Priority VALUES (3, ‘low’)
INSERT INTO Priority VALUES (4, ‘low’)
INSERT INTO Priority VALUES (5, ‘low’)
INSERT INTO Priority VALUES (6, ‘medium’)
INSERT INTO Priority VALUES (7, ‘medium’)
INSERT INTO Priority VALUES (8, ‘medium’)
INSERT INTO Priority VALUES (9, ‘medium’)
INSERT INTO Priority VALUES (10, ‘medium’)
INSERT INTO Priority VALUES (11, ‘high’)
INSERT INTO Priority VALUES (12, ‘high’)
INSERT INTO Priority VALUES (13, ‘high’)
INSERT INTO Priority VALUES (14, ‘high’)
INSERT INTO Priority VALUES (15, ‘high’)

INSERT INTO Highlight VALUES (1, ‘Yes’)
INSERT INTO Highlight VALUES (2, ‘Yes’)
INSERT INTO Highlight VALUES (3, ‘Yes’)
INSERT INTO Highlight VALUES (4, ‘Yes’)
INSERT INTO Highlight VALUES (5, ‘Yes’)
INSERT INTO Highlight VALUES (6, ‘No’)
INSERT INTO Highlight VALUES (7, ‘No’)
INSERT INTO Highlight VALUES (8, ‘No’)
INSERT INTO Highlight VALUES (9, ‘No’)
INSERT INTO Highlight VALUES (10, ‘No’)
INSERT INTO Highlight VALUES (11, ‘No’)
INSERT INTO Highlight VALUES (12, ‘No’)
INSERT INTO Highlight VALUES (13, ‘No’)
INSERT INTO Highlight VALUES (14, ‘No’)
INSERT INTO Highlight VALUES (15, ‘No’)
