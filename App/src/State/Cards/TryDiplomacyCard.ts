import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class TryDiplomacyCard extends Card {
    /** A unique identifier for this card */
    id: string = 'trydiplomacy';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'anger..';
    description: string = `
        Our statement condoning the Army Of the Ponies and their desire to bring back slavery greatly angered them.
        They are making threatening statements. We should attempt diplomacy, let us assure them we will remain peaceful
        unless they attack first. We will have to refrain from building up our military, if we do.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'ok'];
    footer: string = 'will prevent military buildup';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(1, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(-15, Stat.military, 3),
            new Effect(-5, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        console.log('OWNED CARDS ARE AS FOLLOWS' + state.ownedCards.toString());
        return !state.ownedCards.includes('raise-military-one-y') && state.ownedCards.includes('card-intro-y'); 
    }
}
