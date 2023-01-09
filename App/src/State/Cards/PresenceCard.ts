import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class PresenceCard extends Card {
    /** A unique identifier for this card */
    id: string = 'PresenceCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'where are you?';
    description: string = `
        Madam President, I feel the need to advise you that the public feels disconnected, you need more of a public and
        online presence. We should invest in this now.
        Also stay out of peopl's dms.. it's for the best m'adam.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['*grumbles.. snapface..', 'i can hit the griddy'];
    footer: string = `let's just hope we can get verified... don't want another insulin mishap...`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(9, Stat.popular),
            new Effect(-7, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
