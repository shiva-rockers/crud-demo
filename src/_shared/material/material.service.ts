import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class MaterialService {

    constructor(private snackbar: MatSnackBar) { }

    snackOpen(message, action, config: any = { duration: 2000, direction: 'left' }) {
        this.snackbar.open(message, action, config)
    }

    snackFromComponent(action, message, duration:any = 2000) {
        duration = !duration && action === 'error' ? 3500 : duration
        this.snackbar.openFromComponent(SnackbarComponent, {
            data: { action, message },
            duration
        })
    }
}
