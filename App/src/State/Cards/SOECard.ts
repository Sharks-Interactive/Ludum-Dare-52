import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class SOECard extends Card {
    /** A unique identifier for this card */
    id: string = 'soec';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'state of emergency.';
    description: string = `
        With The Funcle and his rebels on the run, we should declare a state of emergency.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'are we a state.. of emergency? or are we IN a state of emergency';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(15, Stat.military),
            new Effect(-12, Stat.popular),
            new Effect(15, Stat.finance),
            new Effect(-8, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean {
         return state.ownedCards.includes('funclerun-y') && !state.ownedCards.includes('funsurrender');
        }
}
