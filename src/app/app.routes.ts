import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile-component/user-profile-component.component'

export const routes: Routes = [
    { path: 'profile/:userId', component: UserProfileComponent }
];
