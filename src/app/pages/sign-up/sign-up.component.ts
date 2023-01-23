import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/user.model';

interface Object {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //asda
  usuario: UserRegister = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  };
  constructor(private userService: UserService) {}
  enviarForm() {
    const userRegister: any = {
      email: this.usuario.email,
      password: this.usuario.password,
      first_name: this.usuario.firstName,
      last_name: this.usuario.lastName,
      phone: this.usuario.phone,
    };
    this.userService.signUp(userRegister);
  }
}
