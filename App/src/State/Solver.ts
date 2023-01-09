import type { Card } from "./Card";
import { EmptyCard } from "./Cards/EmptyCard";
import { gameCards } from "./CardsRegistry";
import type { GameState } from "./GameState";

export function advance(currentState: GameState, choice: number): GameState {
    // Add new effects
    currentState.currentCard.effects[choice].forEach(effect => effect.effectStarted = currentState.turnNumber);
    currentState.activeEffects.push(...currentState.currentCard.effects[choice]);

    currentState.turnNumber++;

    // Solve effects and apply them to stats
    currentState.activeEffects.forEach(effect => {
        if (currentState.turnNumber > effect.effectStarted + effect.fallout) {
            currentState.activeEffects = currentState.activeEffects.splice(
                currentState.activeEffects.indexOf(effect),
                1
            );
            return;
        }
        
        currentState.stats[effect.statId] += (effect.totalChange / effect.fallout);
    });

    // Update list of owned cards, add the cardID and the cardID-choice for cards to use in computations
    currentState.ownedCards.push(...[
        currentState.currentCard.id, 
        `${currentState.currentCard.id}-${['n', 'y'][choice]}`
    ]);

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
        (card.unique && state.ownedCards.includes(card.id)) || state.currentCard == card
    ));
    console.log(cardChoices);
    cardChoices = cardChoices.filter(card => card.requirementsFullfilled(state));
    console.log(cardChoices);
    // TODO: Only repeat non unique cards twice then drop them
    // TODO: /sidenote - should cards be given state and compute their rarity
    // on each selection? This would allow e.g. financial problems being rare
    // but becoming super (3x ish) common when the player is struggling
    // financially. This could help if those cards dont show up enough
    // in financial criseses.. is that a word? it's 02:30 something rn
    let card = weightedRandomCard(cardChoices, cardChoices.map(card => card.rarity));
    if (card == undefined || cardChoices.length < 1) return new EmptyCard();

    console.log(card)

    return card;
}

function weightedRandomCard(items: Card[], weights: number[]) {
    let i;
    console.log(items);
    console.log(weights);
    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    
    let random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random) break;
    
    return items[i];
}

// Sentient horses
// Blowback from discovery of embezzlement
// death of musiciain
// funcle propoganda
// public presence
// food safety
// school funding
// violence & terrorism
// op-ed on marriage
// something is wrong in the village
// polic state.. stop it?
// open borders to whales?
// FREE SPEECH BLOWBACK
// election
// mental health crisis
// dinosaur support
// renewable energy
// misinformation / 5g
// horses gaining sentience
// burn out
// immigration concerns (after open borders)
// open borders to dinos
// establish embassy with dinos
// establish embassy with whales
// work closely with dinos (if embassy + support)
// allow dinosaurs full citizenship (if working closely)
// share intelligence with dinosaurs (if citizenship)
// combine military with dinosaurs (if intelligence)
// allow dinosaurs to hold leadership positions (if combine military)
// fully integrate with dinosaurs, allow them to make Pony Planet capitol (if hold leadership)
// launch first assault with dinosaurs (if fully integrated)
// The Funcle on run (if assault)
// Request extra support from whales (if Funcle on run)
// Allow whales citizenship (if dinosaurs citizenship)
// Authorise state of emergency and maximum military spending
// Authorise indiscriminate bombardment
// Negotiate terms of surrender with The Funcle's army
// Statement anouncing victory and thanking whales and dinos

// public happy with mhealth response
// public happy with dinosaurs
// public dissapointed with no immigration (allow an out)
