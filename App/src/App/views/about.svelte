<script lang="ts">
    type select = 'docs' | 'abt';

    export let open: boolean;
    let selection: select = 'docs';
</script>

{#if open}
<div class="abModal">
    <div>
        <div class="d-flex" style="width: 100%; justify-content: center;">
            <h5 on:click="{() => selection = 'abt'}" 
                class="w-100 text-{selection == 'abt' ? 'success' : 'secondary'}">about</h5>
            <h5 on:click="{() => selection = 'docs'}" 
                class="w-100 text-{selection == 'docs' ? 'success' : 'secondary'}">how to play</h5>
            <button type="button" class="btn-close" on:click="{() => open = false}"></button>
        </div>
        <div>
            {#if selection == 'abt'}
                <br />
                this, is horsepower. It is set in my little universe. I'm glad you have taken the time to play it.
                I can't tell you how thankful I am I get to sit here listening to awesome music and
                making little games at ungodly hours of the morning after working for hours straight.
                <br/>
                I am particularly
                proud of this little project. I know it is stupid and I didn't have time for a win/lose condition,
                (maybe if I worked on that instead of this...) but it is really a piece of me and I really enjoyed
                working on it for once. I truly had a blast - for the first time since LD47.
                <br />
                <br />
                Credits.
                <br />
                This 'game' was made for Ludum Dare 52, by me, Owen Silva.
                I work alone and made this game alone, but it is still the product of multiple people.
                Thank you, Fiona Thornton, for giving your time to help me brainstorm ideas not
                just this Ludum Dare, but for the past 5, too. Thank you for giving me ideas when I text you out
                of the blue asking how something should work or look or when I need to come up with a name.
                And a special thank you for your amazing drawings. They are my favourite part of every LD.
                <br />
                <br />
                I love you, bestie &lt;3
            {:else}
                horsepower is a game about making decisions, in the same as sort the court (also a LD game!) and reigns.
                Every decision you make impacts your stats, displayed on the bottom of the screen. Each decision also
                impacts what events and opportunities you will have in the future.
                <br />
                <br />
                Playing.
                <br />
                this is intended to be a mobile game, for best results open your browsers devtools and enable the phone emulator.
                yeah, yeah I know its not ideal. The game will work on normal desktop but just.. out of proportion and with werid
                hover effects.
                <br />
                <br />
                Winning.
                <br />
                There is a win condition or two, but it is really really incredibly easy to softlock yourself. So just go until your
                happy, refresh and play again if you want and that is about it. Have fun!
            {/if}
        </div>
    </div>
</div>
{/if}

<style>
    .abModal {
        position: fixed;

        width: 100%;
        height: 100%;

        z-index: 100;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        padding: 5%;

        background-color: #181d22;
    }
</style>
