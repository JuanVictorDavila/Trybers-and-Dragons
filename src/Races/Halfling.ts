import Race from './race';

export default class Halfling extends Race {
  maxLifePoints: number;
  private static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }
  
  static HalflingInstances(): number {
    Halfling.halflingInstances += 1;
    
    return Halfling.halflingInstances;
  }
} 