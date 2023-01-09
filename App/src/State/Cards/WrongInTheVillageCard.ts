import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class VillageWrongCard extends Card {
    /** A unique identifier for this card */
    id: string = 'villageWrongCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.5;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = `something's up`;
    description: string = `
        There's something wrong in the village. It's true. There's nothing wrong with you. Should we do something
        about the village?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no..?', 'yes..?'];
    footer: string = `look dude, I don't understand it either`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-5, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(5, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
