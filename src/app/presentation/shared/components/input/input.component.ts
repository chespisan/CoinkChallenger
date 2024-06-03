import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() type?: string;

  isPassword!: boolean;
  hide: boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.type === 'password') this.isPassword = true;
  }

  showOrHidePassword() {
    this.hide = !this.hide;
    if (this.hide) {
      this.type = 'password';
      return;
    }
    this.type = 'text';
  }
}
