import IEnergy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: IEnergy;

  attack(enemy: Fighter | SimpleFighter): void;

  special(enemy: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): void;
}