import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { RoomGuard }     from './admin/room-guard.service';
import { RoomSelectionComponent } from './admin/room-selection.component';

const clientRoutes: Routes = [
    { 
      path: '', 
      component: ChatComponent,
//      canActivate: RoomGuard
    },
//    {
//      path: 'room-select',
//      component: RoomSelectionComponent
//    }
//    { path: 'talk/:room', component: DefaultPage}
//    { path: '', component: DefaultPage }
]

export const appRoutingProviders: any[] = [ ];

export const clientSideRouting = RouterModule.forRoot(clientRoutes);