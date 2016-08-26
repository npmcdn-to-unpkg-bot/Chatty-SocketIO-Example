import { Component } from '@angular/core';
import { Chatter }   from '../services/chatter';

@Component({
    selector:    'default',
    templateUrl: 'src/default/default.html'
})
export class DefaultPage {
    private messages: string[] = [];
    private chatBox:  string   = "";
    
    constructor(private chatter : Chatter) { }
    
    ngOnInit(): void {
        let localMessages:string[] = this.messages;
        this.chatter.connect().subscribe(
          (message:string) => { localMessages.push(message); }
        );
    }
    
    send(message: string): void {
        this.chatter.send(message);
        this.chatBox = "";
    }
    
    messageRecieved(message:string):void {
        this.messages.push(message);
    }
}