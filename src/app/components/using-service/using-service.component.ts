import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-using-service',
  template: `
    <!-- <p *ngFor = 'let data of fetchData'>
      {{data.content}}
      working
    </p> -->
    {{fetchData.category}}

  `,
  styles: [
  ]
})
export class UsingServiceComponent implements OnInit {

  fetchData:any = [];
  gettingData:any;

  constructor(private _getServiceData : DataServiceService) { }

  ngOnInit(): void {
    this._getServiceData.getServiceData()
    .subscribe(apiData => this.fetchData = apiData);
    // console.log(this.fetchData.category);


    this.gettingData = this.fetchData.category;

    console.log(this.gettingData);
    
    
  }
  
  
}
