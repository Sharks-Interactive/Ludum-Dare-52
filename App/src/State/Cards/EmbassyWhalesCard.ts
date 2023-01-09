import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class EmbassyWhalesCard extends Card {
    /** A unique identifier for this card */
    id: string = 'EmbassyWhalesCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'construction projects..';
    description: string = `
        The Whales have expressed interest in having an embassy on Pony Planet and vice versa. This would be a good
        opportunity, the public likes the Whales better now.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no thanks', 'build them'];
    footer: string = `so like... is a Whale embassy like a fish tank? I can't be the only one wondering how that works...`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(-2, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-6, Stat.finance),
            new Effect(-8, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('WhaleBordersCard-y'); }
}
