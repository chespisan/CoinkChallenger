import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TButtonColor } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Input() expand!: string;
  @Input() type?: string;
  @Input() typeName?: string;
  @Input() size?: string;
  @Input() fill?: string = 'solid';
  @Input() shape?: string = 'round';
  @Input() disabled?: boolean;
  @Input() callbackFunction!: any;
  @Output() onAction = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.onAction.emit();
  }
}
