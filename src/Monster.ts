import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): void | number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    } else {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  } 
}