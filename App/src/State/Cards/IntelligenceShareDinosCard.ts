import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class IntelShareDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'IntelShareDinosCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'sharing is caring.';
    description: string = `
        Should we openly share ALL military intelligence we have with the Dinosaurs? This would be a two-way street and
        would improve relations between our two nations further.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['keep to ourselves', 'yes this will benefit us'];
    footer: string = `mutual, I'm sure.`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(5, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('dinoCitizen-y'); }
}