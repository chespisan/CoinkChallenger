import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterEntity } from 'src/app/domain';
import { UserService } from 'src/app/presentation/services/user.service';
import { ITypeOptions } from 'src/app/presentation/shared/interfaces/global.interface';
import {
  confirmEmailValidator,
  confirmPasswordValidator,
} from 'src/app/presentation/shared/utils/confirmPassword.validator';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  @Output() action = new EventEmitter();

  documentTypes: ITypeOptions[] = [];
  gendersOptions: ITypeOptions[] = [];
  form = new FormGroup(
    {
      typeDocument: new FormControl('', [Validators.required]),
      numberDocument: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      expeditionDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      emailConfirmation: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    { validators: [confirmEmailValidator, confirmPasswordValidator] }
  );

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getTypeDocuments();
    this.getGenders();
  }

  async getTypeDocuments(): Promise<void> {
    let data = await this.userService.getTypeDocuments();
    this.documentTypes = data;
  }

  async getGenders(): Promise<void> {
    let data = await this.userService.getGenders();
    this.gendersOptions = data;
  }

  submit() {
    if (this.form.invalid) return;
    this.action.emit(this.form.value);
  }
}
