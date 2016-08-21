import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  id_product : number; // questo sarà sia il nome del file immagine che l'id del prodotto
  image : string;
  constructor(private productservice : ProductsService) { }

  ngOnInit() {

  // visualizzazione immagine
   this.image = this.productservice.getResourceImage("undefined-1471755398382.jpeg");
  }
}

