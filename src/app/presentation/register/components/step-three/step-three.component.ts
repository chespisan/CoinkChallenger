import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent implements OnInit {
  isCheckedTerms: boolean = false;

  @Output() action = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onChange(event: any) {
    this.isCheckedTerms = !event.isTrusted;
  }

  onClick() {
    this.action.emit(this.isCheckedTerms);
  }
}
