import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class ImmConcCard extends Card {
    /** A unique identifier for this card */
    id: string = 'immigration';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.2;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'immigration concerns.';
    description: string = `
        There are concerns about immigrants after you opened our borders. We need to reassure the population.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['they will be fine', 'yes'];
    footer: string = `it's spelled 'emmigrate'. Wait no you were right. Wait no, wait...`;

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
            new Effect(3, Stat.popular),
            new Effect(-5, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('WhaleBordersCard-y') || state.ownedCards.includes('BordersDinosCard-y');
    }
}
