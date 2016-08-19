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

  it('Service: Machinery getAll() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        service.getAll()
            .subscribe((data:Message) => {
                console.log("Service: Machinery getAll() method testing result:"+data.error);
                  expect(data.error).toBe(true);
            },
            err => console.log(err));
      }));
  it('Service: Machinery getById() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        service.getById(1)
            .subscribe((data:Message) => {
              console.log("Service: Machinery getById() method testing result: "+data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('Service: Machinery postMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machine = new Machinery;
        machine._id=15;
        machine.gps.type="Point";
        machine.gps.coordinates=[39.969857,18.124120]
        machine.id_prod=[3,4];
        machine.type=["bevande fredde"];
        machine.state="on"
        service.postMachine(machine)
            .subscribe(data => {
                console.log("Service: Machinery postMachine() method testing result " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Machinery putMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machine = new Machinery;
        machine._id=15;
        machine.gps.type="Point";
        machine.gps.coordinates=[39.969857,18.124120]
        machine.id_prod=[3,4];
        machine.type=["bevande fredde"];
        machine.state="off"
        service.putMachine(machine._id,machine)
            .subscribe(data => {
                console.log("Service: Machinery putMachine() method testing result "+data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Machinery deleteMachine() method testing',
    inject([MachineryService],
      (service: MachineryService) => {
        var machine = new Machinery;
        machine._id=15;
        machine.gps.type="Point";
        machine.gps.coordinates=[39.969857,18.124120]
        machine.id_prod=[3,4];
        machine.type=["bevande fredde"];
        machine.state="on"
        service.deleteMachine(machine._id)
            .subscribe(data => {
              // qui il problema non capisco perchè ritorni undfined
                console.log("Service: Machinery deleteMachine() method testing result:" + data.error)
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
});
