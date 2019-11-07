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
        this.view.printStudentDetails(this.getValue('name'), this.getValue('rollno'));
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
