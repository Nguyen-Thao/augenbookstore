import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Book } from '../shared/book';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryService } from '../shared/DeliveryService';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
    selector: "book-list",
    templateUrl: "booklist.component.html",
    styleUrls: ["bookList.component.scss"]
})

export class BookList implements OnInit {
    constructor(private data: DataService, private modalService: NgbModal,
                private toastService: ToastrService) {
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
        if (this.data.SelectedDeliveryServiceName == '') {
            this.toastService.warning("Please select delivery service.");
        }
        else {
            Swal.fire({
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
                        this.data.addToOrder(book);
                        this.modal.dismissAll();
                        this.data.ResetSelecteDeliveryService();                        
                    } 

                    console.log(willSelect)
                });
            
            
        }
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


}