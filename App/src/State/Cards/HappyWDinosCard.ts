import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class HappyWDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'happyWdinos';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.95;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'nouvel amis.';
    description: string = `
        The public is very happy with the presence of the dinosaurs. They have taken a liking to them and see the value
        they contribute to the Pony Planet economy, and our military.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['they should be thanking me', 'very good'];
    footer: string = `yea, I kinda like 'em now, too`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(8, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(8, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('BordersDinosCard-y'); }
}
