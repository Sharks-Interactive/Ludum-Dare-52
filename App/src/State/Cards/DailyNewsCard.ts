import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class DailyNewsCard extends Card {
    /** A unique identifier for this card */
    id: string = 'dailynews';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'Pony Express';
    description: string = `
        Today we tried three different upscale steakhouses in the heart of Pony City to decide which one is better.
        Pork House ranked the worst, with The Zeb Raw coming in second worst and Defenitely Not Sentient Cows™ being last.
        After eating, we each developed a sore throat. We are unsure if it was because of the food but the doctor told me I
        will be ok and I am just a little hoarse. 
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['terrible journalism...', 'i like this article'];
    footer: string = '10-11-2000';

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

    requirementsFullfilled(state: GameState): boolean { return true; }
}
