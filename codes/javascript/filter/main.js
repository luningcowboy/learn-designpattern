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
            if(person.getGender() === 'Male'){
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
            if(person.getGender() === 'Female'){
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
            if(person.getMaritalStatus() === 'Single'){
                ret.push(person);
            }
        }
        return ret;
    }
}
class AndCriteria extends Criteria{
    constructor(cirteria, otherCirteria){
        super();
        this.cirteria = cirteria;
        this.otherCirteria = otherCirteria;
    }
    meetCriteria(persons){
        super.meetCriteria(persons);
        return this.otherCirteria.meetCriteria(this.cirteria.meetCriteria(persons));
    }
}
class OrCriteria extends Criteria{
    constructor(cirteria, otherCirteria){
        super();
        this.cirteria = cirteria;
        this.otherCirteria = otherCirteria;
        console.log(this.cirteria, this.otherCirteria);
    }
    meetCriteria(persons){
        super.meetCriteria(persons);
        let firstCriteriaItems = this.cirteria.meetCriteria(persons);
        let otherCirteriaItems = this.otherCirteria.meetCriteria(persons);
        for(let person of otherCirteriaItems){
            if(firstCriteriaItems.indexOf(person) < 0){
                firstCriteriaItems.push(person);
            }
        }
        return firstCriteriaItems;
    }
}
function main(){
    let persons = [];
    persons.push(new Person("Robert","Male","Single"));
    persons.push(new Person("Jhon","Male","Married"));
    persons.push(new Person("Laura","Female","Married"));
    persons.push(new Person("Diana","Female","Single"));
    persons.push(new Person("Mike","Male","Single"));
    persons.push(new Person("Bobby","Male","Single"));

    let male = new CriteriaMeal();
    let female = new CirteriaFemale();
    let single = new CriteriaSingle();
    let singleMale = new AndCriteria(single, male);
    let singleOrFemale = new OrCriteria(single, female);

    single.meetCriteria(persons).forEach(per=>{
        console.log("single",per.name, per.gender, per.maritalStatus);
    });
    singleMale.meetCriteria(persons).forEach(per=>{
        console.log('singleMale',per.name, per.gender, per.maritalStatus);
    });
    singleOrFemale.meetCriteria(persons).forEach(per=>{
        console.log('singleOrFemale',per.name, per.gender, per.maritalStatus);
    });

}
main();
