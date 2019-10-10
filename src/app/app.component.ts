import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h2 align="center" style="cursor: pointer" (click)="router.navigate([''])"> CRUD-DEMO </h2> 
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private router: Router) { }
}
