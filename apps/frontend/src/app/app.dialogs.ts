import { MatDialogConfig } from "@angular/material";

export function getAppDialogs() {
    const mdc = new MatDialogConfig();
    mdc.autoFocus = true;
    mdc.disableClose = true;
    mdc.restoreFocus = true;
    mdc.role = 'dialog';
    mdc.hasBackdrop = true;
    mdc.panelClass = ['dialog-container'];
    return mdc;
}
