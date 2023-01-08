import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BudgetCard extends Card {
    /** A unique identifier for this card */
    id: string = 'budget';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.2;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'increase our funding';
    description: string = `
        We are pouring so much into financing the war... Nobody would notice if a few million here
        or there went missing...
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, that would be corrupt :)', 'its hard to keep track'];
    footer: string = '???';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(-1, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(5, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('raise-military-one-y'); 
    }
}
