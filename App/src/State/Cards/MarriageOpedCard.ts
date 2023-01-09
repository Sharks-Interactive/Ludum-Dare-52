import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class MarriageOpedCard extends Card {
    /** A unique identifier for this card */
    id: string = 'MarriageOpedCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'trouble in paradise.';
    description: string = `
        The Pony Express is running an Op-Ed on your failed marriage with Oreo and his working in the coal mines.
        It's incredibly inflammatory, I reccomend we make a statement.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['take the blow', 'explain myself'];
    footer: string = `ooooh here's a good excerpt, "truly rotten person that is going to hell"`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-3, Stat.popular),
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
