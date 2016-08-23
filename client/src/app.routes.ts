import { Routes, RouterModule } from '@angular/router';

//import { LoginPage }    from './login/login';
import { DefaultPage }  from './default/default';

const clientRoutes: Routes = [
    { path: '', component: DefaultPage},
//    { path: 'talk/:room', component: DefaultPage}
//      { path: '', component: DefaultPage }
]

export const appRoutingProviders: any[] = [

];

export const clientSideRouting = RouterModule.forRoot(clientRoutes);