import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class RSpeechBlowback extends Card {
    /** A unique identifier for this card */
    id: string = 'RSpeechBlowback';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'unrest.';
    description: string = `
        Some civillians are upset over the recent restriction of free speech. If only they could express their dissent...
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['oh well', 'what a shame'];
    footer: string = '#@!?!$#';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(4, Stat.military),
            new Effect(-9, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(4, Stat.military),
            new Effect(-9, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('speech-y'); 
    }
}
