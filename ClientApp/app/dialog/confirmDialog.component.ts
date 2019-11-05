import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'confirmDialog',
    templateUrl: 'confirmDialog.component.html',
})
export class ConfirmDialog {

    modalTitle: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.modalTitle = data.title;
        console.log(data)
    }

}

