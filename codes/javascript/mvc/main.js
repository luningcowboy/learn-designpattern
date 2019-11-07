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
