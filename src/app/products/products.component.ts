import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle } from '@angular/common';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  directives: [FILE_UPLOAD_DIRECTIVES, CORE_DIRECTIVES,FORM_DIRECTIVES],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: "http://seserver.noip.me:8080/rest/images/"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  id_product : number; // questo sarà sia il nome del file immagine che l'id del prodotto
  image : string;
  constructor(private productservice : ProductsService) { }

  ngOnInit() {

  // visualizzazione immagine
   this.image = this.productservice.getResourceImage("undefined-1471755398382.jpeg");
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}

