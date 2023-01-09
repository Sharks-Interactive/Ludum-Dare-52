import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BankruptCard extends Card {
    /** A unique identifier for this card */
    id: string = 'bankrupt';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'bankruptcy.';
    description: string = `
        The Pony Planet government is going to be bankrupt. We will have no choice but to heavily raise taxes
        or cut back on military spending.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['cut back the military', 'raise taxes'];
    footer: string = 'nothing is certain but death and taxes';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-23, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(15, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
            new Effect(3, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.stats[Stat.finance] < 25;
     }
}
