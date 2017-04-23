// 桥接模式

interface DrawApi{
    draw(radius: number, x: number, y: number);
}


class RedCircle implements DrawApi{
    draw(radius: number, x : number, y : number){
        console.log('red circle');
    }
}


class GreenCircle implements DrawApi{
    draw(radius: number, x: number, y: number){
        console.log('green circle');
    }
}

abstract class Shape{
    protected drawApi : DrawApi;
    protected constructor(drawApi : DrawApi){
        this.drawApi = drawApi;
    }
    abstract draw();
}

class Circle extends Shape{
    private _x : number;
    private _y : number;
    private _radius: number;

    constructor(x: number, y: number, radius: number, drawApi: DrawApi){
        super(drawApi);
        this._x = x;
        this._y = y;
        this._radius = radius;
    }

    draw(){
        this.drawApi.draw(this._radius, this._x, this._y);
    }

}



const redCircle = new Circle(100, 100, 10, new RedCircle());

const greenCircle = new Circle(105, 120 , 10 , new GreenCircle());

redCircle.draw();

greenCircle.draw();