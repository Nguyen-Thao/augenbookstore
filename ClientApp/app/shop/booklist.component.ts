import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Book } from '../shared/book';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryService } from '../shared/DeliveryService';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDialog } from '../dialog/confirmDialog.component'
import { dialogData } from '../shared/dialogData';

@Component({
    selector: "book-list",
    templateUrl: "booklist.component.html",
    styleUrls: ["bookList.component.scss"]
})

export class BookList implements OnInit {
    constructor(private data: DataService, private modalService: NgbModal, private dialog: MatDialog) {
        this.Books = data.Books;
        this.modal = modalService;
        this.matDialog = this.matDialog;
    }

    public Books: Book[] = [];
    public SelectedBook: Book;
    public DeliveryServices: DeliveryService[];
    public modal: NgbModal;
    public closeResult: string;
    public matDialog;
    
    ngOnInit(): void {

        this.data.getDeliveryServiceCost()
            .subscribe(success => {
                if (success) {
                    this.DeliveryServices = this.data.DeliveryServices;
                }
            });
    }

    addBook(book: Book) {
        this.data.addToOrder(book);
        this.modal.dismissAll();
    }

    open(content: any, book: Book) {
        this.SelectedBook = book;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    setDeliveryServiceCost(selectedDeliveryService: DeliveryService) {
        this.data.selectDeliveryService(selectedDeliveryService); 
    }

    openModal() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Show dialog'
        };

        const dialogRef = this.dialog.open(ConfirmDialog, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            alert("response: " + result)
        });
    }

}