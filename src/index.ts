import Dragon from './Dragon';
import Monster from './Monster';
import Character from './Character';
import Battle, { PVE } from './Battle/index';

const player1 = new Character('Snox');
const player2 = new Character('Striker');
const player3 = new Character('LigthFigter');
const monster1 = new Monster();
const monster2 = new Dragon();

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

function runBattles(battles: Battle[]): void {
  battles.map((battle) => battle.fight());
}

const pve = new PVE(player1, [monster1, monster2]);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  runBattles,
  pve,
};
