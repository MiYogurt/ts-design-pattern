
namespace Prototype {
    // 浅拷贝
    export abstract class Shape {
        private _id: string;
        protected type: string;

        setId(id: string){
            this._id = id;
        }

        getId(){
            return this._id;    
        }

        abstract draw();

        clone() : Shape {
            // return <Shape>Object.create(this);
            let obj : any = {};
            for(let prop in this){
                console.log(prop);
                obj[prop] = this[prop]
            }
            obj.__proto__ = Reflect.getPrototypeOf(this);
            return <Shape>obj;
        }
    }


    class Rectangle extends Shape{
        type = "Rectangle";

        draw(){
            console.log('Rectangle draw！');
        }
    }

    class Square extends Shape{
        type = "Square"
        draw(){
            console.log("Square");
        }
    }

    class Circle extends Shape{
        type = "Circle";
        draw(){
            console.log("Circle");
        }
    }


    export class ShapeCache{
        private static map : Map<string, Shape> = new Map();

        static getShape(id: string) : Shape | null{
            if(ShapeCache.map.has(id)){
                return ShapeCache.map.get(id).clone()
            }
            return null;
        }

        static loadCache(){
            let circle = new Circle();
            circle.setId("1");
            ShapeCache.map.set(circle.getId(), circle);

            let square = new Square();
            square.setId("2");
            ShapeCache.map.set(square.getId(), square);

            let rectangle = new Rectangle();
            rectangle.setId("3");
            ShapeCache.map.set(rectangle.getId(), rectangle);
        }
    }

}


Prototype.ShapeCache.loadCache();

let a : Prototype.Shape = Prototype.ShapeCache.getShape("1");

console.log(JSON.stringify(a))

console.log(a.getId())
a.draw()
