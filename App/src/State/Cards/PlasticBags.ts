import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class PlasticBagCard extends Card {
    /** A unique identifier for this card */
    id: string = 'plasticbag';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'plastic bags.';
    description: string = `
        There is a movement in progress to outlaw the use of plastic bags in shopping marts.
        Doing this would greatly please the environmentalists in Pony Planet without angering
        the rest of our population, but would likely affect the economy...
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, keep the plastic', 'yes lets go reusable!'];
    footer: string = 'do you ever feel, like a plastic bag';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-6, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-4, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(5, Stat.popular),
            new Effect(-3, Stat.finance),
            new Effect(9, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
