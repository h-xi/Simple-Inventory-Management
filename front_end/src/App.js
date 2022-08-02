import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Incoming">
        <label>Order ID:</label>
        <input type="number" />
        <label>Item Number:</label>
        <input type="number" />
        <label>Shipment Date:</label>
        <input type="date" />
        <label>Quantity:</label>
        <input type="number" />
        <label>Assigned Receiver:</label>
        <input type="text" />
        <button>Incoming Shipment</button>
      </div>
      <div className="Outgoing">
        <label>Order ID:</label>
        <input type="number" />
        <label>Item Number:</label>
        <input type="number" />
        <label>Shipment Date:</label>
        <input type="date" />
        <label>Quantity:</label>
        <input type="number" />
        <label>Assigned Driver:</label>
        <input type="text" />
        <label>Delivery Address:</label>
        <input type="text" />
        <button>Outgoing Shipment</button>
      </div>
    </div>
  );
}

export default App;
