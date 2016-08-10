import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
declare var io: any;

@Injectable()
export class Chatter {
    private chatPath : string = "chat-message";
    private socket : any;
    private subject : Subject = new Subject();
    
    constructor() {
    console.log("creating chatter");
    try {
        this.socket = io();
        this.socket.on(this.chatPath, (message) => {
            this.subject.next(message);
        });
    } catch (err) { console.error(err); }
    console.log("created chatter");
    console.log(this.subject);
    }
    
    subscribe(client : any) {
        this.subject.subscribe(client);
    }
    
    send(message: string) {
    console.log(message);
        this.socket.emit(this.chatPath, message);
    }
}