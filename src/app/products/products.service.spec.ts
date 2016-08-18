/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Product } from './product.model';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([ProductsService,HTTP_PROVIDERS]);
  });

  it('getAll() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      }));
  it('getById() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        service.getById(55)
            .subscribe(data => {
                  expect(data.message[0]._id).toBe(55);
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );
  it('putProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=56;
        product.name="Sprite scura";
        product.price=0.99;
        product.description="Stringa di descrizione";
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
            console.log(this.users);
      })
  );

  it('putProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=55;
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
            console.log(this.users);
      })
  );

  it('deleteProduct() method testing',
    inject([ProductsService],
      (service: ProductsService) => {
        var product = new Product;
        product._id=55;
        service.deleteProduct(product._id)
            .subscribe(data => {
                  expect(data.error).toBe(false);
            },
            err => console.log(err));
            console.log(this.users);
      })
  );
});