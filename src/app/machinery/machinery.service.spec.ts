/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MachineryService } from './machinery.service';

describe('Service: Machinery', () => {
  beforeEach(() => {
    addProviders([MachineryService]);
  });

  it('should ...',
    inject([MachineryService],
      (service: MachineryService) => {
        expect(service).toBeTruthy();
      }));
});
