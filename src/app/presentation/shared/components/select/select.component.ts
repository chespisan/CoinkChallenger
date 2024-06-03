import { Component, Input, OnInit } from '@angular/core';
import { ITypeOptions } from '../../interfaces/global.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() options: ITypeOptions[] = [];
  foods = [
    {
      id: 1,
      name: 'Apples',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Cupcakes',
      type: 'dessert',
    },
  ];

  constructor() {}

  ngOnInit() {}

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
}
