import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SkillsBoardComponent } from './components/skills-board/skills-board.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent}, // Voir pour peut-etre changer le component home occasionnelement
  { path: 'skills', component: SkillsBoardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  // WILDCARD ROUTE
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
