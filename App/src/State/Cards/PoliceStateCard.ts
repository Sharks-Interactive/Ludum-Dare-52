import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class PoliceStateCard extends Card {
    /** A unique identifier for this card */
    id: string = 'PoliceStateCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'police state.';
    description: string = `
        We are coming dangerously close to becoming a police state. Should we correct course or are you happy with where we
        are headed?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['loosen up a little', 'stay the course'];
    footer: string = 'you text one joke about murder and suddenly the Northeast Horse Police is at your door...';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-7, Stat.military),
            new Effect(3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(8, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-4, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}