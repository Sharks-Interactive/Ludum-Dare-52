import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class DinoSupportCard extends Card {
    /** A unique identifier for this card */
    id: string = 'DinoSupportCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'aidez-vous?';
    description: string = `
        The Grand Army of the Dinosaurs have offered their support in our Civil War. A ruthless species the public respects
        them. This is likely a win, win. It would likely open more opportunities for collaboration in the future.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['reject', 'accept'];
    footer: string = `STOP!! HAVEN'T YOU SEEN JURASSIC PARK?!?!`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(9, Stat.military),
            new Effect(3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-3, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
