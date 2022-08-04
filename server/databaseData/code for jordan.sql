
To update IncomingShipmentOrder:
    table = "IncomingShipmentOrder";
    assignedEmployee = order.AssignedReceiver;
`UPDATE inventory_system.${table} SET ShipmentDate = ${shipmentDate}, Quantity = ${quantity}, AssignedReceiver = ${assignedEmployee}, Inventory_Barcode = ${barcode}, Product_Barcode = ${product}, Manager = ${manager} WHERE Order_ID = ${order_id})`


To update OutgoingShipmentOrder:
    table = "OutgoingShipmentOrder";
    assignedEmployee = order.AssignedDriver;
    daysToShipment = order.DaysToShipment;
    deliveryAddress = order.DeliveryAddress;




To delete order:
table = "IncomingShipmentOrder";
    sql = `DELETE FROM inventory_system.${table} WHERE Order_ID = ${orderID}`;

table = "OutgoingShipmentOrder";
    sql = `DELETE FROM inventory_system.${table} WHERE Order_ID = ${orderID}`;



to add IncomingShipmentOrder order:
table = "IncomingShipmentOrder";
    assignedEmployee = order.AssignedReceiver;
    sql = `INSERT INTO inventory_system.${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${barcode}, ${product}, ${manager})`;


to add Outgoingshipmentorder order:
   table = "OutgoingShipmentOrder";
    assignedEmployee = order.AssignedDriver;
    daysToShipment = order.DaysToShipment;
    deliveryAddress = order.DeliveryAddress;
    sql = `INSERT INTO inventory_system.${table} VALUES(${order_id}, ${shipmentDate}, ${quantity}, ${assignedEmployee}, ${deliveryAddress}, ${daysToShipment}, ${barcode}, ${product}, ${manager})`;
