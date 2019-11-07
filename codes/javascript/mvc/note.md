## 简介
MVC(Model-View-Controller)模式，主要用于应用程序的分层开发.
- Model(模型)， 模型代表一个存取数据结构的对象，也可以有逻辑，在数据变化的时候更新控制器。
- View(视图), 将模型包含的数据可视化，同时，包含与用户的交互。
- Controller(控制器)， 控制器作用于模型和视图上，控制数据流向模型对象，并在数据发生变化时，更新视图，它使模型和视图分离开。

模型和视图不应该有直接的交互，而应该通过Controller这个中间层来进行，这样就对数据和显示进行了解耦。
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
