import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class RaiseMilitaryCard extends Card {
    /** A unique identifier for this card */
    id: string = 'raise-military-one';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'we are weak.';
    description: string = `
        The Army Of the Ponies is increasingly attacking infrastructure within our city. The Grand Army Of the
        Horses is not strong enough and we have no time to wait for a vote. Let's increase our military might now.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'will prevent diplomacy';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-5, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(10, Stat.military),
            new Effect(-10, Stat.popular, 5),
            new Effect(-5, Stat.finance),
            new Effect(-2, Stat.nature, 2)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return !state.ownedCards.includes('trydiplomacy-y');
    }
}
