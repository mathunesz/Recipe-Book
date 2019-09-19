import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes : Routes = [
    { path: 'recipes', canActivateChild: [AuthGuardService], component: RecipesComponent, children: [
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]},
    { path: '', redirectTo : '/recipes', pathMatch: 'full'}, 
    { path: 'shopping-list', canActivate: [AuthGuardService], component: ShoppingListComponent},
    
    { path: 'error403', component: ErrorPageComponent, data: {message: 'Erro 403: Você não tem permissão para acessar esta página! '}},
    { path: 'error404', component: ErrorPageComponent, data: {message: 'Erro 404: Página não encontrada!'}},
    { path: '**', redirectTo: '/error404' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}