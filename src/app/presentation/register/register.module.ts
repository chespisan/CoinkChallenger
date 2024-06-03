import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from '../shared/shared.module';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { HeaderStepsComponent } from './components/header-steps/header-steps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    RegisterPage,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    HeaderStepsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterPageModule {}
