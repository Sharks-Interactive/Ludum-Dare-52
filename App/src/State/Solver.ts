import { Card } from "./Card";
import { gameCards } from "./CardsRegistry";
import type { GameState } from "./GameState";

export function advance(currentState: GameState): GameState {
    currentState.turnNumber++;

    // Solve effects and apply them to stats
    
    // ownedCards should be updated elsewhere

    currentState.turnNumber++;
    currentState.currentCard = solveForNextCard(currentState);

    return currentState;
}

function solveForNextCard(state: GameState): Card {
    // Here we need to do a few things: 
    // - filter out cards whose prequisites are not satisfied
    // - filter out cards who are unique and we've already had
    // - randomly pick a card based on its rarity

    // TODO: /sidenote - should cards be given state and compute their rarity
    // on each selection? This would allow e.g. financial problems being rare
    // but becoming super (3x ish) common when the player is struggling
    // financially. This could help if those cards dont show up enough
    // in financial criseses.. is that a word? it's 02:30 something rn

    return gameCards.filter(card => !state.ownedCards.includes(card.id))[0];
}
