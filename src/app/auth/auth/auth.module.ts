import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthRouting } from './auth-routing.module';
import { MatModule } from 'src/app/shared/mat/mat.module';


@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports: [
        AuthRouting,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatModule
    ]

})


export class AuthModule{}