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
  
  it('Service: Producer getAll() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
  it('Service: Producer getById() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        service.getById(1)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('Service: Producer postProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        var producer = new Producer;
        producer._id=87;
        producer.name="scura";
        producer.description="Stringa di descrizione";
        service.postProducer(producer)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Producer putProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        var producer = new Producer;
        producer._id=1;
        producer.name="scura";
        producer.description="descrizione";
        service.putProducer(producer._id,producer)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Producer deleteProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        var producer = new Producer;
        producer._id=1;
        producer.name="scura";
        producer.description="descrizione";
        service.deleteProducer(producer._id)
            .subscribe(data => {
                console.log("Delete Producers " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
 
});