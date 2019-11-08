class Shape{
    _id = ''
    _type = ''
    draw(){
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
