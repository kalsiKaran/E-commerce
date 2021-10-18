import { Component, OnInit } from '@angular/core';
import { EcomDataService } from 'src/app/ecom-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usingData:any = [];
  pushToCart:any = []
  constructor(private _dataService: EcomDataService) { }

  ngOnInit(): void {
  this._dataService.getData().subscribe(response => {
    this.usingData = response;
    console.log(this.usingData);
    });
    
  }
}


