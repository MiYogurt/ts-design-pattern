namespace FrontController{
	class HomeView {
	   show(){
	      console.log("Displaying Home Page");
	   }
	}

	 class StudentView {
	   show(){
	      console.log("Displaying Student Page");
	   }
	}

	class Dispatcher {
	   private studentView: StudentView;
	   private homeView: HomeView;
	   constructor(){
	      this.studentView = new StudentView();
	      this.homeView = new HomeView();
	   }

	   dispatch(request: string){
	      if(request.toLocaleUpperCase() === "STUDENT"){
	         this.studentView.show();
	      } else {
	         this.homeView.show();
	      }
	   }
	}

	class FrontController {
		
	   private dispatcher: Dispatcher;

	   constructor(){
	      this.dispatcher = new Dispatcher();
	   }

	   private isAuthenticUser(): boolean{
	      console.log("User is authenticated successfully.");
	      return true;
	   }

	   private trackRequest(request: string){
	      console.log("Page requested: " + request);
	   }

	   public dispatchRequest(request: string){
	      //记录每一个请求
	      this.trackRequest(request);
	      //对用户进行身份验证
	      if(this.isAuthenticUser()){
	         this.dispatcher.dispatch(request);
	      }	
	   }
	}

	let frontController = new FrontController();
	frontController.dispatchRequest("HOME");
	console.log("===============");
	frontController.dispatchRequest("STUDENT");
}

