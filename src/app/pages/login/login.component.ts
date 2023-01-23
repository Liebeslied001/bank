import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

import { FormControl, Validators } from '@angular/forms';

interface Object {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  //adqw
  usuario: Object = {
    email: '',
    password: '',
  };
  constructor(private userService: UserService) {}
  enviarForm() {
    this.userService.login(this.usuario.email, this.usuario.password);
  }
}
