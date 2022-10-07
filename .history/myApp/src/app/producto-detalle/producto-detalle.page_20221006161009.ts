import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {
  producto = [];
  productoId: string;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
  this.productoId = this.activatedRoute.snapshot.params.id;
  this.http.get<any>("https://api.escuelajs.co/api/v1/products/" + this.productoId)
  .subscribe(res => {
    this.producto = res;
    console.log(res)
  })
  console.log(this.productoId)

}
