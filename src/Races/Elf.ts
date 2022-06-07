import Race from './race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }
  
  static createdRacesInstances(): number {
    Elf.elfInstances += 1;
    
    return Elf.elfInstances;
  }
} 