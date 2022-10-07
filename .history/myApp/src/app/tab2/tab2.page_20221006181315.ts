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
    this.getData
  }

  getData():any{
    this.http.get<any>("https://api.chucknorris.io/jokes/random")
    .subscribe(res => {
      this.frase = res;  
      console.log(res)
    })
  }

}
