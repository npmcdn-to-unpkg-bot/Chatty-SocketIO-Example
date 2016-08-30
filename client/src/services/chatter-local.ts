import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';
import { Chatter    } from './chatter';

export class ChatterLocal extends Chatter {
    private subject : Subject = new Subject();
    
    constructor() { }
    
    connect() {
        return this.subject;
    }
    
    send(message: string) {
        this.subject.next(message);
    }
}