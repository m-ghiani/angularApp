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

  it('getAll() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getAll()
            .subscribe(data => {
                console.log(data.message);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      }));
  it('getById() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getById(1)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
  it('postProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=190;
        product.name="Sprite scura";
        product.price=0.99;
        product.description=" di descrizione";
        product.ingredients="Ingredienti del prodotto";
        product.category="Categoria";
        product.photo="ciao";
        product.producer=1;
        product.factory=1;
        product.machines=[];
        product.family=["normale"];
        service.postProduct(product)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('putProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=190;
        product.name="Sprite sca";
        product.price=0.99;
        product.description="descrizione";
        product.ingredients="Ingredienti del prodotto";
        product.category="Categoria";
        product.photo="ciao";
        product.producer=1;
        product.factory=1;
        product.machines=[];
        product.family=["normale"];
        service.putProduct(product._id,product)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );

  it('deleteProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=190;
        service.deleteProduct(product._id)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
      })
  );
});