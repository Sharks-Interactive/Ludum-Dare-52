import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class RegulationsCard extends Card {
    /** A unique identifier for this card */
    id: string = 'RegulationsCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'regulate all the things!';
    description: string = `
        The public wants more transparency and stricter regulations around safety of products in every sector. Should we
        appoint a new office of consumer safety?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'can we get a cool acronym? like the OWCA!';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-8, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(7, Stat.popular),
            new Effect(-3, Stat.finance),
            new Effect(3, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
