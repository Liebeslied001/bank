import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, Validators } from '@angular/forms';

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
  usuario: Object = {
    email: '',
    password: '',
  };
  constructor(private userService: UserService) {}
  enviarForm() {
    this.userService.login(this.usuario.email, this.usuario.password);
  }
}
