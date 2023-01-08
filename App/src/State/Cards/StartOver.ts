import { Card } from "../Card";
import type { GameState } from "../GameState";

export class EmptyCard extends Card {
    id: string = 'start-over'; 
    rarity: number = 0;

    title: string = 'up to you, my friend';
    description: string = `
        Did you think I was gonna make it start over for you automatically? During a game jam? In THIS economy?? You'll
        have to refresh/close and reopen the website/app. But while you are here I have some things I'd like to
        say, if you'll have me. I have to take a moment to mention my closest friend,
        someone who is effectively my sister at this point, you know who you are. I love you so much and while I might
        not be able to promise I will always be here for you I can promise I will always fight for you. And that I 
        will love you no matter what, regardless of what you do, I know from experience. You've really given me 
        something to live for at a tough moment in my life. I've told you this before but you are the only person in 
        my life that truly feels 'real' to me. Whatever that is supposed to mean. Please keep being yourself and 
        pursuing happiness. Please keep fighting. I don't know how I can ask that of you when uou are so so much 
        stronger than me. I really mean it. I could never fight through have the stuff you have, I could never 
        be half as brave as you were and continue to be. So I don't know where I think I got the right to ask 
        you this but keep fighting, alright? \n
        I say that but I don't know if I can keep fighting. At least, not without you. \n
        But that goes for you too, reader. \n
        Goodnight. Good luck on your Ludum Dare entries \n
        Thank you for reading, getting to know me
    `;

    /** If the card has special options, besides just yes/no */
    options: string[] = ['...', '...'];
    footer: string = 'Sorry to dissapoint';


    requirementsFullfilled(state: GameState): boolean { return true; }
}
