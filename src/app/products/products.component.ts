import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  id_product : number; // questo sarà sia il nome del file immagine che l'id del prodotto
  image : string;
  submitted : boolean;
  constructor(private productservice : ProductsService) {
    
   }

  ngOnInit() {
  // visualizzazione immagine
   this.image = this.productservice.getResourceImage("undefined-1471755398382.jpeg");
   this.id_product = 1;
   // modificata da massimo 
   //this.onsubmit();
   // fine modifica
  }
  onsubmit(){
    
    console.log("Effettuo il submit");
    // modificata da massimo
    this.submitted = true;
  }
}

