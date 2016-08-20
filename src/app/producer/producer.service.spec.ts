/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProducerService } from './producer.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Producer } from './producer.model';
import { Message } from './message.model';

describe('Service: Producer', () => {
  beforeEach(() => {
    addProviders([ProducerService,HTTP_PROVIDERS]);
  });
 
});