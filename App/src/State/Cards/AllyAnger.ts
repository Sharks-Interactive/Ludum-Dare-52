import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AllyAngerCard extends Card {
    /** A unique identifier for this card */
    id: string = 'allyanger';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'emotions.';
    description: string = `
        The rebellion has announced their anger towards our deal with the Whales and has begun to carry out
        strikes against them. The whales may pull support unless we do something to convince them helping us is worth it.
        Maybe a little bribe?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', '$$$'];
    footer: string = 'money cant buy happiness but it can buy a car, a house, ice cream, a vacat....';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-3, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(2, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-8, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('ally-y') && state.ownedCards.includes('funcle'); 
    }
}
