import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';

import { AppComponent }      from './app.component';
import { clientSideRouting } from './app.routes';
import { Chatter }           from './services/chatter';
//import { LoginPage }         from './login/login';
import { DefaultPage }       from './default/default';

@NgModule({
  imports: [ BrowserModule, FormsModule, clientSideRouting ],
  declarations: [ AppComponent, DefaultPage ],
  providers:    [ Chatter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }