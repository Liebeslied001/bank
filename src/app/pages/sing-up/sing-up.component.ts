import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/user.model';

interface Object {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent {
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
