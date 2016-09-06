import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';

import { AppComponent }      from './app.component';
import { clientSideRouting } from './app.routes';
import { Chatter }           from './chat/chatter.service';
import { ChatterLocal }      from './chat/chatter-local.service';
import { ChatterRemote }     from './chat/chatter-remote.service';
import { ChatComponent }     from './chat/chat.component';
import { RoomService }       from './admin/room.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, clientSideRouting ],
  declarations: [ AppComponent, ChatComponent ],
  providers:    [ 
    { provide: Chatter, useClass: ChatterRemote },
    { provide: RoomService, useClass: RoomService }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }