import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavMainItemModel } from 'src/app/models/header.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() active: string = window.location.pathname

  public menu: NavMainItemModel[] = [
    {
      name: 'category',
      text: 'Categories',
      icon: 'fa-solid fa-house-chimney-window',
      routePath: '/categories'
    },
    {
      name: 'transaction',
      text: 'Transactions',
      icon: 'fa-regular fa-rectangle-list',
      routePath: '/transaction'
    },
    {
      name: 'budget',
      text: 'Budgets',
      icon: 'fa-solid fa-circle-nodes',
      routePath: '/budgets'
    }
  ]

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
