import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges{
    searchString: any;

    ngOnChanges() {
     console.log(this.searchString);
    }

    getSearchString(data) {
        this.searchString = data;
        console.log(":::: " +this.searchString);
    }
}