import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class FuncleSurrenderCard extends Card {
    /** A unique identifier for this card */
    id: string = 'funsurrender';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.8;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'SURRENDER';
    description: string = `
        Thanks to our unprecedented...policies, The Funcle and his rebels have been forced into an unconditional surrender.
        Every pony will be free and we are in the process of freeing the currently enslaved ones.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['wonderful', 'pefect'];
    footer: string = `it's all over, over there!`;

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
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('indiscriminatebomb-y') || 
            (state.ownedCards.includes('WhaleSupportCard-y') && state.ownedCards.includes('soec-y'));
    }
}
