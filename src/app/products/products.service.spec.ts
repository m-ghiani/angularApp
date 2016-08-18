/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Product } from './product.model';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([ProductsService,HTTP_PROVIDERS]);
  });

  it('getAll() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
  it('getById() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getById(1)
            .subscribe(data => {
                  console.log(JSON.stringify(data));
                  expect(data.message[0].id).toBe(1);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );
});