const MAXIMUM_FITNESS = 10;
const CRITICAL_FITNESS = 0;
const FITNESS_WARNING = 3;

const MINIMUM_HUNGER = 0;
const CRITICAL_HUNGER = 10;
const HUNGER_WARNING = 5;

const INITIAL_AGE = 0;
const MAXIMUM_AGE = 30;

function Pet(name) {
  this.name = name;
  this.age = INITIAL_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE && this.hunger < CRITICAL_HUNGER
    && this.fitness > CRITICAL_FITNESS;
  },
};

Pet.prototype.growUp = function growUp() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function walk() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.fitness + 4) < MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function feed() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.hunger - 3) < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= 3;
  }
};

Pet.prototype.checkUp = function checkUp() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
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
