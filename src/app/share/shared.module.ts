import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { CommonMaterialModule } from './common-material.module';



@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [
    CommonModule,
    CommonMaterialModule
  ],
  entryComponents :[HeaderComponent]
})
export class SharedModule { }
