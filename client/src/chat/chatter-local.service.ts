import { Injectable } from '@angular/core';
import { Chatter    } from './chatter.service';

@Injectable()
export class ChatterLocal extends Chatter {
    
    constructor() { super(); }
    
    send(message: string) {
        this.chatMessages.push(message);
    }
}