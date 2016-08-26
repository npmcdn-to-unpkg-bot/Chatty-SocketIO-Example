import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
declare var io: any;

@Injectable()
export class Chatter {
    private chatPath : string = "chat-message";
    private socket   : any;
    private subject  : Subject<string>;
    
    constructor() {
        this.subject = new Subject<string>();
        let localSubject : Subject<string> = this.subject;
        console.log(this.subject);
        try {
            this.socket = io();
            this.socket.on(
              this.chatPath, 
              (message:string) => { 
                console.info(message);
                console.info(localSubject);
                localSubject.next(message);
              });
        } catch (err:any) { console.error(err); }
    }
    
    connect() : Observable<string> {
        return this.subject;
    }
    
    send(message: string) : void {
        this.socket.emit(this.chatPath, message);
    }
}