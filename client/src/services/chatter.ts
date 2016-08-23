import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
declare var io: any;

@Injectable()
export class Chatter {
    private chatPath : string = "chat-message";
    private socket : any;
    private subject : Subject = new Subject();
    
    constructor() {
        try {
            this.socket = io();
            this.socket.on(this.chatPath, (message) => {
                this.subject.next(message);
            });
        } catch (err) { console.error(err); }
    }
    
    connect() {
        return this.subject;
    }
    
    send(message: string) {
        this.socket.emit(this.chatPath, message);
    }
}