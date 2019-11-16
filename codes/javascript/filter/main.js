class Person{
    constructor(name, gender, maritalStatus){
        this.name = name;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getMaritalStatus(){
        return this.maritalStatus;
    }
}
class Criteria{
    meetCriteria(persons){
    }
}
class CriteriaMeal extends Criteria{
    meetCriteria(persons){
        super.meetCriteria(persons);
        let ret = [];
        for(let person of persons){
            if(person.getGender() === 'MALE'){
                ret.push(person);
            }
        }
        return ret;
    }
}
class CirteriaFemale extends Criteria{
    meetCriteria(persons){
        super.meetCriteria(persons);
        let ret = [];
        for(let person of persons){
            if(person.getGender() === 'FEMALE'){
                ret.push(person);
            }
        }
        return ret;
    }
}
class CriteriaSingle extends Criteria{
    meetCriteria(persons){
        super.meetCriteria(persons);
        let ret = [];
        for(let person of persons){
            if(person.getGender() === 'SINGLE'){
                ret.push(person);
            }
        }
        return ret;
    }
}
class AndCriteria extends Criteria{
    constructor(cirteria, otherCirteria){
        this.cirteria = cirteria;
        this.otherCirteria = otherCirteria;
    }
    meetCriteria(persons){
        super.meetCriteria(persons);
        return this.otherCirteria.meetCriteria(this.cirteria.meetCriteria(persons));
    }
}
class OrCriteria extends Criteria{
    constructor(){}
}
