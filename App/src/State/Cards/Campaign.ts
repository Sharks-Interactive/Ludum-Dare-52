import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class CampaignCard extends Card {
    /** A unique identifier for this card */
    id: string = 'campaignC';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'campaign of war.';
    description: string = `
        Our military is strong enough. It is time we start a true campaign against The Funcle.
        Let's authorise an invasion of their forward operating base. 
        This will use a significant amount of our currently available military resources.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'landing at point rain';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-20, Stat.popular, 5),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(-50, Stat.military),
            new Effect(14, Stat.popular),
            new Effect(-20, Stat.finance),
            new Effect(-10, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean {
         return state.stats[Stat.military] > 80;
    }
}
