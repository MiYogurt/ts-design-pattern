// 妈妈类
class Mother {
	// 向妈妈申请所有你想要的
	static giveMe(whatYouWant){
		switch(whatYouWant){
			// 糖糖
			case "tangtang":
				console.log("宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~"); 
				return Mother.chewJelly(new Jelly);
			// 飞飞
			case "feifei":
				console.log("宝宝，家里已经买了很多飞机了哦，")
				return null;
			default: return null;
		}
	}

	static chewJelly(jelly){
		jelly.chewed = true;
		return jelly;
	}
}

// 果冻类
class Jelly{
	// 是否咀嚼过的果冻
	chewed = false;
}

// 玩具飞机
class ToyPlane {}



// console.log(`///////////////////// 分割线 /////////////////////////`);


// 正则工厂
function fieldTest(fieldName){
	switch(fieldName){
		case 'phone':
			return /^1[3|4|5|8][0-9]\d{4,8}$/;
		case 'email':
			return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		case 'character': // 是否为汉字
			return /^[\u4e00-\u9fa5]{0,}$/;
	}
}


// console.log(`///////////////////// 分割线 /////////////////////////`);


function XiaoMi(factoryName): any{
	switch(factoryName){
		case 'battery': return MobileBatteryFactory;
		case 'screen': return MobileScreenFactory;
	}
}

class Battery{};

class MobileBatteryFactory {
	static getBattery(): Battery {
		return new Battery();
	}
}

class MobileScreenFactory {
	static getScreen(){
		return { name: 'screen' }
	}
}


// console.log(`///////////////////// 分割线 /////////////////////////`);

class AllFactory {
	static getFieldTest = () => fieldTest;
	static getMother = () => Mother
}


export {
	Mother,
	Jelly,
	ToyPlane,
	fieldTest,
	XiaoMi,
	Battery,
	MobileBatteryFactory,
	MobileScreenFactory,
	AllFactory

}