<script lang="ts">
    import { GameState } from '../State/GameState';
    import {onMount} from 'svelte'
    import Bottombar from './views/bottombar.svelte';
    import Gameview from './views/gameview.svelte';
    import { ComputeImpact } from '../State/Effect';
  
    let count: number = 0
    let state: GameState = new GameState();

    let effects: number[] = [0, 0, 0, 0];

    function selectCard(event: any) {
      if (event.detail.choice == -1) {
        effects = [0, 0, 0, 0];
        return;
      }
      effects = ComputeImpact(state.currentCard.effects[event.detail.choice]);
    }

    onMount(() => {
      const interval = setInterval(() => count++, 1000)
      return () => {
        clearInterval(interval)
      }
    })
</script>

<div class="App">
  <div>
    <h1>Game about Horses - {count}</h1>
  </div>
  <Gameview on:select="{selectCard}" state="{state}"></Gameview>
  <Bottombar effects="{effects}" state="{state}"></Bottombar>
</div>

<style>
  .App {
    display: grid;
    height: 100vh;

    grid-template-rows: 0.2fr 3fr 1.05fr;
  }
</style>
