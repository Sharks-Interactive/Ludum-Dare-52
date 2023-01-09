import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BordersDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'BordersDinosCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'the floodgates.';
    description: string = `
        In talks with the dinosaurs they are interested in improving the relationship between out two nations. Should
        we open our boreders to them?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'do it'];
    footer: string = `what do dinosaurs even eat? please don't say horses...`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(3, Stat.popular),
            new Effect(4, Stat.finance),
            new Effect(-9, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('DinoSupportCard-y'); }
}
