import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AirDefenseCard extends Card {
    /** A unique identifier for this card */
    id: string = 'missiledeterrent';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'watch the sky.';
    description: string = `
        We need much stronger air defenses. The ponies are able to carry out missile strikes on us at any moment
        should we invest? We couldn't stop everything but it would make attacks less likely.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'CWIS';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-2, Stat.military),
            new Effect(-3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(6, Stat.military),
            new Effect(2, Stat.popular),
            new Effect(-7, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
