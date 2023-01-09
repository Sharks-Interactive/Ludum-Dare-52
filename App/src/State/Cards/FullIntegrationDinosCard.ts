import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class IntegDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'IntegDinosCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'integration.';
    description: string = `
        The dinosaurs want to fully integrate into Pony Planet. This would mean they would make their capitol Pony Planet
        and live primarily with us.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'hi roomy!'];
    footer: string = 'declining this will prevent important opportunities in the future';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(1, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(1, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('dinoleading-y'); }
}
