import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-details.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    /* Rotas, exemplo: aaa.com/home cai no HomeComponent */
    { path: '', component: HomeComponent },

    /* Rota para proteger as outras */
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'matches', component: MemberListComponent, resolve: { users: MemberListResolver} },
            { path: 'matches/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            { path: 'mensagens', component: MessagesComponent },
            { path: 'pessoas', component: ListsComponent },
        ]
    },

    /*Se não encontrar nada Redirecionar para home */
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
