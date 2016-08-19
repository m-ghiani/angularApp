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
                console.log("Service: Product getAll() method testing result: " + data.error);
                  expect(data.error).toBe(true);
            },
            err => console.log(err));
      }));
  it('Service: Product getById() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getById(1)
            .subscribe((data:Message) => {
                  console.log("Service: Product getById() method testing result: " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('Service: Product postProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=15;
        product.name="Sprite scura";
        product.price=0.99;
        product.description=" di descrizione";
        product.ingredients="Ingredienti del prodotto";
        product.category="Categoria";
        product.photo="ciao";
        product.producer=1;
        product.factory=1;
        product.family=["normale"];
        service.postProduct(product)
            .subscribe(data => {
                console.log("Service: Product postProduct() method testing result: " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Product putProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=5;
        product.name="Sprite sca";
        product.price=0.99;
        product.description="descrizione";
        product.ingredients="Ingredienti del prodotto";
        product.category="Categoria";
        product.photo="ciao";
        product.producer=1;
        product.factory=1;
        product.family=["normale"];
        service.putProduct(product._id,product)
            .subscribe(data => {
                console.log("Service: Product putProduct() method testing result: " + data.error);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('Service: Product deleteProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=15;
        service.deleteProduct(product._id)
            .subscribe(data => {
              // qui il problema non capisco perchè ritorni undfined
                console.log("Service: Product deleteProduct() method testing result: " + data.error);
                  expect(data.error).toBe(false);
                  expect(data.error).toEqual(false);
            },
            err => console.log(err));
      })
  );
});