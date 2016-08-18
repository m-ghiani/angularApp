/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProducerService } from './producer.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Producer } from './producer.model';
describe('Service: Producer', () => {
  beforeEach(() => {
    addProviders([ProducerService,HTTP_PROVIDERS]);
  });

  var producer = new Producer;
  producer._id=59;
  producer.name="scura";
  producer.description="Stringa di descrizione";

  it('getAll() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
  it('getById() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        service.getById(1)
            .subscribe(data => {
                  expect(data.message[0]._id).toBe(1);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );
  it('postProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        
        service.postProducer(producer)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );

  it('putProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        producer.description="descrizione";
        service.putProducer(producer._id,producer)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );

  it('deleteProducer() method testing',
    inject([ProducerService],
      (service: ProducerService) => {
        service.deleteProducer(producer._id)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );
 
});