import { Component } from '@angular/core';
import { DataService } from "../shared/dataService"


@Component({
    selector: "the-shop",
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']
})
export class Shop {

    constructor(private data: DataService) {
    
    }

    onEnter(searchKey: string) {        
        this.data.loadBooks(searchKey)
            .subscribe(success => {
                if (!success) {
                    alert("Cannot find any book with the search string.");
                }
            });       
    }
}