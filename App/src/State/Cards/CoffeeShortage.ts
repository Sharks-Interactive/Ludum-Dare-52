import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class CoffeeShortageCard extends Card {
    /** A unique identifier for this card */
    id: string = 'coffeeshortage';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'not morning people.';
    description: string = `
        Because of the war there is a significant shortage of coffee, and many of our coffee shops have been
        destroyed. We should finance new cafes. Our workforce is falling asleep...
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, try monster energy', 'yes'];
    footer: string = 'pony planet 🏃‍♀️ on 🎃';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(1, Stat.popular),
            new Effect(-2, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
