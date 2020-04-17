class Shipment {
  constructor(public address: string, public zip: string) {
    this.address = address;
    this.zip = zip;
  }
}

class Order {
  constructor(public customer: string, public ship: Shipment) {
    this.customer = customer;
    this.ship = ship;
  }

  toString = () => {
    return `Order { customer: ${this.customer}, shipped to: ${this.ship.address}, ${this.ship.zip} }`;
  }
}

let order = new Order("Sam", new Shipment("1 Main St", "02139"));

console.log(order.toString());