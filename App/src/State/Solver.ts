import type { Card } from "./Card";
import { EmptyCard } from "./Cards/EmptyCard";
import { LoseCard } from "./Cards/LoseCard";
import { StartOverCard } from "./Cards/StartOver";
import { WonCard } from "./Cards/WonCard";
import { gameCards } from "./CardsRegistry";
import { Effect, Stat } from "./Effect";
import type { GameState } from "./GameState";

export function advance(currentState: GameState, choice: number): GameState {
    // Add new effects
    currentState.currentCard.effects[choice].forEach(effect => effect.effectStarted = currentState.turnNumber);
    currentState.activeEffects.push(...currentState.currentCard.effects[choice]);

    currentState.turnNumber++;

    // Solve effects and apply them to stats
    currentState.activeEffects.forEach(effect => {
        if (currentState.turnNumber > effect.effectStarted + effect.fallout) {
            // Zero it out, don't remove it from the list since we are currently iterating over it and that causes elusive bugs (!)
            // There is a more elegant solution that doesn't involve polluting the list but I can't be bothered right now
            // TODO: Make this not use an ever increasing amount of memory
            currentState.activeEffects[currentState.activeEffects.indexOf(effect)] = new Effect();
            return;
        }
        
        currentState.stats[effect.statId] += (effect.totalChange / effect.fallout);
    });

    // Update list of owned cards, add the cardID and the cardID-choice for cards to use in computations
    currentState.ownedCards.push(...[
        currentState.currentCard.id, 
        `${currentState.currentCard.id}-${['n', 'y'][choice]}`
    ]);

    // Some special logic for when you have no cards left
    if (currentState.currentCard.id == 'no-cards-left') {
        if (choice == 0) currentState.ownedCards = ['card-intro'];
        else {
            currentState.currentCard = new StartOverCard();
            return currentState;
        }
    }

    // Pick a new card
    currentState.currentCard = solveForNextCard(currentState);
    
    return currentState;
}

function solveForNextCard(state: GameState): Card {
    // Here we need to do a few things: 
    // - filter out cards whose prequisites are not satisfied
    // - filter out cards who are unique and we've already had
    // - randomly pick a card based on its rarity
    let cardChoices: Card[] = gameCards.filter(card => !(
        (card.unique && state.ownedCards.includes(card.id)) || state.currentCard == card ||
            (state.ownedCards.reduce((prev, cur) => prev + Number(cur == card.id), 0) > 2) // Only show non-unique cards a max of three times
    ));
    cardChoices = cardChoices.filter(card => card.requirementsFullfilled(state));
    // TODO: Only repeat non unique cards twice then drop them
    // TODO: /sidenote - should cards be given state and compute their rarity
    // on each selection? This would allow e.g. financial problems being rare
    // but becoming super (3x ish) common when the player is struggling
    // financially. This could help if those cards dont show up enough
    // in financial criseses.. is that a word? it's 02:30 something rn

    if (state.currentCard.id == 'vpday') return new WonCard('defeating The Funcle.');

    if (state.stats[Stat.military] < 1) return new LoseCard(`your military is too weak, The Funcle invaded and won after ${state.turnNumber} rounds.`);
    if (state.stats[Stat.popular] < 1) return new LoseCard(`you were not very popular, there was a coup after ${state.turnNumber} rounds.`);
    if (state.stats[Stat.finance] < 1) return new LoseCard(`you let your government go bankrupt after ${state.turnNumber} rounds.`);
    if (state.stats[Stat.nature] < 1) return new LoseCard(`you let your world become uninhabitable. Everyone died after ${state.turnNumber} rounds.`);

    let card = weightedRandomCard(cardChoices, cardChoices.map(card => card.rarity));
    if (card == undefined || cardChoices.length < 1) return new EmptyCard();

    return card;
}

function weightedRandomCard(items: Card[], weights: number[]) {
    let i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    
    let random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random) break;
    
    return items[i];
}
