class Memento {
   private state: string;

   constructor(state: string){
      this.state = state;
   }

   getState(): string{
      return this.state;
   }	
}

class Originator {
   private state: string;

   setState(state: string){
      this.state = state;
   }

   getState(): string{
      return this.state;
   }

   saveStateToMemento(): Memento{
      return new Memento(this.state);
   }

   getStateFromMemento(Memento: Memento ){
      this.state = Memento.getState();
   }
}

class CareTaker {
   private mementoList = new Array<Memento>();

   add(state: Memento){
      this.mementoList.push(state);
   }

   get(index: number): Memento{
      return this.mementoList[index];
   }
}


let originator = new Originator();
let careTaker = new CareTaker();
originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento()); // #2
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento()); // #3
originator.setState("State #4");

console.log("Current State: " + originator.getState()); // #4
originator.getStateFromMemento(careTaker.get(0)); // #2
console.log("First saved State: " + originator.getState()); // #2
originator.getStateFromMemento(careTaker.get(1)); // #3
console.log("Second saved State: " + originator.getState()); // #3