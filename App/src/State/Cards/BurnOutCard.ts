import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BurnOutCard extends Card {
    /** A unique identifier for this card */
    id: string = 'burnout';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'im fine';
    description: string = `
        You are feeling really burnt out. All this governing has really taken it's toll. You should take a break, get away
        just for a little bit.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['im needed here', 'well.. ok'];
    footer: string = `can we not go to a beach? I hate sand, it's course and rough and irritating and it gets everywhere.`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-5, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(-2, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(5, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
