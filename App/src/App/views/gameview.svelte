<script lang="ts">
    import type { GameState } from '../../State/GameState';
    import {onMount} from 'svelte'
    import { createEventDispatcher } from 'svelte';

    export let state: GameState;

    let selected = false;
    let side = 'none';

    let sides = ['Left', 'Right'];

    let card: HTMLElement, select: HTMLElement;
    const dispatch = createEventDispatcher();

    function onSubmitChoice(index: number) {
        if (!selected) return;

        // Execute it and get a new choice in here
        selected = false;
        dispatch('submit', {
            choice: index
        });
    }

    function onSelectChoice(index: number) {
        // Show how it will affect your stats
        dispatch('select', {
            choice: index
        });
    }
    
    function onCardClick(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
        let mouse = e as MouseEvent;

        side = sides[
            Number(!(mouse.offsetX / (card as HTMLElement).offsetWidth < 0.5))
        ];
        onSelectChoice(sides.indexOf(side));
    }

    function onClickAnywhere() {
        if (select?.matches(':hover')) return;        
        selected = card.matches(':hover');

        if (!selected)
            dispatch('select', {
                choice: -1
            });
    }

    onMount(() => {
      document.addEventListener('click', onClickAnywhere);

      let _ = document.getElementById('ts-card');
      if (_ != null) card = _;

      _ = document.getElementById('ts-select');
      if (_ != null) select = _;

      return () => {
        document.removeEventListener('click', onClickAnywhere);
      }
    })
</script>

<div>
    <div class="cardContainer">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            on:click={event => onCardClick(event)} id="ts-card"
            class="card text-bg-dark mb-3 infoCard {selected ? `card${side}` : ''}"
             style="margin-top: auto; background-color: #212529; cursor: pointer;">
            <div class="card-body">
              <h5 class="card-title">{state.currentCard.title}</h5>
              <p class="card-text">{state.currentCard.description}</p>
              {#if state.currentCard.id === 'funcle'}
                <img src="assets/propagandaProcessed.png" style="height: 200px;">
              {/if}
            </div>
            <div class="card-footer"><em>{state.currentCard.footer}</em></div>
        </div>

        <button type="button" class="btn w-100 btn-outline-{sides.indexOf(side) ? 'success' : 'danger'}" 
            style="margin-top: auto; opacity: {selected ? '1' : '0'}; transition: all 0.5s" 
            on:click={() => onSubmitChoice(sides.indexOf(side))} id="ts-select">
            Confirm ({state.currentCard.options[sides.indexOf(side)]})
        </button>
    </div>
</div>

<style>
    .cardContainer {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        height: 100%;
        padding: 5%;
    }

    .cardRight {
        transform: rotateZ(5deg) translateX(15px);

        transition-duration: 0.5s;
    }

    .cardLeft {
        transform: rotateZ(-5deg) translateX(-15px);

        transition-duration: 0.5s;
    }

    .infoCard {
        border: 1px solid rgba(140, 130, 115, 0.17) !important;

        transition-duration: 0.5s;
    }
</style>
