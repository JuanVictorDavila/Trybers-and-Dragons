import Race from './race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }
  
  static createdRacesInstances(): number {
    Orc.orcInstances += 1;

    return Orc.orcInstances;
  }
} 