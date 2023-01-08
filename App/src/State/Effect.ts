export enum Stat {
    military,
    popular,
    finance,
    nature,
}

export class Effect {
    constructor (change: number = 0, stat: Stat = Stat.finance, fallout: number = 1) {
        this.totalChange = change;
        this.fallout = fallout;
        this.statId = stat;
    }

    /** Total change on this stat */
    totalChange: number = 0;
    /** Over how many turns the totalchange occurs, 1 for immediate */
    fallout: number = 1;
    /** What stat this affects */
    statId: Stat = Stat.finance;
    /** Internal number for tracking which turn this effect started */
    effectStarted: number = -1;
}

export function ComputeImpact(effects: Effect[]): number[] {
    return effects.map(effect => effect.totalChange);
}
