import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class StudentDebtCard extends Card {
    /** A unique identifier for this card */
    id: string = 'sdebtc';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'loan forgiveness';
    description: string = `
        Our civillians want a student debt forgiveness package. This could hurt us economically but it would be popular
        and our civillians are dealing with rising energy prices because of the civil war. Should we pass such a bill?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'forgive them'];
    footer: string = `i'm bidin my time`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-12, Stat.popular),
            new Effect(2, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(4, Stat.popular),
            new Effect(-20, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
