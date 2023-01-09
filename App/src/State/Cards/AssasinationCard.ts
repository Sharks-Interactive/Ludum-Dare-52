import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AssasinationCard extends Card {
    /** A unique identifier for this card */
    id: string = 'assesCard';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = true;

    title: string = 'assasination attempt!';
    description: string = `
        Pony Planet Joint Special Operations Command has just interdicted a group of rebels hell bent on assasinating you.
        We need to increase your security.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['i can take care of myself', 'keep me safe'];
    footer: string = 'was it a group of asses? the ones who attempted an ASSasination? get it? nevermind...';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(-6, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(5, Stat.military),
            new Effect(-3, Stat.popular),
            new Effect(-8, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return true; }
}
