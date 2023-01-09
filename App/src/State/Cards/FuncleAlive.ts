import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class FuncleAliveCard extends Card {
    /** A unique identifier for this card */
    id: string = 'yesfuncle';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1.2;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'failure...';
    description: string = `
        The Assasination attempt we launched against The Funcle failed. Our intelligence was inaccurate.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['unfortunate', `it'll be ok`];
    footer: string = 'nobody told anybody right? right?';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(-1, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(-1, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('killfuncle-y') && !state.ownedCards.includes('nofuncle'); 
    }
}
