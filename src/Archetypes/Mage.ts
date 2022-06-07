import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  energyType: EnergyType = 'mana';
  private static mageInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage.mageInstances += 1;

    return Mage.mageInstances;
  }
}