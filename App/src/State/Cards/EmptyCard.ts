import { Card } from "../Card";
import type { GameState } from "../GameState";

export class EmptyCard extends Card {
    id: string = 'no-cards-left'; 
    rarity: number = 0;

    title: string = 'oops';
    description: string = `
        If you are reading this that means the solver was not able to identify any more cards to serve up... Hmn. I
        could've sworn I gave myself enough time for making content... 😂 I haven't had this happen to me during
        (limited) playtesting, so you've seemingly backed yourself into a corner. You have two choices here.
        You can clear your history and you'll get lots of the same cards again, or you can start again and try to get
        a different ending. Do note you are not seeing this because you've seen all the cards, if you did you would've won.
        There are more you haven't seen. You just don't have the right conditions for them right now.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['clear your history', 'start over'];
    footer: string = 'sorry to dissapoint';


    requirementsFullfilled(state: GameState): boolean { return true; }
}
