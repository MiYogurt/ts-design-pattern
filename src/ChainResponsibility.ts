abstract class AbstractLogger {
    static INFO : number = 1;
    static DEBUG : number = 2;
    static ERROR : number = 3;

   protected level : number;

   //责任链中的下一个元素
   protected  nextLogger : AbstractLogger;

    setNextLogger(nextLogger: AbstractLogger){
      this.nextLogger = nextLogger;
   }

    logMessage(level: number, message: string){
      if(this.level <= level){
         this.write(message);
      }
      if(this.nextLogger !=null){
         this.nextLogger.logMessage(level, message);
      }
   }

   protected abstract write(message: string);
	
}


class ConsoleLogger extends AbstractLogger {
    constructor(level : number){
        super()
        this.level = level;
   }

    write(message: string) {		
      console.log("Standard Console::Logger: " + message);
   }
}


class ErrorLogger extends AbstractLogger {

   constructor(level: number){
      super()
      this.level = level;
   }

    write(message: string) {		
      console.log("Error Console::Logger: " + message);
   }
}


class FileLogger extends AbstractLogger {

   constructor(level: number){
      super()
      this.level = level;
   }

   write(message: string) {		
      console.log("File::Logger: " + message);
   }
}

class ChainPattern{
    static getChainOfLoggers() : AbstractLogger{

      let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
      let fileLogger = new FileLogger(AbstractLogger.DEBUG);
      let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

      errorLogger.setNextLogger(fileLogger);
      fileLogger.setNextLogger(consoleLogger);

      return errorLogger;	
   }

}

    let loggerChain = ChainPattern.getChainOfLoggers();

    loggerChain.logMessage(AbstractLogger.INFO, 
        "This is an information.");

    loggerChain.logMessage(AbstractLogger.DEBUG, 
        "This is an debug level information.");

    loggerChain.logMessage(AbstractLogger.ERROR, 
        "This is an error information.");