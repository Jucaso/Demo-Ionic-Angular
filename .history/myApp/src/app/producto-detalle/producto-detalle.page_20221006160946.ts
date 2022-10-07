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

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
  this.productoId = this.activatedRoute.snapshot.params.id;
  this.http.get<any>("https://dragon-ball-super-api.herokuapp.com/api/characters/" + this.productoId)
  .subscribe(res => {
    this.producto = res;
    console.log(res)
  })
  console.log(this.productoId)

}
