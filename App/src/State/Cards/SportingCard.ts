import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class SportingCard extends Card {
    /** A unique identifier for this card */
    id: string = 'sportca';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'the mane event.';
    description: string = `
        The final of a huge sporting event is coming up, the public might like it if you were to be seen attending
        in support of the Pony Planet National Team. It will be expensive to safely transport you though.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['boring', 'gooaaaaaalllll'];
    footer: string = `Transportation could be Messi.`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(4, Stat.popular),
            new Effect(-8, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
