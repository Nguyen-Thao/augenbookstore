import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let ConfirmDialog = class ConfirmDialog {
    constructor(data) {
        this.data = data;
        this.modalTitle = data.title;
        console.log(data);
    }
};
ConfirmDialog = __decorate([
    Component({
        selector: 'confirmDialog',
        templateUrl: 'confirmDialog.component.html',
    }),
    __param(0, Inject(MAT_DIALOG_DATA))
], ConfirmDialog);
export { ConfirmDialog };
//# sourceMappingURL=confirmDialog.component.js.map