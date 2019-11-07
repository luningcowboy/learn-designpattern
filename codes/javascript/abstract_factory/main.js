class Shape{
    draw(){}
}
class Rectangle extends Shape{
    draw(){
        super.draw();
        console.log('draw Rectangle');
    }
}
class Square extends Shape{
    draw(){
        super.draw();
        console.log('draw Square');
    }
}
class Circle extends Shape{
    draw(){
        super.draw();
        console.log('draw Circle');
    }
}
class Color{
    fill(){}
}
class Red extends Color{
    fill(){
        super.fill();
        console.log('fill Red');
    }
}
class Green extends Color{
    fill(){
        super.fill();
        console.log('fill Green');
    }
}
class Blue extends Color{
    fill(){
        super.fill();
        console.log('fill Blue');
    }
}
class AbsFactory{
    getColor(color){}
    getShape(shape){}
}
class ShapeFactory extends AbsFactory{
    getColor(color){
        super.getColor(color);
        return null;
    }
    getShape(shape){
        super.getShape(shape);
        if(shape === 'Circle') return new Circle();
        if(shape === 'Rectangle') return new Rectangle();
        if(shape === 'Square') return new Square();
        return null;
    }
}
class ColorFactory extends AbsFactory{
    getColor(color){
        super.getColor(color);
        if(color === 'Red') return new Red();
        if(color === 'Green') return new Green();
        if(color === 'Blue') return new Blue();
        return null;
    }
    getShape(shape){
        super.getShape(shape);
        return null;
    }
}
// 这里还是有缺陷，每次增加新的工厂都需要修改这个类
class FactoryProducer{
    static getFactory(type){
        if(type === 'Shape') return new ShapeFactory();
        if(type === 'Color') return new ColorFactory();
        return null;
    }
}
// 通过Map映射工厂关系
// 这样Producer只需要实现一次，没有问题就再也不需要修改了
class FacProducer2{
    static getInstance(){
        if(!FacProducer2._instance){
            FacProducer2._instance = new FacProducer2();
        }
        return FacProducer2._instance;
    }
    constructor(){
        this._facMapping = new Map();
    }
    addFac(type, cls){
        this._facMapping.set(type, cls);
    }
    getFactory(type){
        if(this._facMapping.has(type)){
            let cls = this._facMapping.get(type);
            return new cls();
        }
        return null;
    }
}
FacProducer2._instance = null;

function main(){
    let shapeFac = FactoryProducer.getFactory('Shape');
    let s1 = shapeFac.getShape('Circle');
    let s2 = shapeFac.getShape('Rectangle');
    let s3 = shapeFac.getShape('Square');
    s1.draw();
    s2.draw();
    s3.draw();


    let colorFac = FactoryProducer.getFactory('Color');
    let c1 = colorFac.getColor('Red');
    let c2 = colorFac.getColor('Green');
    let c3 = colorFac.getColor('Blue');
    c1.fill();
    c2.fill();
    c3.fill();
}
function main2(){
    let facProduce = FacProducer2.getInstance();
    facProduce.addFac('Shape', ShapeFactory);
    facProduce.addFac('Color', ColorFactory);

    let shapeFac = facProduce.getFactory('Shape');
    let colorFac = facProduce.getFactory('Color');
    console.log(shapeFac, colorFac);

    let s1 = shapeFac.getShape('Circle');
    let s2 = shapeFac.getShape('Rectangle');
    let s3 = shapeFac.getShape('Square');
    s1.draw();
    s2.draw();
    s3.draw();

    let c1 = colorFac.getColor('Red');
    let c2 = colorFac.getColor('Green');
    let c3 = colorFac.getColor('Blue');
    c1.fill();
    c2.fill();
    c3.fill();
}
main();
main2();
