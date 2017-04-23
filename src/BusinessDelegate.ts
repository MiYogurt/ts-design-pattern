
// 业务服务
interface BusinessService {
   doProcessing();
}

class EJBService implements BusinessService {
   doProcessing() {
      console.log("Processing task by invoking EJB Service");
   }
}

class JMSService implements BusinessService {
   doProcessing() {
      console.log("Processing task by invoking JMS Service");
   }
}

// 查询服务
class BusinessLookUp {
   public getBusinessService(serviceType: string): BusinessService{
      if(serviceType.toLocaleLowerCase() === "ejb"){
         return new EJBService();
      }else {
         return new JMSService();
      }
   }
}

// 业务代表
class BusinessDelegate {
   private lookupService: BusinessLookUp = new BusinessLookUp();
   private businessService: BusinessService;
   private serviceType: string;

   setServiceType(serviceType: string){
      this.serviceType = serviceType;
   }

   doTask(){
      this.businessService = this.lookupService.getBusinessService(this.serviceType);
      this.businessService.doProcessing();		
   }
}


class Client {
   businessService: BusinessDelegate;

   constructor(businessService: BusinessDelegate){
      this.businessService  = businessService;
   }

   doTask(){		
      this.businessService.doTask();
   }
}

let businessDelegate = new BusinessDelegate();
businessDelegate.setServiceType("EJB");

let client = new Client(businessDelegate);
client.doTask();

businessDelegate.setServiceType("JMS");
client.doTask();
