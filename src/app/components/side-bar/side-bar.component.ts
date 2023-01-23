import { Component, Input } from '@angular/core';
import { NavMainItemModel } from 'src/app/models/header.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() active: string = location.pathname;

  public menu: NavMainItemModel[] = [
    {
      name: '/categories',
      text: 'Categories',
      icon: 'fa-solid fa-house-chimney-window',
    },
    {
      name: '/transactions',
      text: 'Transactions',
      icon: 'fa-regular fa-rectangle-list',
    },
    {
      name: '/budgets',
      text: 'Budgets',
      icon: 'fa-solid fa-circle-nodes',
    },
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  get user(): User {
    return this.userService.user;
  }
  handleClickLogout() {
    this.userService.logout()
    this.router.navigate([ '/login' ])
  }
}
