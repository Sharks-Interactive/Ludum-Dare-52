import { Card } from "../Card";
import { Effect, Stat } from "../Effect";
import type { GameState } from "../GameState";

export class AssaultWithDinosCard extends Card {
    /** A unique identifier for this card */
    id: string = 'assaultwdinos';
    /** Multiplier on how often this card can be picked */
    rarity: number = 1;
    /** If this card can only be shown once */
    unique: boolean = false;

    title: string = 'launch an assault.';
    description: string = `
        Now that the dinosaurs are fully integrated into our society, we should use the combined military might of the
        Grand Army Of the Horses and the Grand Army of the Dinosuars to launch a massive invasion of the Army of the Ponies
        headquarters.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['later', 'do it!'];
    footer: string = 'yippee-kiyay mother$#*(';

    /** A list of effects  */
    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(0, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(20, Stat.military),
            new Effect(5, Stat.popular),
            new Effect(-20, Stat.finance),
            new Effect(-15, Stat.nature)
        ]
    ];

    /** ID's of any cards that the player has to have to get this (append -y or -n to the id to filter by answer) */
    prerequisiteIds: string[] = [];
    /** ID's of any cards that prevent this card from showing */
    blockerIds: string[] = [];

    requirementsFullfilled(state: GameState): boolean { return state.ownedCards.includes('IntegDinosCard-y'); }
}
