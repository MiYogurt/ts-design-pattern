interface State {
   doAction(context: Context);
}

class StartState implements State {

    doAction(context: Context) {
      console.log("Player is in start state");
      context.setState(this);	
   }

   toString(){
      return "Start State";
   }
}

class StopState implements State {

   doAction(context: Context) {
      console.log("Player is in stop state");
      context.setState(this);	
   }

   toString(){
      return "Stop State";
   }
}

class Context {
   private state: State;

   constructor(){
      this.state = null;
   }

   setState(state: State){
      this.state = state;		
   }

   getState(): State{
      return this.state;
   }
}

let context = new Context();

let startState = new StartState();
startState.doAction(context);

console.log(context.getState().toString());

let stopState = new StopState();
stopState.doAction(context);

console.log(context.getState().toString());