import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class VictoryStatementCard extends Card {
    /** A unique identifier for this card */
    id: string = 'vpday';
    /** Multiplier on how often this card can be picked */
    rarity: number = 300;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'V-P day';
    description: string = `
        Should we formally announce our victory and the defeat of The Funcle? Should we also pass a national holiday, 
        Victory-Pony day? We should at least thank the Whales(?) and the Dinosaurs for their incredible support. Without which
        we would not have won this war.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['not really', 'all of the above'];
    footer: string = ``;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-30, Stat.military),
            new Effect(-30, Stat.popular),
            new Effect(-30, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
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
        return state.ownedCards.includes('funsurrender-y') || state.ownedCards.includes('nofuncle'); 
    }
}
