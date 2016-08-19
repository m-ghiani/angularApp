/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Message } from './message.model';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([UserService,HTTP_PROVIDERS]);
  });

  it('Service: User getAll() method testing',
    inject([UserService],
      (service: UserService) => {
        service.getAll()
            .subscribe(data => {
                  console.log("Service: User getAll() method testing result: " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      }));
  it('Service: User getByEmail() method testing',
    inject([UserService],
      (service: UserService) => {
        service.getByEmail("marco.mameli@gmail.com")
            .subscribe((data:Message) => {
                  console.log("Service: User getByEmail() method testing result: " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      }));
});
