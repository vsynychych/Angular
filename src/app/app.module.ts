import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {CarsComponent} from './components/cars/cars.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
