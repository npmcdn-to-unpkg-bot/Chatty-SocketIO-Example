import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { AppComponent } from './app/app';
import { Chatter } from './app/services/chatter';

//let chat : Chatter = new Chatter();

bootstrap(AppComponent, [
    provide(Chatter, {useClass: Chatter}),
]);