export type Stat = "military" | "finance" | "popular" | "nature";

export class Effect {
    /** Total change on this stat */
    totalChange: number = 0;
    /** Over how many turns the totalchange occurs, 0 for immediate */
    fallout: number = 0;
    /** What stat this affects */
    statId: Stat = 'finance';
    /** Internal number for tracking which turn this effect started */
    effectStarted: number = 0;
}

export function ComputeImpact(effects: Effect[]): number[] {
    return effects.map(effect => Math.max(-1, Math.min(effect.totalChange, 1)));
}
