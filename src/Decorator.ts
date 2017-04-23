namespace Decorator{
    interface Shape{
        draw() : void;
    }


    class Rectangle implements Shape{
        draw(){
            console.log("Rectangle")
        }
    }

    class Circle implements Shape{
        draw(){
            console.log("Circle");
        }
    }

    abstract class ShapeDecorator implements Shape{

        constructor(protected decoratedShape: Shape){}

        draw(){
            this.decoratedShape.draw()
        }
    }

    class RedShapeDecorator extends ShapeDecorator {

        constructor(decoratedShape : Shape) {
            super(decoratedShape);		
        }

        draw() {
            this.decoratedShape.draw();	       
            this.setRedBorder(this.decoratedShape); // 后置的装饰器
        }

        private setRedBorder( decoratedShape: Shape){
            console.log("Border Color: Red");
        }
    }

    
      let circle = new Circle();

      let redCircle = new RedShapeDecorator(new Circle());

      let redRectangle = new RedShapeDecorator(new Rectangle());
      console.log("Circle with normal border");
      circle.draw();

      console.log("\nCircle of red border");
      redCircle.draw();

      console.log("\nRectangle of red border");
      redRectangle.draw();



}

