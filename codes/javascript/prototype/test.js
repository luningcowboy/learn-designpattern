(function() {
    function Person() {
        this._a = 0;
    }
    let TestObj = {
        "a": 1
    };
    // 只有函数才有prototype
    console.log(Person.prototype);//Person {}
    console.log(TestObj.prototype);//undefined
    // getOwnPropertyNames 并不是获取prototype
    console.log(Object.getOwnPropertyNames(Person));//[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
    console.log(Object.getOwnPropertyNames(TestObj));//[ 'a' ]
    let p = new Person();
    console.log(Object.getOwnPropertyNames(p));// [ '_a']
})();
