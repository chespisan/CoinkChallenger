import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { ITypeOptions } from '../shared/interfaces/global.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getTypeDocuments() {
    const options = {
      url: 'https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106',
    };

    const { data }: HttpResponse = await CapacitorHttp.get(options);
    return data;
  }

  async getGenders() {
    return new Promise<ITypeOptions[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, description: 'Masculino' },
          { id: 2, description: 'Femenino' },
        ]);
      }, 500);
    });
  }
}
