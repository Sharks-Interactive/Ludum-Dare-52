import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class EducationFundingCard extends Card {
    /** A unique identifier for this card */
    id: string = 'EducationFundingCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'brick & mortar';
    description: string = `
        Our civillians are appalled by the conditions their children are going to school in. We should increase funding in
        the education sector, this would result in better trained soilders as well.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['tell them to suck it up', 'increase it'];
    footer: string = `"don't mind the trash barrels those are just to catch the rainwater"`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(3, Stat.military),
            new Effect(2, Stat.popular),
            new Effect(-18, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
