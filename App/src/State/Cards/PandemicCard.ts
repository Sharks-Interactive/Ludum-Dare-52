import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class PandemicCard extends Card {
    /** A unique identifier for this card */
    id: string = 'pandc';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'a virus.';
    description: string = `
        A mysterious upper respiratory virus has appeared. Should we shut everything down or hope this stays
        contained?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['shut it all down!', 'its just a cough...'];
    footer: string = 'it would just be for two weeks';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-8, Stat.military),
            new Effect(-10, Stat.popular),
            new Effect(-15, Stat.finance),
            new Effect(-2, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
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
