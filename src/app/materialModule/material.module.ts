import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    exports:[
        MatCardModule,
        MatGridListModule,
        MatButtonModule
    ],
})
export class MaterialModule {}
