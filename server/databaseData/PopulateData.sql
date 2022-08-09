INSERT INTO inventory_system.Brands VALUES (100, 'Nike');
INSERT INTO inventory_system.Brands VALUES (200, 'Adidas');
INSERT INTO inventory_system.Brands VALUES (300, 'Fila');
INSERT INTO inventory_system.Brands VALUES (400, 'Champion');
INSERT INTO inventory_system.Brands VALUES (500, 'Columbia');

INSERT INTO inventory_system.Categories VALUES (1, 'T-shirt', 1);
INSERT INTO inventory_system.Categories VALUES (2, 'Shirt', 2);
INSERT INTO inventory_system.Categories VALUES (3, 'Pants', 3);
INSERT INTO inventory_system.Categories VALUES (4, 'Shorts', 4);
INSERT INTO inventory_system.Categories VALUES (5, 'Coats', 5);

INSERT INTO inventory_system.Supplier VALUES (9513124873, 'Acme', 302, 364);
INSERT INTO inventory_system.Supplier VALUES (9513124192, 'Peak', 402, 374);
INSERT INTO inventory_system.Supplier VALUES (9519021001, 'Admire', 502, 384);
INSERT INTO inventory_system.Supplier VALUES (9517701000, 'ClothingInc', 650, 394);
INSERT INTO inventory_system.Supplier VALUES (9501000013, 'DivineClothing', 71, 354);

INSERT INTO inventory_system.Aisle VALUES (1);
INSERT INTO inventory_system.Aisle VALUES (2);
INSERT INTO inventory_system.Aisle VALUES (3);
INSERT INTO inventory_system.Aisle VALUES (4);
INSERT INTO inventory_system.Aisle VALUES (5);

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

INSERT INTO inventory_system.Inventory VALUES (364,120);
INSERT INTO inventory_system.Inventory VALUES (374,452);
INSERT INTO inventory_system.Inventory VALUES (384,278);
INSERT INTO inventory_system.Inventory VALUES (394,215);
INSERT INTO inventory_system.Inventory VALUES (354,253);

INSERT INTO inventory_system.Inventory VALUES (464,320);
INSERT INTO inventory_system.Inventory VALUES (474,352);
INSERT INTO inventory_system.Inventory VALUES (484,378);
INSERT INTO inventory_system.Inventory VALUES (494,315);
INSERT INTO inventory_system.Inventory VALUES (454,353);

INSERT INTO inventory_system.Inventory VALUES (564,120);
INSERT INTO inventory_system.Inventory VALUES (574,452);
INSERT INTO inventory_system.Inventory VALUES (584,278);
INSERT INTO inventory_system.Inventory VALUES (594,215);
INSERT INTO inventory_system.Inventory VALUES (554,253);

INSERT INTO inventory_system.Inventory VALUES (664,120);
INSERT INTO inventory_system.Inventory VALUES (674,452);
INSERT INTO inventory_system.Inventory VALUES (684,278);
INSERT INTO inventory_system.Inventory VALUES (694,215);
INSERT INTO inventory_system.Inventory VALUES (654,253);

INSERT INTO inventory_system.Product VALUES (364, 'Nike shirt 1', 'Small','KO',2,2,100,364,302,90);
INSERT INTO inventory_system.Product VALUES (374, 'Nike shirt 2', 'Small','KO',2,2,100,374,402,120);
INSERT INTO inventory_system.Product VALUES (384, 'Nike shirt 3', 'Large','KO',2,2,100,384,502,142);
INSERT INTO inventory_system.Product VALUES (394, 'Nike shirt 4', 'Small','KO',2,2,100,394,650,72);
INSERT INTO inventory_system.Product VALUES (354, 'Nike shirt 5', 'Large','KO',2,2,100,354,71,80);

INSERT INTO inventory_system.Product VALUES (464, 'Adidas shirt 1', 'Small','AE',2,2,200,464,302,45);
INSERT INTO inventory_system.Product VALUES (474, 'Adidas shirt 2', 'Medium','AE',2,2,200,474,402,109);
INSERT INTO inventory_system.Product VALUES (484, 'Adidas shirt 3', 'Small','AE',2,2,200,484,502,76);
INSERT INTO inventory_system.Product VALUES (494, 'Adidas shirt 4', 'Large','AE',2,2,200,494,650,110);
INSERT INTO inventory_system.Product VALUES (454, 'Adidas shirt 5', 'Small','AE',2,2,200,454,71,49);

INSERT INTO inventory_system.Product VALUES (564, 'Fila shirt 1', 'Large','FG',2,2,300,564,302,34);
INSERT INTO inventory_system.Product VALUES (574, 'Fila shirt 2', 'Large','FG',2,2,300,574,402,45);
INSERT INTO inventory_system.Product VALUES (584, 'Fila shirt 3', 'Small','FG',2,2,300,584,502,23);
INSERT INTO inventory_system.Product VALUES (594, 'Fila shirt 4', 'Large','FG',2,2,300,594,650,67);
INSERT INTO inventory_system.Product VALUES (554, 'Fila shirt 5', 'Small','FG',2,2,300,554,71,16);

INSERT INTO inventory_system.Product VALUES (664, 'Champion shirt 1', 'Small','AE',2,2,400,664,302,17);
INSERT INTO inventory_system.Product VALUES (674, 'Champion shirt 2', 'Large','AE',2,2,400,674,402,78);
INSERT INTO inventory_system.Product VALUES (684, 'Champion shirt 3', 'Small','AE',2,2,400,684,502,23);
INSERT INTO inventory_system.Product VALUES (694, 'Champion shirt 4', 'Medium','AE',2,2,400,694,650,47);
INSERT INTO inventory_system.Product VALUES (654, 'Champion shirt 5', 'Medium','AE',2,2,400,654,71,36);

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



INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48231, '12/06/1985', 2, 62146, '123 Almond Drive', 12, 354,354,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48562, '12/06/1985', 2, 56114, '170 Almond Drive', 12, 354,354,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48011, '12/06/1985', 2, 30523, '112 Almond Drive', 12, 354,354,30014);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48232, '13/06/1985', 5, 98115, '125 Almond Drive', 2, 364,364,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48233, '14/06/1985', 7, 56114, '127 Almond Drive', 7, 374,374,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48234, '15/06/1985', 9, 30002, '121 Almond Drive', 14, 384,384,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48235, '16/06/1985', 4, 56114, '122 Almond Drive', 2, 394,394,30014);

INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48241, '12/07/1985', 10, 98115, '123 Almond Drive', 9, 454,454,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48242, '13/07/1985', 3, 30002, '125 Almond Drive', 2, 464,464,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (48243, '14/07/1985', 6, 56114, '127 Almond Drive', 7, 474,474,35215);

INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (58234, '17/06/1985', 4, 30002, '121 Almond Drive', 11, 584,584,35215);
INSERT INTO inventory_system.OutgoingShipmentOrder VALUES (58235, '11/06/1985', 2, 98115, '122 Almond Drive', 8, 594,594,30014);


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