abstract class AbstractCustomer {
   protected name: string;
   abstract isNil(): boolean;
   abstract getName(): string;
}

class RealCustomer extends AbstractCustomer {

   constructor(name: string) {
   	  super();
      this.name = name;		
   }
   
   getName(): string {
      return this.name;
   }
   
   isNil(): boolean {
      return false;
   }
}

class NullCustomer extends AbstractCustomer {

   getName(): string {
      return "Not Available in Customer Database";
   }

   isNil(): boolean {
      return true;
   }
}

class CustomerFactory {
	
   public static names = ["Rob", "Joe", "Julie"];

   public static getCustomer(name: string): AbstractCustomer{
      for (let i = 0; i < CustomerFactory.names.length; i++) {
         if (CustomerFactory.names[i].toLocaleLowerCase() == name.toLocaleLowerCase()){
            return new RealCustomer(name);
         }
      }
      return new NullCustomer();
   }
}


let customer1 = CustomerFactory.getCustomer("Rob");
let customer2 = CustomerFactory.getCustomer("Bob");
let customer3 = CustomerFactory.getCustomer("Julie");
let customer4 = CustomerFactory.getCustomer("Laura");

console.log("Customers");
console.log(customer1.getName());
console.log(customer2.getName());
console.log(customer3.getName());
console.log(customer4.getName());