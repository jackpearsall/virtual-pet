const Pet = require('../src/pet');

describe('constructor', () => {
  const pet = new Pet('Fido');
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    expect(pet.name).toEqual('Fido');
  });
  it('expect the pet to have an initial age of 0', () => {
    expect(pet.age).toEqual(0);
  });
  it('expect the pet to have an initial hunger of 0', () => {
    expect(pet.hunger).toEqual(0);
  });
  it('expect the pet to have an initial fitness of 10', () => {
    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
    pet.growUp();
  });
  it('throws an error if growUp is run and the pet is dead', () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
  it('increases age by 1 year', () => {
    expect(pet.age).toEqual(1);
  });
  it('increases hunger by 5', () => {
    expect(pet.hunger).toEqual(5);
  });
  it('decreases fitness by 3', () => {
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
  });
  it('throws an error if walk is run and pet is dead', () => {
    pet.fitness = -1;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
  it('increases fitness by 4', () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it('increases fitness to a max of 10', () => {
    pet.fitness = 9;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
  });
  it('throws an error if feed is run and the pet is dead', () => {
    pet.hunger = 11;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
  it('descreases hunger by 3', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  it('decreases hunger to a minimum of 0', () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
  });
  it('throws an error if checkUp is run and the pet is dead', () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  });
  it('expects checkUp to return walk prompt if fitness is 3 or less', () => {
    pet.fitness = 2;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it('expects checkUp to return hunger prompt if hunger is 5 or more', () => {
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual('I am hungry');
  });
  it('expects checkUp to return hunger and walk prompt if fitness is 3 or less and hunger is 5 or more', () => {
    pet.fitness = 2;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });
  it('expects checkUp to return fine prompt if none of the above criteria are met', () => {
    pet.fitness = 5;
    pet.hunger = 3;
    expect(pet.checkUp()).toEqual('I feel great!');
  });
});

describe('isAlive', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Fido');
  });
  it('expects false if the pets fitness is 0 or less', () => {
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });
  it('expects false if the pets hunger is 10 or more', () => {
    pet.hunger = 11;
    expect(pet.isAlive).toEqual(false);
  });
  it('expects false if the pets age is 30 or more', () => {
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
  it('expects true if none of the above criteria are met', () => {
    expect(pet.isAlive).toEqual(true);
  });
});

describe('adoptChild', () => {
  let parent;
  beforeEach(() => {
    parent = new Pet('Fido');
  });
  it('throws an error if adoptChild is run and the  pet is dead', () => {
    parent.age = 30;
    expect(() => parent.adoptChild()).toThrow('Your pet is no longer alive :(');
  });
  it('adopts a child with the same properties of the parent Pet', () => {
    const child = new Pet('Scooby');
    parent.adoptChild(child);
    expect(parent.children).toEqual([{
      name: 'Scooby', age: 0, hunger: 0, fitness: 10, children: [],
    }]);
    expect(parent).toEqual({
      name: 'Fido',
      age: 0,
      hunger: 0,
      fitness: 10,
      children: [{
        name: 'Scooby', age: 0, hunger: 0, fitness: 10, children: [],
      }],
    });
  });
});
