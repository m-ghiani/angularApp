/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MachineryService } from './machinery.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Machinery } from './machinery.model';
import { Message } from './message.model';

describe('Service: Machinery', () => {
  beforeEach(() => {
    addProviders([MachineryService,HTTP_PROVIDERS]);
  });
});
