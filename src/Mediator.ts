class ChatRoom {
   static showMessage(user: User, message: string){
      console.log(new Date().toString()
         + " [" + user.getName() +"] : " + message);
   }
}

class User {
   private name : string;

   public getName(): string {
      return this.name;
   }

   setName(name: string): void {
      this.name = name;
   }

   constructor(name: string){
      this.name  = name;
   }

   sendMessage(message: string): void{
      ChatRoom.showMessage(this, message);
   }
}

let robert = new User("Robert");
let john = new User("John");

robert.sendMessage("Hi! John!");
john.sendMessage("Hello! Robert!");