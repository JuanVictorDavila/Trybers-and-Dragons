import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  energyType: EnergyType = 'stamina';
  private static rangerInstances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger.rangerInstances += 1;

    return Ranger.rangerInstances;
  }
}