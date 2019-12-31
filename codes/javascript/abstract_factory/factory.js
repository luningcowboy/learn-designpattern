/*
let 
let factory = Factory.addFactory({
key: 'color',
getProduct:()=>{},
});
*/

function Factory() {
    console.log('Factory');
}
this._factoryMap = new Map();
Factory.prototype.addFactory = ({
    key,
    getProduct
}) => {
    this._factoryMap.set(key, getProduct);
};
Factory.prototype.removeFactory = key => {
    return this._factoryMap.delete(key);
};
Factory.prototype.getProduct = (key, params) => {
    if (this._factoryMap.has(key)) {
        return this._factoryMap.get(key)(params);
    }
    return null;
};
(function() {
    let fac = new Factory();
    fac.addFactory({
        key: 'Color',
        getProduct: (params) => {
            let type = params.type;
            if (type === 'Red') return 'Color:Red';
            if (type === 'Green') return 'Color:Green';
            if (type === 'Blue') return 'Color:Blue';
            return null;
        }
    });
    fac.addFactory({
        key: 'Shape',
        getProduct: (params) => {
            let type = params.type;
            if (type === 'Rect') return 'Shape:Rect';
            if (type === 'Circle') return 'Shape:Circle';
            if (type === 'Square') return 'Shape:Square';
            return null;
        }
    });
    let proRed = fac.getProduct('Color', {
        type: 'Red'
    });
    console.log(proRed);
    let proGreen = fac.getProduct('Color', {
        type: 'Green'
    });
    console.log(proGreen);
})();
