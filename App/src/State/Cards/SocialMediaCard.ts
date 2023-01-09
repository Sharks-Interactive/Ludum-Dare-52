import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class SocialMediaCard extends Card {
    /** A unique identifier for this card */
    id: string = 'socmc';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'click clomp';
    description: string = `
        A social media app controlled by the Whales is gaining significant adoption on Pony Planet. There are concerns
        about data privacy and the Whales having that much control. Should we ban this app?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['dude, did you see this video?', 'ban it'];
    footer: string = `Tick-tock on the clock, but the party don't stop, no`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-3, Stat.military),
            new Effect(3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(6, Stat.military),
            new Effect(-7, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(3, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
