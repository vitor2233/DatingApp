import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    /* Rotas, exemplo: aaa.com/home cai no HomeComponent */
    { path: '', component: HomeComponent },

    /* Rota para proteger as outras */
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'matches', component: MemberListComponent },
            { path: 'mensagens', component: MessagesComponent },
            { path: 'pessoas', component: ListsComponent },
        ]
    },

    /*Se não encontrar nada Redirecionar para home */
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
