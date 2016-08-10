import { Component } from '@angular/core';
import { Chatter } from '../services/chatter';


class chat {
    subscribe(func) { func("subscribed"); }
}

@Component({
    selector: 'default',
    templateUrl: './app/default/default.html'
})
export class DefaultPage {
    private messages: string[] = [];
    private chatBox: string = "";
    private socket: any;
    private chatter : Chatter;
    
    constructor(chat : Chatter) { this.chatter = chat; }
    
    ngOnInit() {
        this.chatter.subscribe(this.receive());
    }
    
    send(message: string) {
        this.chatter.send(message);
        this.chatBox = "";
    }
    
    receive() {
        let localMsgs = this.messages;
        return function (message : string) { localMsgs.push(message) };
    }
}