const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const FITNESS_WARNING = 3;
const HUNGER_WARNING = 5;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function growUp() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function walk() {
  if ((this.fitness + 4) < MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function feed() {
  if ((this.hunger - 3) < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= 3;
  }
};

Pet.prototype.checkUp = function checkUp() {
  if (this.fitness <= FITNESS_WARNING && this.hunger >= HUNGER_WARNING) {
    return 'I am hungry AND I need a walk';
  }
  if (this.fitness <= FITNESS_WARNING) {
    return 'I need a walk';
  }
  if (this.hunger >= HUNGER_WARNING) {
    return 'I am hungry';
  }
  return 'I feel great!';
};


module.exports = Pet;
