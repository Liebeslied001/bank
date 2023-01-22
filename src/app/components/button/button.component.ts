import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() textSalario!: string;
  @Input() icon!: string;
  @Input() money!: number;
}
