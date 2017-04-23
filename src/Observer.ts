class Subject {
   private observers : Observer[] = new Array<Observer>();
   private state: number;

   public getState(): number {
      return this.state;
   }

   public setState(state: number) {
      this.state = state;
      this.notifyAllObservers();
   }

   attach(observer: Observer){
      this.observers.push(observer);		
   }

   notifyAllObservers(){
      for (let observer of this.observers) {
         observer.update();
      }
   } 	
}


 abstract class Observer {
   protected subject: Subject;
   public abstract update();
}

class BinaryObserver extends Observer{

   constructor(subject: Subject){
      super();
      this.subject = subject;
      this.subject.attach(this);
   }

   update() {
      console.log( "Binary String: " 
      + this.subject.getState().toString(2) ); 
   }
}

class OctalObserver extends Observer{

   constructor(subject: Subject){
      super();
      this.subject = subject;
      this.subject.attach(this);
   }

   update() {
      console.log( "Octal String: " 
      + this.subject.getState().toString(8) ); 
   }
}

class HexaObserver extends Observer{

   constructor(subject: Subject){
      super();
      this.subject = subject;
      this.subject.attach(this);
   }

   update() {
      console.log( "Hexa String: " 
      + this.subject.getState().toString(16) ); 
   }
}   

let subject = new Subject();

new HexaObserver(subject);
new OctalObserver(subject);
new BinaryObserver(subject);

console.log("First state change: 15");	
subject.setState(15);
console.log("Second state change: 10");	
subject.setState(10);