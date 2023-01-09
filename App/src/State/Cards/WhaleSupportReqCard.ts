import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class WhaleSupportCard extends Card {
    /** A unique identifier for this card */
    id: string = 'WhaleSupportCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'cashing in some favours...';
    description: string = `
        The Funcle's rebel are on the run but regrouping. To ensure the war ends here, and swiftly, we should request
        support from the Grand Army of the Whales.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, we are fine on our own', 'ask them'];
    footer: string = `i'm still on the fishbowl thing`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-35, Stat.military),
            new Effect(5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(-20, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-5, Stat.popular),
            new Effect(-18, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('funclerun-y') && state.ownedCards.includes('citizenw-y') 
            && !state.ownedCards.includes('funsurrender');
    }
}
