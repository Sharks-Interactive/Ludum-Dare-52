import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class KillFuncleCard extends Card {
    /** A unique identifier for this card */
    id: string = 'killfuncle';
    /** Multiplier on how often this card can be picked */
    rarity: number = 0.6;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'foreign policy';
    description: string = `
        Pony Planet Joint Special Operations Command has just gotten credible intelligence on the location of
        The Funcle. We should act now and attempt to assasinate him. This could bring a swift end to the war.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['no', 'kill him'];
    footer: string = 'one shot, one kill';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-10, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(5, Stat.military),
            new Effect(14, Stat.popular),
            new Effect(-5, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
