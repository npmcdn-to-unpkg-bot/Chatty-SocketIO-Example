import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
import { Chatter    } from './chatter';

@Injectable()
export class ChatterLocal extends Chatter {
    
    constructor() { super(); }
    
    send(message: string) {
        this.chatMessages.push(message);
    }
}