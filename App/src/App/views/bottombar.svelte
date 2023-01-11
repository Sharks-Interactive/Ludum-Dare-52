<script lang="ts">
    import type { GameState } from "../../State/GameState";
    import Statbar from "../comps/statbar.svelte";
    import About from "./about.svelte";

    export let state: GameState;
    export let effects: number[];

    let aboutOpen = false;
</script>

<div>
    <Statbar effect="{effects[0]}" progress="{state.stats[0]}" label="Military"></Statbar>
    <Statbar effect="{effects[1]}" progress="{state.stats[1]}" label="Popularity"></Statbar>
    <Statbar effect="{effects[2]}" progress="{state.stats[2]}" label="Finances"></Statbar>
    <Statbar effect="{effects[3]}" progress="{state.stats[3]}" label="Habitability"></Statbar>
    <span class="text-success" style="cursor: pointer;" on:click={() => aboutOpen = !aboutOpen}>about.</span>
</div>

<About open="{aboutOpen}"></About>
