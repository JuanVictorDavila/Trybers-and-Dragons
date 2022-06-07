import IEnergy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;

  attack(fighter: Fighter): void;

  special(fighter: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): void;
}