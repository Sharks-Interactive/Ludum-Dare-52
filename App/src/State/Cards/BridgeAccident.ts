import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class BridgeAccident extends Card {
    /** A unique identifier for this card */
    id: string = 'bridgeaccident';
    /** Multiplier on how often this card can be picked */
    rarity: number = 2;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'accident.';
    description: string = `
        There was an accident over by the Nrėaeh Nah memorial drydocks when a worker fell
        asleep whilist operating heavy machinery. This is what you get for refusing to caffeinate
        your citizens!
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['oh well', 'a tradgedy...'];
    footer: string = 'sleep well';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-1, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-1, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('coffeeshortage-n'); 
    }
}
