import { Effect } from "./Effect";
import type { GameState } from "./GameState";

export class Card {
    constructor() {
        
    }

    /** A unique identifier for this card */
    id: string = '';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'card title';
    description: string = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = '1-8-2023';

    /** A list of effects  */
    effects: Effect[][] = [
        [new Effect(), new Effect(), new Effect(), new Effect()], 
        [new Effect(), new Effect(), new Effect(), new Effect()]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return false; }
}
