import { Component, Inject } from '@angular/core';
import { Chatter } from './services/chatter';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    directives: [  ]
})
export class AppComponent {
    private messages: string[] = [];
    private chatBox: string = "";
    private socket: any;
    private chatter : Chatter;
    
    constructor(@Inject(Chatter) chat : Chatter) { this.chatter = chat; }
    
    ngOnInit() {
        this.chatter.subscribe(this.receive());
    }
    
    send(message: string) {
    
    console.log(this.chatter);
    
        this.chatter.send(message);
        this.chatBox = "";
    }
    
    receive() {
        let localMsgs = this.messages;
        return function (message : string) { localMsgs.push(message) };
    }
}
