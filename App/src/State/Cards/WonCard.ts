import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class WonCard extends Card {
    constructor (winMsg: string) {
        super();

        this.description = `
            Congrats you won by ${winMsg}. That's it. Thank you so much for playing. Rate my game if you'd like.
            You can keep hitting buttons and see what happens and stuff but if you do.. just.. good luck.
            Or you can refresh to play again.
        `;
    }
    /** A unique identifier for this card */
    id: string = '';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'you won.';
    description: string;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['', ''];
    footer: string = `the missions, the nightmares, their finally over.`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(100, Stat.military),
            new Effect(100, Stat.popular),
            new Effect(100, Stat.finance),
            new Effect(100, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(100, Stat.military),
            new Effect(100, Stat.popular),
            new Effect(100, Stat.finance),
            new Effect(100, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
