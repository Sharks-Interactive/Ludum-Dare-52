import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class ElectionCard extends Card {
    /** A unique identifier for this card */
    id: string = 'ElectionCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'upcoming election.';
    description: string = `
        An election is coming up.. fast. I am sure you will win... Should we pull a few strings just to make sure?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, we will win', 'what strings?'];
    footer: string = 'absolute power corrupts absolutely'; // stop the count!

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
            new Effect(0, Stat.popular),
            new Effect(-4, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
