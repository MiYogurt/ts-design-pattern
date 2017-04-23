interface ComputerPart {
   accept(computerPartVisitor: ComputerPartVisitor);
}

class Keyboard implements ComputerPart {

   accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
   }

}

class Monitor implements ComputerPart {
   accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
   }
}

class Mouse implements ComputerPart {

   accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
   }
}

class Computer implements ComputerPart {
	
   parts: ComputerPart[] ;

   constructor(){
      this.parts = [new Mouse(), new Keyboard(), new Monitor()];		
   } 


   accept(computerPartVisitor: ComputerPartVisitor) {
      for (let i = 0; i < this.parts.length; i++) {
         this.parts[i].accept(computerPartVisitor);
      }
      computerPartVisitor.visit(this);
   }
}

interface ComputerPartVisitor {
	visit(computer: Computer);
	visit(mouse: Mouse);
	visit(keyboard: Keyboard);
	visit(monitor: Monitor);
}

class ComputerPartDisplayVisitor implements ComputerPartVisitor {
   visit(computer: Computer);
   visit(mouse: Mouse);
   visit(keyboard: Keyboard);
   visit(monitor: Monitor);
   visit(obj: Computer | Mouse | Keyboard | Monitor) {
      if(obj instanceof Computer) {
         console.log("Displaying Computer.");
      }else if(obj instanceof Mouse){
         console.log("Displaying Mouse.");
      }else if(obj instanceof Keyboard){
         console.log("Displaying Keyboard.");
      }else if(obj instanceof Monitor){
         console.log("Displaying Monitor.");
      }
   }

   // typescript 貌似并不能支持类方法多次声明, 只能实现一次

   // visit(mouse: Mouse) {
   //    console.log("Displaying Mouse.");
   // }

   // visit(keyboard: Keyboard) {
   //    console.log("Displaying Keyboard.");
   // }

   // visit(monitor: Monitor) {
   //    console.log("Displaying Monitor.");
   // }
}

let computer = new Computer();
computer.accept(new ComputerPartDisplayVisitor());

