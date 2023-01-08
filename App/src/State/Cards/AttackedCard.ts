import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AttackedCard extends Card {
    /** A unique identifier for this card */
    id: string = 'attackedbyp';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.8;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'attacked!';
    description: string = `
        It is a tradgedy. The Army Of the Ponies has launched missiles against our city center because
        our military is too weak to stop them. The public is outraged. We must promise we will retaliate
        and prevent this from happening again.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'let us strike!'];
    footer: string = 'will prevent diplomacy';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-10, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(4, Stat.military, 2),
            new Effect(2, Stat.popular),
            new Effect(-2, Stat.finance, 2),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.stats[Stat.finance] < 25;
     }
}
