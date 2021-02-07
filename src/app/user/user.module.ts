import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserService} from '../services';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {FullUserComponent} from './full-user/full-user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService],
  exports: [HttpClientModule]
})
export class UserModule {
}
