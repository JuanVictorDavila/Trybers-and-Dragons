import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  energyType: EnergyType = 'stamina';
  private static warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Warrior.warriorInstances += 1;

    return Warrior.warriorInstances;
  }
}