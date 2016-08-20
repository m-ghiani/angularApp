/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Product } from './product.model';
import { Message } from './message.model';

describe('Service: Product', () => {
  beforeEach(() => {
    addProviders([ProductsService,HTTP_PROVIDERS]);
  });

  it('Service: Product getAll() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getAll()
            .subscribe((data:Message) => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "name": "Cocacola",
      "price": 0.8,
      "description": "Formato di vendita: 330 ml, Porzione: 200 g, Zuccheri: 21.2 g Grassi: 0 g, Sale: 0 g",
      "ingredients": "acqua, zucchero, anidride carbonica, colorante,E 150 d, acidificante acido fosforico, aromi naturali (inclusa caffeina)",
      "category": "bevande fredde",
      "photo": null,
      "producer": "1",
      "factory": "1",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 2,
      "name": "Sprite",
      "price": 0.8,
      "description": "Formato di vendita: 330 ml, Porzione: 200 g, Zuccheri: 18.2 g, Grassi: 0 g, Sale: 0 g",
      "ingredients": "acqua, zucchero, anidride carbonica, acidificante acido citrico, aromi, correttore di acidità citrato trisodico",
      "category": "bevande fredde",
      "photo": null,
      "producer": "1",
      "factory": "1",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 3,
      "name": "Acqua naturale",
      "price": 0.5,
      "description": "Formato di vendita: 500 ml in bottiglia PET, Sorgente: Valdisotto (SO), Regione: Lombardia, Grado di mineralizzazione: oligominerale",
      "ingredients": null,
      "category": "bevande fredde",
      "photo": null,
      "producer": "2",
      "factory": "2",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 4,
      "name": "Thè freddo al limone",
      "price": 0.8,
      "description": "Formato di vendita: 200 ml",
      "ingredients": "infuso di thè(acqua, thè), zucchero, destrosio, succo di limone in polvere reidratato(0,2%), esaltatore di sapidità(acido ascorbico), aromi",
      "category": "bevande fredde",
      "photo": null,
      "producer": "3",
      "factory": "3",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 5,
      "name": "Sprite sca",
      "price": 0.99,
      "description": "descrizione",
      "ingredients": "Ingredienti del prodotto",
      "category": "Categoria",
      "photo": "ciao",
      "producer": "1",
      "factory": "1",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 6,
      "name": "Cappuccino",
      "price": 0.4,
      "description": "gr. 8 di latte in polvere per ciascuna erogazione",
      "ingredients": "latte in polvere, caffè, zucchero",
      "category": "bevande calde",
      "photo": null,
      "producer": "4",
      "factory": "4",
      "machines": [],
      "family": [
        "normale",
        "prodotti locali"
      ]
    },
    {
      "_id": 7,
      "name": "Cappuccino al cioccolato",
      "price": 0.4,
      "description": "gr. 25 di miscela cioccolato-cacao in polvere per erogazione",
      "ingredients": "latte in polvere, caffè, zucchero",
      "category": "bevande calde",
      "photo": null,
      "producer": "4",
      "factory": "4",
      "machines": [],
      "family": [
        "normale",
        "prodotti locali"
      ]
    },
    {
      "_id": 8,
      "name": "Thè caldo al limone",
      "price": 0.8,
      "description": "grammatura minima per erogazione pari a gr 14 di thè in polvere",
      "ingredients": "zucchero, acqua, acidificante: acido citrico, estratto di thè (1,5%), succo di limone (0,4), aromi",
      "category": "bevande calde",
      "photo": null,
      "producer": "5",
      "factory": "5",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 9,
      "name": "Oreo",
      "price": 0.6,
      "description": "Porzione: 11 g, Zuccheri: 4.1 g, Grassi: 2.2 g, Sale: 0.1 g",
      "ingredients": "farina di frumento, zucchero,oli vegetali (palma, palmisto), cacao magro in polvere 4,6%, amido di frumento, sciroppo di glucosio-fruttosio, agenti lievitanti (carbonati di potassio, carbonati di ammonio, carbonati di sodio), sale, emulsionanti (lecitine di soia, lecitine di girasole), aroma (vanillina).",
      "category": "merendine dolci",
      "photo": null,
      "producer": "6",
      "factory": "6",
      "machines": [],
      "family": [
        "normale"
      ]
    },
    {
      "_id": 10,
      "name": "Vitasnella cereal-yo cacao",
      "price": 0.5,
      "description": "Formato di vendita: 51 g",
      "ingredients": "Cereali 52,9% (farina di frumento 41,6%, cereali integrali 9,3% (fiocchi integrali di avena 5,2%, farina integrale di orzo 1,9%, farina integrale di segale 1%, farina integrale di farro 1%, chicchi integrali frantumati di grano saraceno 0,2%), crusca e germe di frumento 2%), zucchero, oli vegetali (colza, palma, cocco, palmisto), amido di frumento, yogurt magro in polvere 3% (equivalente a 20% di yogurt), cacao magro in polvere 1.9%, minerali (carbonato di calcio, carbonato di magnesio, ferro elementare), agenti lievitanti (carbonati di sodio, difosfati, carbonati di ammonio), aromi, amulsionanti (lecitine di soia, E472e), sale, correttore di acidità (acido citrico), vitamine (vitamina E, vitamina B1 (tiamina))",
      "category": "merendine dolci",
      "photo": null,
      "producer": "7",
      "factory": "7",
      "machines": [],
      "family": [
        "normale",
        "basso contenuto calorico",
        "senza glutine"
      ]
    },
    {
      "_id": 11,
      "name": "Tronky cocco",
      "price": 0.5,
      "description": "Formato di vendita: 18 g",
      "ingredients": "Zucchero, cocco essiccato (20.5%), olio di palma, farina di frumento, latte scremato in polvere, siero di latte in polvere, amido di frumento, estratto di cocco in polvere (0.5%), olio di girasole, aromi, emulsionanti",
      "category": "merendine dolci",
      "photo": null,
      "producer": "3",
      "factory": "3",
      "machines": [],
      "family": [
        "normale",
        "basso contenuto calorico"
      ]
    },
    {
      "_id": 12,
      "name": "Grissinbon mini fagolosi - mini grissini gusto classico",
      "price": 0.5,
      "description": "Formato di vendita: 20 g",
      "ingredients": "Farina di grano tenero tipo 0, grasso vegetale (palma), crema di lievito, sale iodato (sale, iodato di potassio 0.007%) 2.6%, olio extra vergine d'oliva 1.4%, farina di frumento maltato, glutine, estratto di malto d'orzo, aromi naturali",
      "category": "merendine salate",
      "photo": null,
      "producer": "8",
      "factory": "8",
      "machines": [],
      "family": [
        "normale",
        "basso contenuto calorico"
      ]
    },
    {
      "_id": 13,
      "name": "Riso Scotti - Crackers di riso",
      "price": 0.5,
      "description": "Formato di vendita: 25 g",
      "ingredients": "farina di riso(98,7%), sale marino",
      "category": "merendine salate",
      "photo": null,
      "producer": "9",
      "factory": "9",
      "machines": [],
      "family": [
        "normale",
        "basso contenuto calorico",
        "senza glutine"
      ]
    },
    {
      "_id": 14,
      "name": "Crik Crok",
      "price": 0.5,
      "description": "Formato di vendita: 25 g",
      "ingredients": "patate, olio di semi di girasole, sale iodato",
      "category": "merendine salate",
      "photo": null,
      "producer": "10",
      "factory": "10",
      "machines": [],
      "family": [
        "normale",
        "senza glutine"
      ]
    }
  ]
});
            },
            err => console.log(err));
      }));
  it('Service: Product getById() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getById(1)
            .subscribe((data:Message) => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "name": "Cocacola",
      "price": 0.8,
      "description": "Formato di vendita: 330 ml, Porzione: 200 g, Zuccheri: 21.2 g Grassi: 0 g, Sale: 0 g",
      "ingredients": "acqua, zucchero, anidride carbonica, colorante,E 150 d, acidificante acido fosforico, aromi naturali (inclusa caffeina)",
      "category": "bevande fredde",
      "photo": null,
      "producer": "1",
      "factory": "1",
      "machines": [],
      "family": [
        "normale"
      ]
    }
  ]
});
            },
            err => console.log(err));
      })
  );
  it('Service: Product postProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=15;
        product.name="Cocacola";
        product.price=0.9;
        product.description="Formato di vendita: 330 ml, Porzione: 200 g, Zuccheri: 21.2 g Grassi: 0 g, Sale: 0 g";
        product.ingredients="acqua, zucchero, anidride carbonica, colorante,E 150 d, acidificante acido fosforico, aromi naturali (inclusa caffeina)";
        product.category="bevande fredde";
        product.photo=null;
        product.producer=1;
        product.factory=1;
        product.family=["normale"];
        service.postProduct(product)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data added"});
            },
            err => console.log(err));
      })
  );

  it('Service: Product putProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=15;
        product.name="Cocacola";
        product.price=1.0;
        product.description="Formato di vendita: 330 ml, Porzione: 200 g, Zuccheri: 21.2 g Grassi: 0 g, Sale: 0 g";
        product.ingredients="acqua, zucchero, anidride carbonica, colorante,E 150 d, acidificante acido fosforico, aromi naturali (inclusa caffeina)";
        product.category="bevande fredde";
        product.photo=null;
        product.producer=1;
        product.factory=1;
        product.family=["normale"];
        service.putProduct(product._id,product)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data Modified"});
            },
            err => console.log(err));
      })
  );

  it('deleteProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=15;
        service.deleteProduct(product._id)
            .subscribe(data => {   
                  expect(data).toEqual({ });             
                  
            },
            err => console.log(err));
      })
  );
});