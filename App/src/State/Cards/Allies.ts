import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AllyCard extends Card {
    /** A unique identifier for this card */
    id: string = 'ally';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'friends..?';
    description: string = `
        The Grand Army of the Whales is offering increased support in our civil war. The public is
        weary of accepting outside help, and specifically weary of influence from the Whales. But
        this aid could help us win the civil war.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['deny', 'accept'];
    footer: string = 'platonic soulmates <3';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-3, Stat.military),
            new Effect(5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(15, Stat.military),
            new Effect(-18, Stat.popular),
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
