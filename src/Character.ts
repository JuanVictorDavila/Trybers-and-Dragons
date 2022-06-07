import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';
import Race, { Elf } from './Races';
import Fighter, { SimpleFighter } from './Fighter';
import IEnergy from './Energy';

export default class Character implements Fighter {
  protected _name: string;
  protected _race: Race;
  protected _archetype: Archetype; 
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;
  protected _dexterity: number;
  protected _energy: IEnergy;

  constructor(name:string) {
    this._name = name;
    this._race = new Elf(name, 5);
    this._archetype = new Mage(name); 
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    const attackPoints = this._strength ** 2;
    this._defense -= 1;
    enemy.receiveDamage(attackPoints);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    
    return this._lifePoints;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  get strength(): number { return this._strength; }
  
  get dexterity(): number { return this._dexterity; }
  
  get defense(): number { return this._defense; }
  
  get race(): Race { return this._race; }
  
  get archetype(): Archetype { return this._archetype; }
  
  get lifePoints(): number { return this._lifePoints; }
  
  get energy(): IEnergy { return { ...this._energy }; }
}