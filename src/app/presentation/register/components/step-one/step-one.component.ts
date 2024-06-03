import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IonInput } from '@ionic/angular';
import { RegisterEntity } from 'src/app/domain';

export interface INumberPadItems {
  id: number;
  text: string;
  params?: {
    type: string;
    status?: boolean;
  };
}

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
  boxText: string = '';
  inputModel = '';
  isCheckStepOne: boolean = false;
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  @Output() action = new EventEmitter<string>();

  numberPadItems: INumberPadItems[] = [
    {
      id: 0,
      text: '1',
    },
    {
      id: 0,
      text: '2',
    },
    {
      id: 0,
      text: '3',
    },
    {
      id: 0,
      text: '4',
    },
    {
      id: 0,
      text: '5',
    },
    {
      id: 0,
      text: '6',
    },
    {
      id: 0,
      text: '7',
    },
    {
      id: 0,
      text: '8',
    },
    {
      id: 0,
      text: '9',
    },
    {
      id: 0,
      text: '',
      params: {
        type: 'backspace',
      },
    },
    {
      id: 0,
      text: '0',
    },
    {
      id: 0,
      text: '',
      params: {
        type: 'check',
        status: false,
      },
    },
  ];

  constructor() {}

  ngOnInit() {}

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  onPressNumberPad(text: string) {
    if (this.boxText.length === 11) return;

    if (this.boxText.length === 3) {
      this.boxText = this.boxText + ' ' + text;
      return;
    }

    this.boxText = this.boxText + text;
    if (this.boxText.length === 11) this.isCheckStepOne = true;
  }

  onBackspace() {
    this.boxText = this.boxText.substring(0, this.boxText.length - 1);
    this.isCheckStepOne = false;
  }

  onCheck() {
    this.action.emit(this.boxText);
  }
}
