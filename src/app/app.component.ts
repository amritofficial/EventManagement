import { Component, OnInit } from '@angular/core';
import { MapService } from "./services/map.service";
import { JsonModel } from "./model/json.model";
import { MapModel } from "./model/map.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  result: MapModel[] = [];

  testResults: JsonModel;

  constructor(public MapService: MapService) {
  
  }

  ngOnInit() {
    console.log('THE APP JUST RAN!');
    this.MapService.getData().subscribe(data => {
      this.result = data.results,
      console.log(":::: " + this.result[0].geometry.location.lat);
    });


    this.MapService.getTestData().subscribe(data => {
      this.testResults = data,
      console.log('TEST RESULTS: ' + this.testResults.window[0].title);
    });
  }
}
