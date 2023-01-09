import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class PopMHealthCard extends Card {
    /** A unique identifier for this card */
    id: string = 'PopMHealthCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'crisis.';
    description: string = `
        There is a mental health crisis among our civillians. We should expand information and treatment for mental health.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['stop being a baby', 'of course'];
    footer: string = 'everyday I walked uphill to school, BOTH ways';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-7, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(3, Stat.popular),
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
