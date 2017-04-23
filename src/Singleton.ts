// 饿汉模式
class Singleton1{
	private static _instance = new Singleton1();
	private constructor(){};

	static getInstance(){
		return Singleton1._instance;
	} 
}


//  懒汉模式
class Singleton2{
    private static _instance : Singleton2;
    private constructor(){};
    static getInstance(): Singleton2{
        if(this._instance){
            return this._instance;
        }
        this._instance = new Singleton2();
        return this._instance;
    }
}


// 使用闭包的形势构造私有变量
let s3 = (() => {
    let _instance;
    return (instance = null) => {
        if(_instance) return _instance;
        if(instance) _instance = instance;
        return _instance;
    }
})();

// 懒汉模式
class Singleton3{
    private constructor(){};

    static getInstance(){
        if(!s3()){
            return s3(new Singleton3())
        }
        return s3();
    }
}

export { Singleton1, Singleton2 , Singleton3 };
