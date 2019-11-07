class Item{
    name(){}
    packing(){}
    price(){}
}
class Packing{
    pack(){}
}
class Wrapper extends Packing{
    pack(){
        super.pack();
        return 'Wrapper';
    }
}
class Bottle extends Packing{
    pack(){
        super.pack();
        return 'Bottle'
    }
}
class Burger extends Item{
    packing(){
        return new Wrapper();
    }
}
class ColdDrink extends Item{
    packing(){
        return new Bottle();
    }
}

class VegBurger extends Burger{
    price(){
        super.price();
        return 25;
    }
    name(){
        super.name();
        return "Veg burger";
    }
}

class ChickenBurger extends Burger{
    price(){
        super.price();
        return 30;
    }
    name(){
        super.name();
        return "Chicken Burger";
    }
}

class Coke extends ColdDrink{
    price(){
        super.price();
        return 30;
    }
    name(){
        super.name();
        return "Coke";
    }
}

class Pepsi extends ColdDrink{
    price(){
        super.price();
        return 30;
    }
    name(){
        super.name();
        return "Pepsi";
    }
}

class Meal{
    constructor(){
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }
    getCost(){
        let ret = 0;
        for(let item of this.items){
            ret += item.price();
        }
        return ret;
    }
    showItems(){
        for(let item of this.items){
            console.log("Item:", item.name());
            console.log("Packing:", item.packing().pack());
            console.log("Price:", item.price());
        }
    }
}

class MealBuilder{
    prepareVgMeal(){
        let meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    prepareNonVegMeal(){
        let meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}

function main(){
    let mealBuilder = new MealBuilder();
    let m1 = mealBuilder.prepareVgMeal();
    let m2 = mealBuilder.prepareNonVegMeal();
    m1.showItems();
    console.log(m1.getCost());
    m2.showItems();
    console.log(m2.getCost());
}
main();
