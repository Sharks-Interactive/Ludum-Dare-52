import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class NuclearCard extends Card {
    /** A unique identifier for this card */
    id: string = 'nuclear';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'the nuclear option.';
    description: string = `
        Since the start of this civil war our energy infrastructure has been failing.
        Let's authorise the construction of some nuclear power plants. It will not be popular
        among our citizens but it will be cheaper than continuing to buy energy.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no, import energy', 'build them'];
    footer: string = 'Pony Planet Comptroller of Energy';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(-4, Stat.finance, 2),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(-2, Stat.popular),
            new Effect(2, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
