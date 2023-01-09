import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BombardmentCard extends Card {
    /** A unique identifier for this card */
    id: string = 'indiscriminatebomb';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'scorched earth.';
    description: string = `
        Give us the order to move our ships and artillery in to carry out an indiscriminate orbital bombardment.
        We have everything we need thanks to the state of emergency to end this war.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['what is a war crime for 100 points', 'end it'];
    footer: string = 'indiscriminate? well, dsiscrimination is bad right. indiscriminate is a good thing, right?';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-15, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-15, Stat.popular),
            new Effect(-8, Stat.finance),
            new Effect(-45, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('soec-y'); }
}
