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

  it('Service: Factory getAll() method testing',
    inject([FactoryService],
      (service: FactoryService) => {
        service.getAll()
            .subscribe((data:Message) => {
                console.log("getAll result:"+data.error);
                  expect(data.error).toBe(true);
            },
            err => console.log(err));
      }));
  it('Service: Factory getById() method testing',
    inject([FactoryService],
      (service: FactoryService) => {
        service.getById(1)
            .subscribe((data:Message) => {
              
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('Service: Factory postFactory() method testing',
    inject([FactoryService],
      (service: FactoryService) => {
        var factory = new Factory;
        factory._id=15;
        factory.id_producer=3;
        factory.gps.type="Point";
        factory.gps.coordinates=[39.969857,18.124120]
        factory.address="indirizzo";
        service.postFactory(factory)
            .subscribe(data => {
                console.log("postFactory result " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Factory putFactory() method testing',
    inject([FactoryService],
      (service: FactoryService) => {
        var factory = new Factory;
        factory._id=15;
        factory.id_producer=3;
        factory.gps.type="Point";
        factory.gps.coordinates=[39.969857,18.124120]
        factory.address="address";
        service.putFactory(factory._id,factory)
            .subscribe(data => {
                console.log("putFactory result "+data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Factory delteFactory() method testing',
    inject([FactoryService],
      (service: FactoryService) => {
       var factory = new Factory;
        factory._id=15;
        factory.id_producer=3;
        factory.gps.type="Point";
        factory.gps.coordinates=[39.969857,18.124120]
        factory.address="indirizzo";
        service.deleteFactory(factory._id)
            .subscribe(data => {
              // qui il problema non capisco perchè ritorni undfined
                console.log("deleteFactory result:" + data.error)
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
});
