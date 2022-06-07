import Race from './race';

export default class Halfling extends Race {
  maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  static HalflingInstances(): number {
    return Halfling._createdRacesInstances;
  }
} 