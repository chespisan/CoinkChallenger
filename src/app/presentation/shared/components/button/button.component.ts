import { Component, Input, OnInit } from '@angular/core';
import { TButtonColor } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: TButtonColor;
  @Input() expand!: string;

  constructor() {}

  ngOnInit() {}
}
