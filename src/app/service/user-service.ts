import { Injectable } from '@angular/core';
import { userModel } from '../models/user-model';


@Injectable()
export class UserService {
  private user = userModel;

  setUser(user) {
    console.log('entra');
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}