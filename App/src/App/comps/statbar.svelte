<script lang="ts">
    export let label: string;
    export let progress: number;

    export let effect: number;

    const classMap = ['', 'text-success', 'text-danger'];
</script>

<div class="statContainer">
    <h3 class="label {classMap[effect == -1 ? 2 : effect]}">{label}</h3>
    <div class="progress rounded-1 w-100">
        <div class="progress-bar" role="progressbar" aria-label="{label}" style="width: {progress}%"></div>
    </div>
</div>

<style>
    .label {
        margin: 0;
    }

    .statContainer {
        display: flex;
        flex-direction: row;

        margin: 5%;
        gap: 5px;

        align-items: center;
        justify-content: center;
    }
</style>
