import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BioMechCard extends Card {
    /** A unique identifier for this card */
    id: string = 'biomechcard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'biomech';
    description: string = `
        The Funcle's military might become too strong for us. We need something to get an advantage.
        Our GAOH R&D division says they may have some breakthroughs in biomechanics, they believe they
        can create a super soldier with mechanical limbs. They will need funding, and authorisation as this
        testing will not be... humane.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['i cant do that', 'a neccessary sacrifice'];
    footer: string = 'government secret labs are so 80s';

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
