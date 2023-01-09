import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class WorkWDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'WorkWDinosCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'lab partners.';
    description: string = `
        The Dinosaurs have expressed interest in working more closely with us on Pony Planet and in our wars. This sounds
        like a great opportunity.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['WE work alone', 'buddy up!'];
    footer: string = `
        dude, you want bloodthirsty dinos in your office?? jurassic park traumatising 7 yr old me is 
        hardly relevant...
    `;

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(2, Stat.military),
            new Effect(2, Stat.popular),
            new Effect(-8, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { 
        return state.ownedCards.includes('embassyDinos-y') && state.ownedCards.includes('DinoSupportCard-y');
     }
}
