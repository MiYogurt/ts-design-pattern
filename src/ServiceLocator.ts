// 服务（Service） - 实际处理请求的服务。对这种服务的引用可以在 JNDI 服务器中查找到。
// Context / 初始的 Context - JNDI Context 带有对要查找的服务的引用。
// 服务定位器（Service Locator） - 服务定位器是通过 JNDI 查找和缓存服务来获取服务的单点接触。
// 缓存（Cache） - 缓存存储服务的引用，以便复用它们。
// 客户端（Client） - Client 是通过 ServiceLocator 调用服务的对象。

interface Service {
   getName(): string;
   execute();
}

class Service1 implements Service {
   execute(){
      console.log("Executing Service1");
   }

   getName() {
      return "Service1";
   }
}

class Service2 implements Service {
   execute(){
      console.log("Executing Service2");
   }

   getName() {
      return "Service2";
   }
}

class InitialContext {
   lookup(jndiName: string){
      if(jndiName.toLocaleUpperCase() == ("SERVICE1")){
         console.log("Looking up and creating a new Service1 object");
         return new Service1();
      }else if (jndiName.toLocaleUpperCase() == ("SERVICE2")){
         console.log("Looking up and creating a new Service2 object");
         return new Service2();
      }
      return null;		
   }
}

class Cache {

   private services: Array<Service> ;

   constructor(){
      this.services = new Array<Service>();
   }

   public getService(serviceName: string): Service{
      for (let service of this.services) {
         if(service.getName().toLocaleUpperCase() == (serviceName.toLocaleUpperCase())){
            console.log("Returning cached  "+serviceName+" object");
            return service;
         }
      }
      return null;
   }

   addService(newService: Service){
      let exists = false;
      for (let service of this.services) {
         if(service.getName().toLocaleUpperCase() == (newService.getName().toLocaleUpperCase())){
            exists = true;
         }
      }
      if(!exists){
         this.services.push(newService);
      }
   }
}

class ServiceLocator {
   private static cache = new Cache();

   public static getService(jndiName : string) : Service{

      let service = ServiceLocator.cache.getService(jndiName);

      if(service != null){
         return service;
      }

      let context = new InitialContext();
      let service1 : Service = context.lookup(jndiName);
      ServiceLocator.cache.addService(service1);
      return service1;
   }
}

let service = ServiceLocator.getService("Service1");		
service.execute();
service = ServiceLocator.getService("Service2");
service.execute();
service = ServiceLocator.getService("Service1");
service.execute();
service = ServiceLocator.getService("Service2");
service.execute();	