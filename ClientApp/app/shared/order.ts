import * as _ from 'lodash';

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItems> = new Array<OrderItems>();

    get subTotal(): number {
        return _.sum(_.map(this.items, i => i.quantity * i.deliveryServiceCost));
    }
}

export class OrderItems {
    id: number;
    quantity: number;
    deliveryService: string;
    deliveryServiceCost: number;
    productId: string;
    productTitle: string;
    productDescription: string;
    productAuthor: string;
    productPublishedDate: string;
    productSmallThumbnail: string;
    productThumbnail: string;
}