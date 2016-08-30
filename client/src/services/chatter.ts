import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

export class Chatter {
    private subject : Subject = new Subject();
    
    constructor() { }
    
    connect() {
        return this.subject;
    }
    
    send(message: string) { }
}