import { Component, 
         Inject, 
         NgZone }   from '@angular/core';
import { Chatter }  from './chatter.service';

@Component({
    selector: 'chat',
    styleUrls: ['./src/chat/chat.component.css'],
    templateUrl: './src/chat/chat.component.html'
})
export class ChatComponent {
    const private charCodeType: string = "number";
          private chatBox: string      = "";
    const private enterKey: number     = 13;
    
    constructor(@Inject(Chatter)private chatter: Chatter, 
                @Inject(NgZone)private zone: NgZone) { }
    
    onSend(message: string) {
        this.chatter.send(message);
        this.chatBox = "";
    }
    
    onKeyUp(event:any) {
        let charCode:number = (typeof event.which === this.charCodeType) ? 
                                            event.which : event.keyCode;
        if (charCode == this.enterKey) {
          this.onSend(this.chatBox);
        }
    }   
}