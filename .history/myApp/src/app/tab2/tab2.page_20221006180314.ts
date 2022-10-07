import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  frase = [];
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get<any>("https://api.escuelajs.co/api/v1/products")
    .subscribe(res => {
      this.frase = res;  
      //console.log(res)
    })
  }

}
