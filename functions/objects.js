var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function() {
    if (this.fuel == 0) {
      alert(this.make + " is on empty,fill up before starting" );
    } else {
      this.started = true};
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes wroom wroom!");
        this.fuel = this.fuel - 1;
      } else {
          alert("Uh oh, out of fuel.");
          this.stop();
      }
    } else {
      alert("You need to start engine first.");
    }
  },

  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};
var taxi = {
  make: "Webwille Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if(this.started) {
      alert(this.make + " " + this.model + " goes wroom wroom!");
    } else {
      alert("You need to start the engine firts.");
    }
  }
};
var chevy = {
  make: "Chevy",
  model: " Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if(this.started) {
      alert(this.make + " " + this.model + " goes wroom wroom!");
    } else {
      alert("You need to start the engine firts.");
    }
  }
}
function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
};
var worthAlook = prequal(taxi);
if (worthAlook) {
  colsole.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log("Yous should really pass on " + taxi.make + " " + taxi.model);
}
var worthAlook2 = prequal(chevy);
if (worthAlook2) {
  console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
  console.log("Yous should really pass on " + chevy.make + " " + chevy.model);
}

function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "Tucker","WBM"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true,false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  }
  return car;
}
function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
var carToSell = makeCar();
displayCar(carToSell);

var eightBall = { index: 0,
                  advice: ["yes", "no", "maybe", "not a chance"],
                  shake: function() {
                    this.index = this.index + 1;
                    if(this.index >= this.advice.length) {
                      this.index = 0;
                    }
                  },
                  look:function() {
                    return this.advice[this.index];
                  }
};




fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
