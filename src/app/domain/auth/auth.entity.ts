export interface RegisterEntity {
  phone: number | string;
  documentType: string;
  documentNumber: number;
  documentDateExpired: number;
  birthday: string;
  gender: string;
  email: string;
  emailConfirmation: string;
  pin: number;
  pinConfirm: string;
  terms: boolean;
}

export interface LoginEntity {
  email: string;
  password: string;
}

export interface UserEntity {
  documentType: string;
  documentNumber: number;
  documentDateExpired: number;
  birthday: string;
  gender: string;
  email: string;
  terms: boolean;
}
