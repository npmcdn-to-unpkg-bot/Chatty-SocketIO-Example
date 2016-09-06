import { Injectable, NgZone, Inject } from '@angular/core';
import { Chatter    } from './chatter.service';
declare var io: any;

@Injectable()
export class ChatterRemote extends Chatter {
    private chatPath : string = "chat-message";
    private socket : any;
    private zone: NgZone;
    
    constructor(@Inject(NgZone) localZone: NgZone) {
        super();
        
        this.zone = localZone;
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