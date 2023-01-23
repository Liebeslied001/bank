import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  enviarForm() {
    if (this.usuario.email && this.usuario.password) {

      this.userService.login(this.usuario.email, this.usuario.password);
    }
  }

  redirecToSignup = () => {
    this.router.navigate(['/signup'])
  }
}
