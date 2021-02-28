import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [
    CommonModule
  ],
  entryComponents :[HeaderComponent]
})
export class SharedModule { }
