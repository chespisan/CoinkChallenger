import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { UserService } from '../services/user.service';
import { RegisterEntity } from 'src/app/domain';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  currentIndex: string;
  headerText: string;

  userData!: RegisterEntity;

  slideOpts = {
    allowTouchMove: false,
    allowSlideNext: false,
    allowSlidePrev: false,
  };

  constructor(private router: Router) {
    this.currentIndex = '0';
    this.headerText = 'NÚMERO CELULAR';
  }

  ngOnInit() {}

  goBack() {
    switch (this.currentIndex) {
      case '0':
        this.router.navigate(['/']);
        break;
      case '1':
      case '2':
        this.swiperRef?.nativeElement.swiper.slidePrev();
        break;
      default:
        break;
    }
  }

  statusChanged(index: string) {
    switch (index) {
      case '0':
        this.headerText = 'NÚMERO CELULAR';
        break;
      case '1':
        this.headerText = 'DATOS DE CUENTA';
        break;
      case '2':
        this.headerText = 'FINALIZAR';
        break;
    }
  }

  swiperSlideChanged(e: any) {
    this.currentIndex =
      this.swiperRef?.nativeElement.swiper.activeIndex.toString();
    this.statusChanged(this.currentIndex);
  }

  actionStepOne(phone: string) {
    this.userData = {
      ...this.userData,
      phone,
    };

    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  actionStepTwo(data: RegisterEntity) {
    this.userData = {
      ...this.userData,
      ...data,
    };
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  actionStepThree(terms: boolean) {
    this.userData = {
      ...this.userData,
      terms,
    };

    this.router.navigate(['/home']);
    console.log('userData', this.userData);
  }
}
