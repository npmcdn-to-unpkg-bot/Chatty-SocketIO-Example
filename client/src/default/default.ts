import { Component, 
         Inject, 
         NgZone }   from '@angular/core';
import { Chatter }  from '../services/chatter';

@Component({
    selector: 'default',
    templateUrl: 'src/default/default.html'
})
export class DefaultPage {
    private chatBox: string = "";
    
    constructor(@Inject(Chatter)private chatter : Chatter, 
                @Inject(NgZone)private zone: NgZone) { }
    
    onSend(message: string) {
        this.chatter.send(message);
        this.chatBox = "";
        return true;
    }
    
    onKeyUp(event:any) {
        var charCode = (typeof event.which === "number") ? 
                               event.which : event.keyCode;
        var enterKey = 13;
        if (charCode == enterKey) {
          this.onSend(this.chatBox);
      }
    }   
}