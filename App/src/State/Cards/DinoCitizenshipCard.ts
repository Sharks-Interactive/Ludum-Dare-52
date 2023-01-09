import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class DinoCitizensCard extends Card {
    /** A unique identifier for this card */
    id: string = 'dinoCitizen';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'green card.';
    description: string = `
        Dinosaurs now comprise of a major portion of our population. We should allow them to achieve full citizenship on
        Pony Planet.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['horses only', 'allow them'];
    footer: string = 'i would sooo fail a citizenship test';

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
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('WorkWDinosCard-y'); }
}
