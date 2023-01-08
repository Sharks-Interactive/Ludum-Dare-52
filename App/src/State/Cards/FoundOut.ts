import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class DiscoverCard extends Card {
    /** A unique identifier for this card */
    id: string = '';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'Pony Express';
    description: string = `
        An article in the Pony Express today reads, "...and the evidence that was recovered proves that President Choclate
        embezzled millions in cash from funds that were intended to go towards the Grand Army Of the Horses.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['uh oh.', 'I will pay it back!'];
    footer: string = `Pony Planet's #1 News Source`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-3, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-5, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('budget-y'); 
    }
}
