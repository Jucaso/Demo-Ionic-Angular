import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {
  producto = [];
  productoId: string;
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http.get<any>("https://api.escuelajs.co/api/v1/products" + )
    .subscribe(res => {
      this.producto = res;  
      console.log(res)
    })
  }

}
