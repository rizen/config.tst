import {
  createGame,
  createGameClasses,
  Player,
  Game,
} from '@boardzilla/core';

export class ConfigtestPlayer extends Player<ConfigtestPlayer, MyGame> {
};

class MyGame extends Game<ConfigtestPlayer, MyGame> {
}

const { Space, Piece } = createGameClasses<ConfigtestPlayer, MyGame>();

type CardTestOptions = false | 'smallest' | 'largest' | 'value' | 'level' | 'even' | 'odd' | Number;
type CardTest = CardTestOptions | CardTestOptions[];
type CardTestRow = CardTest[];
type CardTestSet = CardTestRow[];
type CardSwap = 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'B3' | 'C1' | 'C2' | 'C3' | false;
type CardSwapRow = CardSwap[];
type CardSwapSet = CardSwapRow[];
type CardRearrangeRow = boolean[];
type CardRearrangeSet = CardRearrangeRow[];
type CardSide = | {
  config: 'swap',
  swap: CardSwapSet[] | 5 | 'level',
  test: CardTestSet[],
} | {
  config: 'rearrange',
  rearrange: CardRearrangeSet[],
  test: CardTestSet[],
};

export interface Card {
  level: number,
  variant: string,
  back: CardSide,
  face: CardSide,
};

export class Card extends Piece { }

export default createGame(ConfigtestPlayer, MyGame, game => {

  const { action } = game;
  const { playerActions, loop, eachPlayer } = game.flowCommands;

  game.registerClasses();

  game.defineActions({
  });

  game.defineFlow(
  );
});
