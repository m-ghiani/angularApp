/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Product } from './product.model';
import { Message } from './message.model';

describe('Service: Product', () => {
  beforeEach(() => {
    addProviders([ProductsService,HTTP_PROVIDERS]);
  });
  
});