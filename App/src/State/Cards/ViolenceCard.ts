import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class ViolenceCard extends Card {
    /** A unique identifier for this card */
    id: string = 'ViolenceCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'violence & terrorism';
    description: string = `
        Pony Planet is experiencing some of the highest rates of violence and terrorism ever. We should crackdown on this.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['leave it be', 'create a team'];
    footer: string = 'wanna dragggg man?';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-5, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-6, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
