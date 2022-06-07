import Race from './race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  protected _name: string;
  protected _dexterity: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    this._name = name;
    this._dexterity = dexterity;
  }
  
  static createdRacesInstances(): number {
    Elf.elfInstances += 1;
    
    return Elf.elfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
} 