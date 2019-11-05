(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Book list';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'the-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _shop_booklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/booklist.component */ "./ClientApp/app/shop/booklist.component.ts");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/cart.component */ "./ClientApp/app/shop/cart.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop/shop.component */ "./ClientApp/app/shop/shop.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");













let routes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["Shop"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shop_booklist_component__WEBPACK_IMPORTED_MODULE_6__["BookList"],
            _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__["Cart"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["Shop"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, {
                useHash: true,
                enableTracing: true //for debugging of the routing
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [
            _shared_dataService__WEBPACK_IMPORTED_MODULE_9__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "./ClientApp/app/shared/order.ts");





let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.Books = [];
        this.Order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.SelectedDeliveryServiceName = '';
        this.SelectedDeliveryServiceCost = 0;
    }
    loadBooks(searchKey) {
        return this.http.get("/api/books/search?key=" + searchKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.Books = data;
            return true;
        }));
    }
    getDeliveryServiceCost() {
        return this.http.get("/api/DeliveryService")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.DeliveryServices = data;
            return true;
        }));
    }
    addToOrder(newBook) {
        let item = this.Order.items.find(i => i.productId == newBook.bookID &&
            i.deliveryServiceCost == this.SelectedDeliveryServiceCost);
        if (item) {
            item.quantity++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_4__["OrderItems"]();
            item.productId = newBook.bookID;
            item.productTitle = newBook.bookTitle;
            item.productAuthor = newBook.author;
            item.productDescription = newBook.description;
            item.productPublishedDate = newBook.publishedDate;
            item.productSmallThumbnail = newBook.smallThumbnail;
            item.productThumbnail = newBook.thumbnail;
            item.deliveryServiceCost = this.SelectedDeliveryServiceCost;
            item.quantity = 1;
            this.Order.items.push(item);
        }
    }
    ResetSelecteDeliveryService() {
        if (this.SelectedDeliveryServiceName != '') {
            this.SelectedDeliveryServiceName = '';
            this.SelectedDeliveryServiceCost = 0;
        }
    }
    selectDeliveryService(deliveryService) {
        this.SelectedDeliveryServiceName = deliveryService.deliveryServiceName;
        this.SelectedDeliveryServiceCost = deliveryService.deliveryServiceCost;
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], DataService);



/***/ }),

/***/ "./ClientApp/app/shared/order.ts":
/*!***************************************!*\
  !*** ./ClientApp/app/shared/order.ts ***!
  \***************************************/
/*! exports provided: Order, OrderItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItems", function() { return OrderItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


class Order {
    constructor() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    get subTotal() {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.items, i => i.quantity * i.deliveryServiceCost));
    }
}
class OrderItems {
}


/***/ }),

/***/ "./ClientApp/app/shop/bookList.component.scss":
/*!****************************************************!*\
  !*** ./ClientApp/app/shop/bookList.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-info img {\n  max-width: 150px;\n  margin: 0 2px;\n  border: 1px solid black;\n}\n\n.product-info .caption {\n  font-size: large;\n  font-weight: bold;\n}\n\n.product-name {\n  font-size: small;\n  font-weight: bold;\n  margin: 2px;\n}\n\n.product-info p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 200px;\n}\n\n.product-detail .product-img img {\n  height: 140px;\n  margin: 0 2px;\n}\n\n.product-detail .group-info {\n  width: 200px;\n  height: auto;\n  margin: 2px 10px 10px 2px;\n  padding: 2px;\n  font-size: small;\n  font-weight: bold;\n  align-content: center;\n}\n\n.product-detail .product-description {\n  font-size: medium;\n}\n\n.delivery-service li {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9EOlxcVGhhb1xcR0lUSFVCXFxjaGVja1xcYXVnZW5ib29rc3RvcmUvQ2xpZW50QXBwXFxhcHBcXHNob3BcXGJvb2tMaXN0LmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9zaG9wL2Jvb2tMaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9zaG9wL2Jvb2tMaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW5mbyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4OyAgICBcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyAuY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjJweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyBwIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1kZXRhaWwgLnByb2R1Y3QtaW1nIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICB9XHJcblxyXG4ucHJvZHVjdC1kZXRhaWwgLmdyb3VwLWluZm8ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAycHggMTBweCAxMHB4IDJweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0LWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxufVxyXG5cclxuLmRlbGl2ZXJ5LXNlcnZpY2UgbGkge1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn0iLCIucHJvZHVjdC1pbmZvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJvZHVjdC1pbmZvIC5jYXB0aW9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5wcm9kdWN0LWluZm8gcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbCAucHJvZHVjdC1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIC5ncm91cC1pbmZvIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMnB4IDEwcHggMTBweCAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5kZWxpdmVyeS1zZXJ2aWNlIGxpIHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./ClientApp/app/shop/booklist.component.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/shop/booklist.component.ts ***!
  \**************************************************/
/*! exports provided: BookList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookList", function() { return BookList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);





//import * as _swal from 'sweetalert';

//import { SweetAlert } from 'sweetalert/typings/core';
//const swal: SweetAlert = _swal as any;
let BookList = class BookList {
    constructor(data, modalService, toastService) {
        this.data = data;
        this.modalService = modalService;
        this.toastService = toastService;
        this.Books = [];
        this.Books = data.Books;
        this.modal = modalService;
        this.matDialog = this.matDialog;
    }
    ngOnInit() {
        this.data.getDeliveryServiceCost()
            .subscribe(success => {
            if (success) {
                this.DeliveryServices = this.data.DeliveryServices;
            }
        });
    }
    addBook(book) {
        if (this.data.SelectedDeliveryServiceName == '') {
            this.toastService.warning("Please select delivery service.");
        }
        else {
            //this.toastService.success(this.data.SelectedDeliveryServiceName + "(" + this.data.SelectedDeliveryServiceCost + ") is selected"); 
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: "Are you sure?",
                text: "Are you sure you want to select " + this.data.SelectedDeliveryServiceName + " ($" + this.data.SelectedDeliveryServiceCost + ") delivery service?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, select it!'
            })
                .then((willSelect) => {
                if (willSelect.value) {
                    //this.toastService.success(this.data.SelectedDeliveryServiceName + "(" + this.data.SelectedDeliveryServiceCost + ") is selected"); 
                    this.data.addToOrder(book);
                    this.modal.dismissAll();
                    this.data.ResetSelecteDeliveryService();
                }
                console.log(willSelect);
            });
        }
    }
    open(content, book) {
        this.SelectedBook = book;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    setDeliveryServiceCost(selectedDeliveryService) {
        //this.toastService.success(selectedDeliveryService.deliveryServiceName);
        this.data.selectDeliveryService(selectedDeliveryService);
    }
};
BookList.ctorParameters = () => [
    { type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
BookList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "book-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/booklist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookList.component.scss */ "./ClientApp/app/shop/bookList.component.scss")).default]
    })
], BookList);



/***/ }),

/***/ "./ClientApp/app/shop/cart.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/cart.component.ts ***!
  \**********************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");



let Cart = class Cart {
    constructor(data) {
        this.data = data;
    }
};
Cart.ctorParameters = () => [
    { type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "the-cart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html")).default
    })
], Cart);



/***/ }),

/***/ "./ClientApp/app/shop/shop.component.css":
/*!***********************************************!*\
  !*** ./ClientApp/app/shop/shop.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* Bootstrap 4 text input with search icon */\r\n\r\n.has-search .form-control {\r\n    padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 2.375rem;\r\n    height: 2.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRDQUE0Qzs7QUFFNUM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEJvb3RzdHJhcCA0IHRleHQgaW5wdXQgd2l0aCBzZWFyY2ggaWNvbiAqL1xyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyLjM3NXJlbTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi4zNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./ClientApp/app/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");



let Shop = class Shop {
    constructor(data) {
        this.data = data;
    }
    onEnter(searchKey) {
        this.data.loadBooks(searchKey)
            .subscribe(success => {
            if (!success) {
                alert("Cannot find any book with the search string.");
            }
        });
    }
};
Shop.ctorParameters = () => [
    { type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Shop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "the-shop",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./ClientApp/app/shop/shop.component.css")).default]
    })
], Shop);



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\r\n\r\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/booklist.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/booklist.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"product-info col-md-4\" *ngFor=\"let p of data.Books\">\r\n            <div class=\"card bg-light p-1 m-1\">\r\n                <a class=\"btn\" (click)=\"open(content, p)\">\r\n                    <img src=\"{{p.smallThumbnail}}\" alt=\"{{p.bookTitle}}\" class=\"img-fluid\" />\r\n                    <div class=\"product-name\">\r\n                        <p>{{p.bookTitle}}</p>\r\n                        <!--<h5 class=\"pull-right\">{{p.title}}</h5>-->  \r\n                        <p>{{p.author}} - {{p.publishedDate | date : 'MM-dd-yyyy'}}</p>\r\n                    </div>\r\n                    \r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Detail popup</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"product-detail\">\r\n                <div class=\"card bg-light p-1 m-1\">\r\n                    <section>\r\n                        <div class=\"group-info float-left\">\r\n                            <img src=\"{{SelectedBook.smallThumbnail}}\" class=\"img-fluid\" alt=\"{{SelectedBook.title}}\" />\r\n                            <div class=\"product-name\">\r\n                                <p>{{SelectedBook.bookTitle}}</p>                                \r\n                                <p>{{SelectedBook.author}} - {{SelectedBook.publishedDate | date : 'MM-dd-yyyy'}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"product-description\">{{SelectedBook.description}}</p>    \r\n                    </section>\r\n                    \r\n                    <div>\r\n                        <p class=\"product-name\">Ship via</p>\r\n                        <hr />\r\n                        <div class=\"delivery-service\">\r\n                            <ul class=\"list-group list-group-flush list-group-horizontal-md\">\r\n                                <li class=\"list-group-item\" *ngFor=\"let ds of DeliveryServices\">\r\n                                    <a class=\"btn btn-primary\" (click)=\"setDeliveryServiceCost(ds)\">{{ds.deliveryServiceName}} {{ds.deliveryServiceCost |  currency:\"USD\":true}}</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                             \r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button id=\"buyButton\" class=\"btn btn-success\" (click)=\"addBook(SelectedBook)\">Buy</button>           \r\n        </div>\r\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/cart.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Shoping cart</h3>\r\n<div>#/items: {{data.Order.items.length}}</div>\r\n<div>Subtotal: {{data.Order.subTotal | currency:\"USD\":true}}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Prod</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>T</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.Order.items\">\r\n            <td>{{o.productTitle}}</td>\r\n            <td>{{o.quantity}}</td>\r\n            <td>{{o.deliveryServiceCost}}</td>\r\n            <td>{{(o.quantity * o.deliveryServiceCost)}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<a class=\"btn btn-success\" *ngIf=\"data.Order.items.length > 0\">Checkout</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/shop/shop.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{title}}</h3>\r\n        <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-search form-control-feedback\"></span>\r\n            <input #searchBox type=\"text\" class=\"form-control\" placeholder=\"search by book title or author\" (keyup.enter)=\"onEnter(searchBox.value)\" />\r\n        </div>\r\n        <book-list>\r\n\r\n        </book-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"card bg-light p-2\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Thao\GITHUB\check\augenbookstore\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map