class Shape{
    draw(){
        this._id = '';
        this._type = '';
    }
    getType(){
        return this._type;
    }
    getId(){
        return this._id;
    }
    setId(id){
        this._id = id;
    }
    setType(type){
        this._type = type;
    }
    clone(){
    }
    draw(){}
}
class Rectagle extends Shape{
    constructor(){
        super();
        this._type = 'Rectagle';
    }
    clone(){
        super.clone();
        let clone = new Rectagle();
        return clone;
    }
    draw(){
        super.draw();
        console.log('Draw Rectagle');
    }
}
class Square extends Shape{
    constructor(){
        super();
        this._type = 'square';
    }
    draw(){
        super.draw();
        console.log('Draw square');
    }
    clone(){
        return new Square();
    }
}
class Circle extends Shape{
    constructor(){
        super();
        this._type = 'circle';
    }
    draw(){
        super.draw();
        console.log("Draw circle");
    }
    clone(){
        super.clone();
        return new Circle();
    }
}
let _instance = null;
class ShapeCache{
    static getInstance(){
        if(!_instance){
            _instance = new ShapeCache();
        }
        return _instance;
    }
    constructor(){
        this._shapeMap = new Map();
    }
    loadCache(){
        let circle = new Circle();
        circle.setId("1");
        this._shapeMap.set(circle.getId(), circle);

        let square = new Square();
        square.setId("2");
        this._shapeMap.set(square.getId(), square);

        let rectangle = new Rectagle();
        rectangle.setId("3");
        this._shapeMap.set(rectangle.getId(), rectangle);
    }
    getShape(id){
        return this._shapeMap.get(id).clone();
    }
}

function main(){
    ShapeCache.getInstance().loadCache();
    let cloneShape = ShapeCache.getInstance().getShape("1");
    let cloneShape1 = ShapeCache.getInstance().getShape("2");
    let cloneShape2 = ShapeCache.getInstance().getShape("3");
    console.log(cloneShape.getType());
    console.log(cloneShape1.getType());
    console.log(cloneShape2.getType());
}
main();
