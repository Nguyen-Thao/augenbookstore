import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { Book } from './book';
import { DeliveryService } from './deliveryService';
import { Order, OrderItems } from './order';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    public Books: Book[] = [];
    public Order: Order = new Order();
    public DeliveryServices: DeliveryService[];
    public SelectedDeliveryServiceName: string = "";
    public SelectedDeliveryServiceCost: number = 0;
   
    loadBooks(searchKey): Observable<boolean> {        
        return this.http.get("/api/books/search?key=" + searchKey)
            .pipe(                
                map((data: any[]) => {                    
                    this.Books = data;                    
                    return true;
                })
            );
    }

    getDeliveryServiceCost(): Observable<boolean> {
        return this.http.get("/api/DeliveryService")
            .pipe(
                map((data: any[]) => {
                    this.DeliveryServices = data;
                    return true;
                })
            );
    }

    public addToOrder(newBook: Book) {
        let item: OrderItems = this.Order.items.find(i => i.productId == newBook.bookID &&
                             i.deliveryServiceCost == this.SelectedDeliveryServiceCost);
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItems();
            item.productId = newBook.bookID;
            item.productTitle = newBook.bookTitle;
            item.productAuthor = newBook.author;
            item.productDescription = newBook.description;
            item.productPublishedDate = newBook.publishedDate;
            item.productSmallThumbnail = newBook.smallThumbnail;
            item.productThumbnail = newBook.thumbnail;
            item.quantity = 1;
            if (this.SelectedDeliveryServiceName != "") {
                item.deliveryServiceCost = this.SelectedDeliveryServiceCost;
                //reset selected delivery service object
                this.SelectedDeliveryServiceName = "";
                this.SelectedDeliveryServiceCost = 0;
            }
            this.Order.items.push(item);
        }
    }

    public selectDeliveryService(deliveryService: DeliveryService) {
        this.SelectedDeliveryServiceName = deliveryService.deliveryServiceName;
        this.SelectedDeliveryServiceCost = deliveryService.deliveryServiceCost;
    }

}