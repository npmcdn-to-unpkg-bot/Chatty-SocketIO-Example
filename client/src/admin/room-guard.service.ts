import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

import { RoomService } from './room.service';
         
@Injectable()
export class RoomGuard implements CanActivate {
    constructor(@Inject(RoomService) private roomService: RoomService,
                @Inject(Router) private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //If we have a good current room, procees
        if (this.roomService.currentRoom) {
            return true;
        }
        
        this.roomService.targetURL = state.url;
        this.router.navigate(['/room-select']);
        return false;
    }
}