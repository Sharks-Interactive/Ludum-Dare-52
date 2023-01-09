import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class MiliCombDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'MiliCombDinosCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'combine.';
    description: string = `
        The Grand Army of the Dinosaurs has expressed interest in completely combining their military with ours. This would
        mean sharing facilities, equipment, service membrs, all military installations. They would effectively integrate into
        our military. This would be a big step but will bolster our combat forces.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['its too soon', 'do the combine'];
    footer: string = 'half-life 2 really did predict the future...';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(10, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-7, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('IntelShareDinosCard-y'); }
}
