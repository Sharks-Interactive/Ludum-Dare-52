import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AttackedLogCard extends Card {
    /** A unique identifier for this card */
    id: string = 'attackedlog';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.5;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'logistical tragedy.';
    description: string = `
        The enemy is using strategic blockades to prevent shipping all across Pony Planet.
        Our infrastructure is falling apart. Should we establish patrols along shipping routes?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'GAOH Intelligence';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-4, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-4, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(4, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-6, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return !state.ownedCards.includes('raise-military-one'); 
    }
}
