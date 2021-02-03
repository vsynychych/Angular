import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Lesson5_Forms_Validators';
  users: User [] = [];

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  age = new FormControl('', [Validators.required, Validators.min(16), Validators.max(99)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  myGroup = new FormGroup({
      name: this.name,
      age: this.age,
      email: this.email
    }
  );

  action(): void {
    console.log(this.myGroup);
  }

  addUser(): void {
    this.users.push({
        name: this.name.value,
        age: this.age.value,
        email: this.email.value
      }
    );
  }
}

class User {
  name: string;
  age: number;
  email: string;
}
