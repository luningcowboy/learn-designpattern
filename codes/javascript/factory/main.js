class Shape{
    draw(){
        console.log('Shape draw');
    }
}
class Square extends Shape{
    draw(){
        super.draw();
        console.log('square draw');
    }
}
class Rectangle extends Shape{
    draw(){
        super.draw();
        console.log("Rectangle draw");
    }
}
class Circle extends Shape{
    draw(){
        super.draw();
        console.log('Circle draw');
    }
}
class ShapeFactory{
    getShape(type){
        if(type === 'circle') return new Circle();
        else if(type === 'rectangle') return new Rectangle();
        else if(type === 'square') return new Square();
        return null;
    }
}

function main(){
    let fac = new ShapeFactory();
    let rectangle = fac.getShape('rectangle');
    let square = fac.getShape('square');
    let circle = fac.getShape('circle');
    rectangle.draw();
    square.draw();
    circle.draw();
}
main();
