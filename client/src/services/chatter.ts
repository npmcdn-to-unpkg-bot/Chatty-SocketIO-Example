import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

@Injectable()
export class Chatter {
    private messages: string[] = [];
    
    constructor() { }
    
    send(message: string) { }
    
    public get chatMessages() : string[] { 
        return this.messages;
    }
}