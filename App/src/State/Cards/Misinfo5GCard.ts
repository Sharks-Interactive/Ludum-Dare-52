import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class MisInfoCard extends Card {
    /** A unique identifier for this card */
    id: string = 'MisInfoCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'misinformation.';
    description: string = `
        Enemy misinformation and domestic misinformation are spreading rapidly. The public is convinced our 5G cellular
        technology is causing disease. We need to do something about this.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['this is too funny to stop', 'i agree'];
    footer: string = 'low-key climbing a radio tower sounds fun';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-12, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
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
