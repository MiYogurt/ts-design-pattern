// 建造者模式

// 从一个个简单的类组合成一个大的类。 汉堡，饮料组合成不同套餐。通过Meal创建出不同的套餐;

// 食品包装接口
interface Packing{
    pack(): string;
}

// 纸质包装类，专门用来包裹汉堡
class Wrapper implements Packing{
    pack(){
        return "Wrapper";
    }
}

// 瓶子包裝类，专门用来装饮料
class Bottle implements Packing{
    pack(){
        return "Bottle";
    }
}

// 食物接口
interface Item{
    name():string;
    packing(): Packing;
    price(): number;
}

// 基类的好处，就是把公共的逻辑提取到基类中

// 汉堡基类
abstract class Burger implements Item{
    name(){
        return "Burger";
    }
    packing() : Packing {
        return new Wrapper()
    }
    abstract price(): number;
} 

// 饮料基类
abstract class ColdDrink implements Item{
    name(){
        return "ColdDrink";
    }
    packing() : Packing {
        return new Bottle()
    }
    abstract price(): number;
    
}

// 素食汉堡
class VegBurger extends Burger{
    name(){
        return "VegBurger"
    }
    price() {
        return 25;
    }
}

// 鸡肉汉堡
class ChickenBurger extends Burger{
    price(){
        return 50;
    }
    name(){
        return "ChickenBurger";
    }
}

// 可口可乐
class Coke extends ColdDrink{
    name(){
        return "Coke";
    }
    price(){
        return 30;
    }
}

// 百事可乐

class Pepsi extends ColdDrink{
    name(){
        return "Pepsi";
    }
    price(){
        return 35;
    }
}

// 套餐
class Meal{
    private _items: Item[] = [];

    addItem(item: Item){
        this._items.push(item);
    }

    getCost(){
        let cost = 0;
        for(let item of this._items){
            cost += item.price();
        }
        return cost;
    }
    showItems(){
        for(let item of this._items){
            console.log(`Item : ${item.name()}`);
            console.log(`Packing : ${item.packing().pack()} `);
            console.log(`Price : ${item.price()} \n`);
        }
    }
}

class MealBuilder{
    // 准备素食套餐
    prepareVegMeal(){
        let meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    // 准备非素食套餐
    prepareNotVegMeal(){
        let meal = new Meal();
        meal.addItem(new ChickenBurger())
        meal.addItem(new Pepsi())
        return meal
    }
}



let mealBuilder = new MealBuilder();

let m1 = mealBuilder.prepareVegMeal()

console.log("VegMeal :")
m1.showItems()

console.log("total cost = " + m1.getCost() + "\n");

console.log("***********************************\n")

let m2 = mealBuilder.prepareNotVegMeal()

console.log("Not-VegMeal :")
m2.showItems()
console.log("total cost = " + m2.getCost() + "\n");



export {
    Meal,
    MealBuilder,
    VegBurger,
    ChickenBurger,
    Coke,
    Pepsi
}