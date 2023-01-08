import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class LudumDareCard extends Card {
    /** A unique identifier for this card */
    id: string = 'ludumdarecard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.5;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'game jam.';
    description: string = `
        The citizens are partaking in an event called 'Ludum Dare'. It makes them happy, however
        they are complaining they do not have enough time left. This could cause unrest among citizens.
        Should we force the event organiser to extend its deadline?
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'yes'];
    footer: string = 'the theme always sucks™';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
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

    requirementsFullfilled(state: GameState): boolean { return true; }
}
