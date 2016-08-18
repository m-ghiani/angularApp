/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('Service: Products', () => {
  beforeEach(() => {
    addProviders([ProductsService]);
  });

  it('should ...',
    inject([ProductsService],
      (service: ProductsService) => {
        expect(service).toBeTruthy();
      }));
});
