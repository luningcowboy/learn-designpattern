let _instance = null;//实例
class SingleObject{
    static getInstance(){
        if(!_instance) _instance = new SingleObject();
        return _instance;
    }
    /*
     * js貌似没办法实现私有的构造函数
     */
    constructor(){
    }
    showMsg(){
        console.log("HelloWorld");
    }
}

function main(){
    let instance = SingleObject.getInstance();
    instance.showMsg();
}
main();
