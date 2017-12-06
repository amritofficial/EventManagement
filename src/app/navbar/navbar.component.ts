import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
    searchString: any;

    getSearchString(data) {
        this.searchString = data;
        console.log(":::: " +data);
    }
}