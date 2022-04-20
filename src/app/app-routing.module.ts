import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: '', redirectTo: '/profiles', pathMatch: 'full'},
  {path: 'profiles', component: ProfilesComponent  },
  {path: 'repository', component: RepositoryComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
