namespace Facade{
    interface Shape{
        draw();
    }

    class Rectangle implements Shape{
        draw(){
            console.log(this);
        }
    }

    class Square implements Shape{
        draw(){
            console.log(Object.getPrototypeOf(this).name);
        }
    }

    class Circle implements Shape {
        draw() {
            console.log("Circle::draw()");
        }
    }

    class ShapleMaker{
        private circle: Circle;
        private rectangle : Rectangle;
        private square : Square;

        constructor(){
            this.circle = new Circle();
            this.rectangle = new Rectangle();
            this.square = new Square()
        }

        drawCircle(){
            this.circle.draw();
        }

        drawRectangle(){
            this.rectangle.draw();
        }

        drawSquare(){
            this.square.draw()
        }
    }


    let sm = new ShapleMaker();
    sm.drawCircle();
    sm.drawRectangle();
    sm.drawSquare();
    

}