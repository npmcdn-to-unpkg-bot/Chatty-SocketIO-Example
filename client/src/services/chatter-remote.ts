import { Injectable, NgZone, Inject } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
import { Chatter    } from './chatter';
declare var io: any;

@Injectable()
export class ChatterRemote extends Chatter {
    private chatPath : string = "chat-message";
    private socket : any;
    
    constructor(@Inject(NgZone) private zone: NgZone) {
        super();
        try {
            this.socket = io();
            this.socket.on(this.chatPath, (message:string) => {
              this.messageRecieved(message);
            });
        } catch (err) { console.error(err); }
    }
    
    messageRecieved(message:string) {
        this.zone.run( () => { this.chatMessages.push(message); } );
    }

    send(message: string) {
        this.socket.emit(this.chatPath, message);
    }
}