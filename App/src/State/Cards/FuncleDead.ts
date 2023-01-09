import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class FuncleDeadCard extends Card {
    /** A unique identifier for this card */
    id: string = 'nofuncle';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.004;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'killed.';
    description: string = `
        Our operation was successfull, the Funcle has been confirmed dead. Despite this The Army Of the Ponies has
        not given in yet, unfortunately.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['good to hear', 'the public will love this'];
    footer: string = 'ladies and gentlemen, we got him';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(5, Stat.military),
            new Effect(15, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(5, Stat.military),
            new Effect(15, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('killfuncle-y') && !state.ownedCards.includes('yesfuncle');
    }
}
