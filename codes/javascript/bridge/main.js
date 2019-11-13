class DrawAPI{
    drawCircle(radius, x, y){}
}
class RedCircle extends DrawAPI{
    drawCircle(radius, x, y){
        super.drawCircle(radius, x, y);
        console.log("drawCircle red ", radius, x, y);
    }
}
class GreenCircle extends DrawAPI{
    drawCircle(radius, x, y){
        super.drawCircle(radius, x, y);
        console.log("drawCircle green ", radius, x, y);
    }
}
class Shape{
    constructor(drawAPI){
        this._drawAPI = drawAPI;
    }
    draw(){}
}
class Circle extends Shape{
    constructor(x, y, radius, drawAPI){
        super(drawAPI);
        this._x = x;
        this._y = y;
        this._radius = radius;
    }
    draw(){
        super.draw();
        this._drawAPI.drawCircle(this._radius, this._x, this._y);
    }
}

function main(){
    let redCirle = new Circle(100, 100, 10, new RedCircle());
    let greenCircle = new Circle(100, 100, 10, new GreenCircle());

    redCirle.draw();
    greenCircle.draw();
}
main();
