import Race from './race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  private static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    Dwarf.dwarfInstances += 1;

    return Dwarf.dwarfInstances;
  }
}