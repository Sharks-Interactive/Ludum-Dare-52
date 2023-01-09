import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BankruptCard extends Card {
    /** A unique identifier for this card */
    id: string = 'bankrupt';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'bankruptcy.';
    description: string = `
        The Pony Planet government is going to be bankrupt. We will have no choice but to heavily raise taxes;
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['hold out for just a little....', 'ok...'];
    footer: string = 'nothing is certain but death and taxes';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-12, Stat.popular),
            new Effect(5, Stat.finance),
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
