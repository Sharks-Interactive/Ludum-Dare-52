import { Card } from "../Card";
import type { GameState } from "../GameState";

export class StartOverCard extends Card {
    id: string = 'start-over'; 
    rarity: number = 0;

    title: string = 'up to you, my friend';
    description: string = `
        Did you think I was gonna make it start over for you automatically? During a game jam? In THIS economy?? You'll
        have to refresh/close and reopen the website/app. But while you are here I have some things I'd like to
        say, if you'll have me. I'd like to give a big thanks to my friends. Without them I wouldn't still be here.
        And I'm glad I am, because I get to do stupid things like pulling all nighters and writing hidden messages at
        03:30 whilist listening to music. I know I have hard times ahead and I don't want to keep fighting through
        them all. I'm exhausted, with life. But I will keep fighting because of my friends. Because you've told me
        you need me as much as I need you. I love all of you. F, you have had the greatest impact on me. I love
        you so much, platonic soulmate <3.
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['...', '...'];
    footer: string = 'Sorry to dissapoint';


    requirementsFullfilled(state: GameState): boolean { return true; }
}
