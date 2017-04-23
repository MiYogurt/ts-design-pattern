interface Order{
    execute()
}


class Stock {
	
   private name: string = "ABC";
   private quantity: number = 10;

   buy(){
      console.log("Stock [ Name: "+this.name+" Quantity: " + this.quantity +" ] bought");
   }
   sell(){
      console.log("Stock [ Name: "+this.name+" Quantity: " + this.quantity +" ] sold");
   }
}

class BuyStock implements Order {
   private abcStock : Stock;

   constructor(abcStock: Stock){
      this.abcStock = abcStock;
   }

   execute() {
      this.abcStock.buy();
   }
}

class SellStock implements Order {
   private abcStock: Stock;

   constructor(abcStock: Stock){
      this.abcStock = abcStock;
   }

   execute() {
      this.abcStock.sell();
   }
}

class Broker {
   private orderList = new Array<Order>(); 

   takeOrder(order: Order){
      this.orderList.push(order);		
   }

   placeOrders(){
      for (let order of this.orderList) {
         order.execute();
      }
      this.orderList.length = 0;
   }
}

let abcStock = new Stock();

let buyStockOrder = new BuyStock(abcStock);
let sellStockOrder = new SellStock(abcStock);

let brock = new Broker();

brock.takeOrder(buyStockOrder);
brock.takeOrder(sellStockOrder);

brock.placeOrders() 
