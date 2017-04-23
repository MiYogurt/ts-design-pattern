namespace Flyweight{
    interface Shape{draw()}

    class Circle implements  Shape{
        color: string;
        x: number;
        y: number;
        radius: number;

        constructor(color: string){
            this.color = color;
        }

        draw(){
            console.log(this);
        }


    }

    class ShapeFactory{
        private static cache = new Map<string,Circle>();

        static getShape(color: string){
            let circle = this.cache.get(color);

            if(circle == null){
                circle = new Circle(color);
                this.cache.set(color, circle);
            }
            return circle;
        }
    }


    let colors = ["Red", "Green", "Blue", "White", "Black" ]

    function getRandomColor(){
        return colors[Math.random() * colors.length]
    }

    function getRandomX(){
        return Math.random() * 100;
    }
    
    function getRandomY(){
        return Math.random() * 100;
    }

    colors.forEach(color => {
        let circle = ShapeFactory.getShape(color);
        circle.x = getRandomX();
        circle.y = getRandomY();
        circle.radius = 100;
        circle.draw();
    })


}