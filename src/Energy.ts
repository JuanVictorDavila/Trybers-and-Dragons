export default interface IEnergy {
  type_: EnergyType,
  amount: number,
}

export type EnergyType = 'mana' | 'stamina';