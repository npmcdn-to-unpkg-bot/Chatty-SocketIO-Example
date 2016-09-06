import { Injectable } from '@angular/core';

@Injectable()
export class Chatter {
    private messages: string[] = [];
    
    constructor() { }
    
    send(message: string) { }
    
    public get chatMessages() : string[] { 
        return this.messages;
    }
}