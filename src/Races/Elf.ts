import Race from './race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  static ElfInstances(): number {
    return Elf._createdRacesInstances;
  }
} 