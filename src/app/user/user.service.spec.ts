/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Message } from './message.model';

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
      }));
  it('getByEmail() method testing',
    inject([UserService],
      (service: UserService) => {
        service.getByEmail("marco.mameli@gmail.com")
            .subscribe((data:Message) => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      }));
});
