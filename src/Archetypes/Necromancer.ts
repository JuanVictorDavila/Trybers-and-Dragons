import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  energyType: EnergyType = 'mana';
  private static necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer.necromancerInstances += 1;

    return Necromancer.necromancerInstances;
  }
}