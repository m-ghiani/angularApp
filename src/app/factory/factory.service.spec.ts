/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FactoryService } from './factory.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Factory } from './factory.model';
import { Message } from './message.model';

describe('Service: Factory', () => {
  beforeEach(() => {
    addProviders([FactoryService,HTTP_PROVIDERS]);
  });
});
