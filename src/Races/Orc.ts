import Race from './race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  static OrcInstances(): number {
    return Orc._createdRacesInstances;
  }
} 