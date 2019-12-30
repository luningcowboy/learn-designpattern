(function() {
    function Person() {}
    let TestObj = {};
    // 只有函数才有prototype
    console.log(Person.prototype);//Person {}
    console.log(TestObj.prototype);//undefined
})();
