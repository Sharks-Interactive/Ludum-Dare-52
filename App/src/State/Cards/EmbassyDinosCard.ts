import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class EmbassyDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'embassyDinos';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'an embassy.';
    description: string = `
        The dinosaurs have offered to allow us to build an embassy in their nation, and have asked the same of us.
        Should we allow it? It could be very beneficial to continue to build positive relations with them.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['we are fine as is', 'build it'];
    footer: string = `im sorry but I'm not working at an embassy in freakin' dino-land`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(5, Stat.military),
            new Effect(2, Stat.popular),
            new Effect(-7, Stat.finance),
            new Effect(-9, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('BordersDinosCard-y'); }
}
