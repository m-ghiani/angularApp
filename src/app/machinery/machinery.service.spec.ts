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
  it('  getAll() method testing',
    inject([ MachineryService],
      ( service:MachineryService) => {
        service.getAll()
            .subscribe(data => {
                  console.log("getAllMachines result:" + data);
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "state": "on",
      "id_prod": [
        5,
        6,
        7,
        8
      ],
      "gps": {
        "coordinates": [
          40.335319,
          18.114937
        ],
        "type": "Point"
      },
      "type": [
        "bevande calde"
      ]
    },
    {
      "_id": 2,
      "state": "on",
      "id_prod": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "gps": {
        "coordinates": [
          40.018541,
          18.157327
        ],
        "type": "Point"
      },
      "type": [
        "bevande calde",
        "bevande fredde"
      ]
    },
    {
      "_id": 3,
      "state": "on",
      "id_prod": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      "gps": {
        "coordinates": [
          40.335319,
          18.114937
        ],
        "type": "Point"
      },
      "type": [
        "bevande calde",
        "bevande fredde",
        "merendine"
      ]
    },
    {
      "_id": 4,
      "state": "on",
      "id_prod": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      "gps": {
        "coordinates": [
          39.973584,
          18.121793
        ],
        "type": "Point"
      },
      "type": [
        "bevande calde",
        "bevande fredde",
        "merendine"
      ]
    }
  ]
});
            },
            err => console.log(err));
      }));
  it('  getById() method testing',
    inject([ MachineryService],
      ( service:MachineryService) => {
        service.getById(1)
            .subscribe(data => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "state": "on",
      "id_prod": [
        5,
        6,
        7,
        8
      ],
      "gps": {
        "coordinates": [
          40.335319,
          18.114937
        ],
        "type": "Point"
      },
      "type": [
        "bevande calde"
      ]
    }
  ]
});
            },
            err => console.log(err));
      })
  );
  it('  postMachine() method testing',
    inject([ MachineryService],
      ( service:MachineryService) => {
        var machine = new Machinery();
        machine._id=11;
        machine.state="on";
        machine.id_prod=[5,6,7,8];
        machine.gps.type="Point";
        machine.gps.coordinates=[40.335319,18.114937];
        machine.type = ["bevande calde"];
        service.postMachine(machine)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data added"});
            },
            err => console.log(err));
      })
  );

  it('  putMachine() method testing',
    inject([ MachineryService],
      ( service:MachineryService) => {
        var machine = new Machinery();
        machine._id=11;
        machine.state="off";
        machine.id_prod=[5,6,7];
        machine.gps.type="Point";
        machine.gps.coordinates=[40.335319,18.114937];
        machine.type = ["bevande calde"];service.putMachine(machine._id,machine)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data Modified"});
            },
            err => console.log(err));
      })
  );

  it('deleteMachine() method testing',
    inject([ MachineryService],
      ( service:MachineryService) => {
        var machine = new Machinery();
        machine._id=11;
        service.deleteMachine(machine._id)
            .subscribe(data => {   
                  expect(data).toEqual({ "error" : false, "message" :  null} || { });            
                  
            },
            err => console.log(err));
      })
  );
});
