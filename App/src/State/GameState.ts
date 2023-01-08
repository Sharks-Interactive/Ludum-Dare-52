import { Card } from "./Card";
import type { Effect } from "./Effect";

export class GameState {
    constructor() {
        
    }

    /** An incrementing tracker of what turn the game is on */
    turnNumber: number = 0;

    /** A list of ids of every card the player has interacted with */
    ownedCards: string[] = [];

    /** The four stat values of the game */
    stats: number[] = [50, 50, 50, 50];

    /** Every active effect, effects are removed after expiring */
    activeEffects: Effect[] = [];

    currentCard: Card = new Card();
}
