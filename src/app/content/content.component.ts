import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MapModel } from "../model/map.model";
import { MapService } from "../services/map.service";
import { marker } from "../interfaces/marker.interface";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() searchThis: string;

  mapData: MapModel[] = [];
  markers:marker[] = [];

  infoWindowOpened = null;
  
  title: string = 'My first AGM project';
  lat: number = 43.653226;
  lng: number = -79.383184;

  constructor(private mapService: MapService ) { }
  ngOnInit() {
    this.mapService.getPlaces().subscribe(data => {
    this.mapData = data.results;
    for(var m in this.mapData){
      this.markers.push({
        lat: this.mapData[m].geometry.location.lat,
        lng: this.mapData[m].geometry.location.lng,
        vicinity: this.mapData[m].vicinity,
        icon: this.mapData[m].icon,
        name: this.mapData[m].name
      });
      console.log("data:: " + this.markers[m].lat);
    }
        // this.mapData = data.results,
        // console.log('SUBSCRIBED :::: '+ this.mapData[0].geometry.location.lat);
    });
  }

  clickedMarker(InfoObject, infoWindow, index: number) {
    console.log(`clicked the marker: ${InfoObject.vicinity || index}`);

    if(this.infoWindowOpened === infoWindow)
      return;
    
    if(this.infoWindowOpened !== null) 
      this.infoWindowOpened.close();

    this.infoWindowOpened = infoWindow;
  }

  ngOnChanges() {
    console.log("Content Component: "+this.searchThis);
  }
}