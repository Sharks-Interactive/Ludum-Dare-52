<script lang="ts">
    export let label: string;
    export let progress: number;

    export let effect: number;

    const labelClassMap = ['', 'text-success', 'text-danger'];
    const barClassMap = ['', 'bg-success', 'bg-danger'];

    const effectToIndex = (effect: number) => effect < 0 ? 2 : (effect == 0 ? 0 : 1);
</script>

<div class="statContainer">
    <h3 class="label {labelClassMap[effectToIndex(effect)]} {progress + effect < 1 ? 'boldLabel' : ''}">{label}</h3>
    <div class="progress rounded-1 w-100">
        <div class="progress-bar" role="progressbar" aria-label="{label}" 
            style="width: {effect >= 0 ? progress : progress + effect}%; transition: all 0.6s ease"></div>

        <div class="progress-bar {barClassMap[effectToIndex(effect)]}" role="progressbar" aria-label="{label}" 
            style="width: {progress + effect < 1 ? 100 : Math.abs(effect)}%; transition: all 0.6s ease"></div>
    </div>
</div>

<style>
    .boldLabel {
        font-weight: bold;
    }

    .label {
        margin: 0;

        transition: color 0.3s;
    }

    .statContainer {
        display: flex;
        flex-direction: row;

        margin: 2% 5% 2% 5%;
        gap: 5px;

        align-items: center;
        justify-content: center;
    }
</style>
