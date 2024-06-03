import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-steps',
  templateUrl: './header-steps.component.html',
  styleUrls: ['./header-steps.component.scss'],
})
export class HeaderStepsComponent implements OnInit {
  @Input() title!: string;
  @Input() text!: string;

  constructor() {}

  ngOnInit() {}
}
