import { Component, Inject } from '@angular/core';
import { Chatter } from '../services/chatter';

@Component({
    selector: 'default',
    templateUrl: 'src/default/default.html'
})
export class DefaultPage {
    private messages: string[] = [];
    private chatBox: string = "";
    
    constructor(@Inject(Chatter) private chatter : Chatter) { }
    
    ngOnInit() {
        this.chatter.connect().subscribe(message => this.messages.push(message));
    }
    
    send(message: string) {
        this.chatter.send(message);
        this.chatBox = "";
    }
    
    receive() {
        console.log("hooking in");
        let localMsgs = this.messages;
        return function (message : string) { console.log("getting: " + message); localMsgs.push(message) };
    }
}