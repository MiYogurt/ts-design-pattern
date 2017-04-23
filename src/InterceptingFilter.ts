// 过滤器（Filter） - 过滤器在请求处理程序执行请求之前或之后，执行某些任务。
// 过滤器链（Filter Chain） - 过滤器链带有多个过滤器，并在 Target 上按照定义的顺序执行这些过滤器。
// Target - Target 对象是请求处理程序。
// 过滤管理器（Filter Manager） - 过滤管理器管理过滤器和过滤器链。
// 客户端（Client） - Client 是向 Target 对象发送请求的对象。

namespace InterceptingFilter{
		
	interface Filter {
	   execute(request: string);
	}

	class AuthenticationFilter implements Filter {
	   execute(request: string){
	      console.log("Authenticating request: " + request);
	   }
	}

	class DebugFilter implements Filter {
	   execute(request: string){
	      console.log("request log: " + request);
	   }
	}

	// 真正要执行的操作
	class Target {
	   execute(request: string){
	      console.log("Executing request: " + request);
	   }
	}

	class FilterChain {
	   private filters = new Array<Filter>();
	   private target: Target;

	   addFilter(filter: Filter){
	      this.filters.push(filter);
	   }

	   execute(request: string){
	      for (let filter of this.filters) {
	         filter.execute(request);
	      }
	      this.target.execute(request);
	   }

	   setTarget(target: Target){
	      this.target = target;
	   }
	}


	class FilterManager {
	   filterChain: FilterChain;

	   constructor(target: Target){
	      this.filterChain = new FilterChain();
	      this.filterChain.setTarget(target);
	   }
	   setFilter(filter: Filter){
	      this.filterChain.addFilter(filter);
	   }

	   filterRequest(request: string){
	      this.filterChain.execute(request);
	   }
	}

	class Client {
	   filterManager: FilterManager;

	   setFilterManager(filterManager: FilterManager){
	      this.filterManager = filterManager;
	   }

	   sendRequest(request: string){
	      filterManager.filterRequest(request);
	   }
	}

	let filterManager = new FilterManager(new Target());
	filterManager.setFilter(new AuthenticationFilter());
	filterManager.setFilter(new DebugFilter());

	let client = new Client();
	client.setFilterManager(filterManager);
	client.sendRequest("HOME");

}