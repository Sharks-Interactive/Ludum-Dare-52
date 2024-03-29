import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class OutrageCard extends Card {
    /** A unique identifier for this card */
    id: string = 'outrage-raisemilitarytwo';
    /** Multiplier on how often this card can be picked */
    rarity: number = 5;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'outrage!';
    description: string = `
        The attack on the city center and now the attack on our infrastructure? This is ridiculous.
        Our citizens are getting outraged that we cannot protect them. They are not happy with our handling
        of this war. We should immedietly move to invest heavily in our military.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = `it's harder than it looks...`;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(7, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-4, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('attackedbyp') && state.ownedCards.includes('attackedlog');
    }
}
