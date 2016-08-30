import { Component, Inject, NgZone } from '@angular/core';
import { Chatter } from '../services/chatter';

@Component({
    selector: 'default',
    templateUrl: 'src/default/default.html'
})
export class DefaultPage {
    private messages: string[] = [];
    private chatBox: string = "";
    
    constructor(@Inject(Chatter)private chatter : Chatter, 
                @Inject(NgZone)private zone: NgZone) { }
    
    ngOnInit() {
        this.chatter.connect().subscribe(
          (message:string) => {
            this.receive(message);
          });
    }
    
    send(message: string) {
        this.chatter.send(message);
        this.chatBox = "";
        return true;
    }
    
    receive(message: string) {
        this.zone.run(() => { 
          console.log("Message recieved: " + message);
          this.messages.push(message); 
        });
    }
}