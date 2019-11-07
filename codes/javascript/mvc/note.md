## 简介
MVC(Model-View-Controller)模式，主要用于应用程序的分层开发.
- Model(模型)， 模型代表一个存取数据结构的对象，也可以有逻辑，在数据变化的时候更新控制器。
- View(视图), 将模型包含的数据可视化，同时，包含与用户的交互。
- Controller(控制器)， 控制器作用于模型和视图上，控制数据流向模型对象，并在数据发生变化时，更新视图，它使模型和视图分离开。

模型和视图不应该有直接的交互，而应该通过Controller这个中间层来进行，这样就对数据和显示进行了解耦。
缺点:
获取数据接口比较麻烦，Controller中提供必要的数据接口获取Model中的数据，如果,Model中的数据很多，这样就需要写很多
简单的接口，比较繁琐，当然，可以提供一套统一的解决方案，比如，给数据指定key,Model中将数据和key绑定，这样就可以用
一个接口，获取所有符合规则的数据了。当然，这只能解决部分问题，对于一些简单的数据只有`get/set`方法的数据可以这样操作
但是，复杂的数据这样做可能就不太好了。
下面是js的一个简单实现:
```javascript
class Student{
    constructor(){
        this.rollNo = -1;
        this.name = '';
    }
    getRollNo(){
        return this.rollNo;
    }
    setRollNo(rollno){
        this.rollNo = rollno;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}
class StudentView{
    printStudentDetails(name, rollno){
        console.log(`StudentName:${name}, RollNo:${rollno}`);
    }
}
class StudentController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    setStudentName(name){
        this.model.setName(name);
    }
    getStudentName(){
        return this.model.getName();
    }
    setStudentRollNo(rollno){
        this.model.setRollNo(rollno);
    }
    getStudentRollNo(){
        return this.model.getRollNo;
    }
    updateView(){
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}

function main(){
    let model = new Student();
    model.setName('Tom');
    model.setRollNo(11);
    let view = new StudentView();
    let ctrl = new StudentController(model, view);
    ctrl.setStudentName('John');
    ctrl.updateView();
}

main();
```
第二种实现:
```javascript
class Student{
    constructor(){
        this._dataMapping = new Map();
        this._dataMapping.set('rollno', -1);
        this._dataMapping.set('name', '');
    }
    setValue(key, value){
        this._dataMapping.set(key, value);
    }
    getValue(key){
        if(this._dataMapping.has(key)){
            return this._dataMapping.get(key);
        }
        return null;
    }
}
class StudentView{
    printStudentDetails(name, rollno){
        console.log(`StudentName:${name}, RollNo:${rollno}`);
    }
}
class StudentController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    setValue(key, value){
        this.model.setValue(key, value);
    }
    getValue(key){
        return this.model.getValue(key);
    }
    updateView(){
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}

function main(){
    let model = new Student();
    model.setValue('name','Tom');
    model.setValue('rollno',11);
    let view = new StudentView();
    let ctrl = new StudentController(model, view);
    ctrl.setValue('name','John');
    ctrl.updateView();
}

main();
```
