import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {
    private room: string;
    private targetUrl: string;
    
    public get currentRoom() : string { return this.room; }
    public set currentRoom(rm : string) : void { this.room = rm; }
    
    public get targetURL() : string { return this.targetUrl; }
    public set targetURL(url : string) : void { this.targetUrl = url; }
    
}