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

  it('  getAll() method testing',
    inject([ FactoryService],
      ( service:FactoryService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "address": "Contrada La Francesca, 85028 Rionero In Vulture (PZ)",
      "id_producer": 1,
      "gps": {
        "coordinates": [
          40.893138,
          15.669653
        ],
        "type": "Point"
      }
    },
    {
      "_id": 2,
      "address": "Via Nazionale, 2, Valdisotto (SO)",
      "id_producer": 2,
      "gps": {
        "coordinates": [
          46.423546,
          10.35493
        ],
        "type": "Point"
      }
    },
    {
      "_id": 3,
      "address": "Via Maria Cristina, 47, 10025 Pino Torinese (TO)",
      "id_producer": 3,
      "gps": {
        "coordinates": [
          45.049677,
          7.7741
        ],
        "type": "Point"
      }
    },
    {
      "_id": 4,
      "address": "Strada Statale N. 16, 73100 Lecce (LE)",
      "id_producer": 4,
      "gps": {
        "coordinates": [
          40.366109,
          18.162734
        ],
        "type": "Point"
      }
    },
    {
      "_id": 5,
      "address": "Via C. Imbonati, 18 - 20159 Milano (MI)",
      "id_producer": 5,
      "gps": {
        "coordinates": [
          45.500495,
          9.183367
        ],
        "type": "Point"
      }
    },
    {
      "_id": 6,
      "address": "3 Parkway N, Deerfield, IL 60015, Stati Uniti",
      "id_producer": 6,
      "gps": {
        "coordinates": [
          42.163563,
          -87.879585
        ],
        "type": "Point"
      }
    },
    {
      "_id": 7,
      "address": "Via Farini, 41 - 20159 Milano (MI)",
      "id_producer": 7,
      "gps": {
        "coordinates": [
          45.49036,
          9.183368
        ],
        "type": "Point"
      }
    },
    {
      "_id": 8,
      "address": "Via Pacinotti, 4 - 42049 S.Ilario d'Enza (RE)",
      "id_producer": 8,
      "gps": {
        "coordinates": [
          44.752589,
          10.480369
        ],
        "type": "Point"
      }
    },
    {
      "_id": 9,
      "address": "Via Angelo Scotti, 2 - 27100 Pavia (PV)",
      "id_producer": 9,
      "gps": {
        "coordinates": [
          45.186944,
          9.199056
        ],
        "type": "Point"
      }
    },
    {
      "_id": 10,
      "address": "SS Pontina Km 27,650, 00040 - Pomezia (RM)",
      "id_producer": 10,
      "gps": {
        "coordinates": [
          41.689744,
          12.485442
        ],
        "type": "Point"
      }
    }
  ]
});
            },
            err => console.log(err));
      })
  );
  it('  postFactory() method testing',
    inject([ FactoryService],
      ( service:FactoryService) => {
        var factory = new Factory();
        factory._id=11;
        factory.address="Contrada La Francesca, 85028 Rionero In Vulture (PZ)";
        factory.id_producer = 1
        factory.gps.type="Point";
        factory.gps.coordinates=[40.335319,18.114937];
        service.postFactory(factory)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data added"});
            },
            err => console.log(err));
      })
  );

  it('  putFactory() method testing',
    inject([ FactoryService],
      ( service:FactoryService) => {
        var factory = new Factory();
        factory._id=11;
        factory.address="Contrada La Valentina, 85028 Rionero In Vulture (PZ)";
        factory.id_producer = 1
        factory.gps.type="Point";
        factory.gps.coordinates=[40.335319,18.114937];
        service.putFactory(factory._id,factory)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data Modified"});
            },
            err => console.log(err));
      })
  );

  it('deleteFactory() method testing',
    inject([ FactoryService],
      ( service:FactoryService) => {
        var machine = new Factory();
        machine._id=11;
        service.deleteFactory(machine._id)
            .subscribe(data => {   
                  expect(data).toEqual({ });            
                  
            },
            err => console.log(err));
      })
  );
});
