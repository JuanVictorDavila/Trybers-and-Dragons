import Race from './race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  static DwarfInstances(): number {
    return Dwarf._createdRacesInstances;
  }
} 