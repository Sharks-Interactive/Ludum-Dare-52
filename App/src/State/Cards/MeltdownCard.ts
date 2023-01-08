import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class MeltdownCard extends Card {
    /** A unique identifier for this card */
    id: string = 'meltdown';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.05;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'meltdown!';
    description: string = `
        A terrible accident has occured and one of our reactors has melted down! There is
        an incredible cost to life. We should move federal troops in immedietly and work
        to clean it up.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'Pony Planet Disaster Response';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-10, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(1, Stat.popular),
            new Effect(-2, Stat.finance),
            new Effect(1, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('nuclear-y');
     }
}
