import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container p-0">
      <!-- <app-header></app-header>
      <app-to-do></app-to-do> -->
      <h1>{{title}}</h1>
      <nav class="my-5">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/workers" routerLinkActive="active">Workers</a>
      </nav>
      <!-- <app-using-service></app-using-service> -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title:string = 'Routing and Navigation'
}
