class Breakfast {
  
    constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

let breakfast1 = new Breakfast("eggs","juice");
let breakfast2 = new Breakfast("fries", "milk");

class Lunch {
    
      constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  let Lunch1 = new Lunch("Ceasar");
  let Lunch2 = new Lunch("rice");
  let Lunch3 = new Lunch("juice");

  class Dinner {
    #dessert;
      constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }
  
  let Dinner1 = new Dinner("Ceasar");
  let Dinner2 = new Dinner("rice");
  let Dinner3 = new Dinner("manti");
  let Dinner4 = new Dinner("helva"); 