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

  it('getAll() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        service.getAll()
            .subscribe((data:Message) => {
                console.log("getAll result:"+data.error);
                  expect(data.error).toBe(true);
            },
            err => console.log(err));
      }));
  it('getById() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        service.getById(1)
            .subscribe((data:Message) => {
              console.log("getbyid result: "+data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('postMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machin = new Machinery;
        machin._id=15;
        
        service.postMachine(machin)
            .subscribe(data => {
                console.log("postMachine result " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('putMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machine = new Machinery;
        machine._id=15;
        
        service.putMachine(machine._id,machine)
            .subscribe(data => {
                console.log("putMachine result "+data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('deleteMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machin = new Machinery;
        machin._id=343;
        service.deleteMachine(machin._id)
            .subscribe(data => {
              // qui il problema non capisco perchè ritorni undfined
                console.log("deleteMachine result:" + data.error)
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
});
