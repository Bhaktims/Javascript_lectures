class CoffeeMachine{

    #waterAmount = 0; // start property name with # to make property PRIVATE

    get Wateramount(){   // to create read only property create get method
        return this.#waterAmount;
    }

    set Wateramount(value){ //setter method
        if(value>0){  // now we cant assign -ve value
            this.#waterAmount = value;
        }
    }
    #power;
    
    get power(){ // getter method
        return this.#power;
    }
     
    constructor(p){
        this.#power = p;
        console.log('coffee machine with power',this.#power);
    }
    brewCoffee(){

        console.log("Brew Coffee",this.#waterAmount);
    }
}

const coffee = new CoffeeMachine(100);

// coffee.#waterAmount=200;
coffee.brewCoffee();

// coffee.#waterAmount=2000;
coffee.brewCoffee();
console.log(coffee.Wateramount);

coffee.Wateramount = 800;
console.log(coffee.Wateramount);
