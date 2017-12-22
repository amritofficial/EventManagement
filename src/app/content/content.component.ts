import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MapModel } from "../model/map.model";
import { MapService } from "../services/map.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() searchThis: string;

  mapData: any;
  
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private mapService: MapService ) { }
  ngOnInit() {
    this.mapService.getPlaces().subscribe(data => {
        this.mapData = data.results,
        console.log('SUBSCRIBED :::: '+ this.mapData);
    });
    // this.mapService.getPlaces().subscribe(data => {
    //   this.mapData = data.results,
    //   console.log('Content::::::: ' + this.mapData[0].geometry.location.lat);
    // });
  }

  ngOnChanges() {
    console.log("Content Component: "+this.searchThis);
  }

}
