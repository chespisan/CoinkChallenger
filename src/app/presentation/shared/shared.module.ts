import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { ButtonPadComponent } from './components/button-pad/button-pad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonPadComponent,
    InputComponent,
    SelectComponent,
    HeaderComponent,
  ],
  exports: [
    ButtonComponent,
    ButtonPadComponent,
    InputComponent,
    SelectComponent,
    HeaderComponent,
    ReactiveFormsModule,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
