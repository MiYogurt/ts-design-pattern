interface Expression {
   interpret(context: string) : boolean;
}

class TerminalExpression implements Expression {
   private data: string;
   constructor(data: string){
      this.data = data; 
   }

   interpret(context: string): boolean {
      if(context.indexOf(this.data) >= 0){
         return true;
      }
      return false;
   }
}

class OrExpression implements Expression {
   private expr1 : Expression = null;
   private expr2 : Expression = null;
   constructor(expr1: Expression, expr2: Expression){
      this.expr1 = expr1; 
      this.expr2 = expr2;
   }

   interpret(context: string): boolean {
      return this.expr1.interpret(context) || this.expr2.interpret(context);
   }
}


class AndExpression implements Expression {
   private expr1 : Expression = null;
   private expr2 : Expression = null;
   constructor(expr1: Expression, expr2: Expression){
      this.expr1 = expr1; 
      this.expr2 = expr2;
   }

   interpret(context: string): boolean {
      return this.expr1.interpret(context) && this.expr2.interpret(context);
   }
}

function getMaleExpression(){
    let robert = new TerminalExpression("Robert");
    let john = new TerminalExpression("John");
    return new OrExpression(robert, john);
}
function getMarriedWomanExpression(){
    let julie = new TerminalExpression("Julie");
    let married = new TerminalExpression("Married");
    return new AndExpression(julie, married);
}

let isMale = getMaleExpression();
let isMarriedWoman = getMarriedWomanExpression();

console.log("John is male? " + isMale.interpret("John"));
console.log("Julie is a married women? " 
      + isMarriedWoman.interpret("Married Julie"));