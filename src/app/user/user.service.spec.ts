/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([UserService,HTTP_PROVIDERS]);
  });

  it('getAll() method testing',
    inject([UserService],
      (service: UserService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
  it('getByEmail() method testing',
    inject([UserService],
      (service: UserService) => {
        service.getByEmail("marco.mameli@gmail.com")
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
});
