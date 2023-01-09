import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class FunclePropCard extends Card {
    /** A unique identifier for this card */
    id: string = 'FunclePropCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'propoganda.';
    description: string = `
        The Funcle's rebels are putting a lot of propaganda online. This needs to be shutdown
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['leave it', 'agreed'];
    footer: string = 'choclate ate the apple in the garden of eden';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-12, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-6, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
