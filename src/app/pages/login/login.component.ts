import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
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
  nombre: string = '';
  contra: string = '';

  usuario: Object = {
    email: '',
    password: '',
  };
  constructor(private userService: UserService) {}
  enviarForm() {
    this.userService.login(this.usuario.email, this.usuario.password);
  }
}
