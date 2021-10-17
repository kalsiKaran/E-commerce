import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './components/to-do/to-do.component';
import { HeaderComponent } from './components/header/header.component';
import { UsingServiceComponent } from './components/using-service/using-service.component';

import { DataServiceService } from './data-service.service';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingModules } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    HeaderComponent,
    UsingServiceComponent,
    routingModules
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
