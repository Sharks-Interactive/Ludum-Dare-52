import { Card } from "../Card";
import { Stat, Effect } from "../Effect";

export class IntroCard extends Card  {
    id: string = "card-intro";

    title: string = "it begins.";
    description: string = `
        President Choclate? It happened. Our worst fears have come true. They've split away from Pony Planet.
        Defectors from our Grand Army Of the Horses have formed a cell, they call themselves the Army Of the Ponies.
        They are intent on making enslaving ponies legal again. We should put out a statement condemning them. Now.
    `;

    footer: string = "Grand Army Of the Horses Intelligence";
    options: string[] = ['no, do not confront them', 'i agree'];

    effects: Effect[][] = [
        [ // Effects if the user selects negative
            new Effect(0, Stat.military),
            new Effect(-10, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ],
        [ // Effects if the user selects positive
            new Effect(0, Stat.military),
            new Effect(10, Stat.popular),
            new Effect(0, Stat.finance),
            new Effect(0, Stat.nature)
        ]
    ];
}
