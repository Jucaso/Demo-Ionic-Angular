import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productos = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get<any>("https://api.escuelajs.co/api/v1/products")
    .subscribe(res => {
      this.productos = res;  
      //console.log(res)
    })
  }
}
